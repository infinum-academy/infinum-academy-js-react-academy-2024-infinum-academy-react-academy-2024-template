"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./ReviewForm.module.css";
import { IReview, IReviewFormProps } from "@/typings/review";
import StarIcon from "../StarIcon/StarIcon";
import { v4 as uuidv4 } from "uuid";
import { Button, chakra, Flex, FormControl, FormErrorMessage, Textarea, Input, useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUser } from "@/hooks/useUser";
import { IUser } from "@/fetchers/user";

interface IFormData {
  comment: string;
  rating: number;
}
interface IApiResponse{
  user: IUser;
}

const schema = yup
  .object({
    comment: yup.string().required("Comment is required"),
    rating: yup
      .number()
      .required("Rating is required")
      .min(1, "Rating must be at least 1 star")
      .max(5, "Rating must be at most 5 stars"),
  })
  .required();

export default function ReviewForm({ handleReview, show_id, review, mode }: IReviewFormProps) {
  useEffect(() => {
    styleRatingStars(review?.rating || 0);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    reset,
    trigger,
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });
  const [rating, setRating] = useState(review?.rating || 0);
  const starsParent = useRef<HTMLDivElement>(null);
  const { data } = useUser() as { data: IApiResponse };
  const toast = useToast();

  function onRatingInputSelection(event: React.ChangeEvent<HTMLInputElement>) {
    const currentRating = Number(event.target.value);
    setRating(currentRating);
  }

  function onRatingChange(event: React.ChangeEvent<HTMLInputElement>) {
    const currentRating = Number(event.target.value);
    styleRatingStars(currentRating);
    setValue("rating", currentRating);
    trigger("rating");
  }

  function styleRatingStars(currentRating: number) {
    if (starsParent.current) {
      const stars = starsParent.current?.childNodes as NodeListOf<HTMLElement>;
      resetingRatingStars();

      const selectedIndex = 5 - currentRating;
      for (let i = 4; i >= selectedIndex; i--) {
        stars[i].style.color = "gold";
      }
    }
  }

  function resetingRatingStars() {
    const stars = starsParent.current?.childNodes as NodeListOf<HTMLLabelElement>;

    stars.forEach((star) => {
      star.style.color = "#fff";
      const inputElement = star.childNodes[0] as HTMLInputElement;
      inputElement.checked = false;
    });
  }

  const onSubmit = ({ comment, rating }: IFormData) => {
    const newReview: IReview = {
      id: review ? review.id : uuidv4(),
      comment,
      rating,
      show_id,
      user: {
        id: data.user.id,
        email: data.user.email,
        image_url: data.user.image_url
      }
    };
    handleReview(newReview);
    setRating(0);
    resetingRatingStars();
    reset();
  };

  function onError() {
    toast({
      title: "Review not posted",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  }

  return (
    <chakra.form
      id={mode}
      className={styles.reviewForm}
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <FormControl
        isInvalid={!!errors.comment}
        isDisabled={isSubmitting}
      >
        <Textarea
          {...register("comment")}
          color="black"
          bg="white"
          className={styles.reviewComment}
          id="reviewComment"
          placeholder={mode == 'create' ? 'Add review' : 'Edit review'}
          defaultValue={review?.comment || ''}
          rows={3}
          tabIndex={1}
        ></Textarea>
        <FormErrorMessage>
          {errors.comment && errors.comment.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl
        isInvalid={!!errors.rating}
        isDisabled={isSubmitting}
      >
        <Input
          type="hidden"
          {...register("rating")}
          value={rating || String(review?.rating)}
        />
        <Flex
          className={styles.reviewRating}
          id="reviewRating"
          ref={starsParent as React.RefObject<HTMLDivElement>}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <StarIcon
              key={index}
              label="rating"
              value={5 - index}
              onBlur={onRatingInputSelection}
              onChange={onRatingChange}
            />
          ))}
        </Flex>
        <FormErrorMessage>
          {errors.rating && errors.rating.message}
        </FormErrorMessage>
      </FormControl>

      {
        mode == 'create' && (
          <div>
            <Button
              form="create"
              className="reviewPostBtn"
              type="submit"
              tabIndex={3}
              isDisabled={isSubmitting}
            >
              Post
            </Button>
          </div>
        )
      }
    </chakra.form>
  );
}
