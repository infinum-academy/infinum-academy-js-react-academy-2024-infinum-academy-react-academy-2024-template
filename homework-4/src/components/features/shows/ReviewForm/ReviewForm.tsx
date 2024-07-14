"use client";
import React, { useState, useRef } from "react";
import styles from "./ReviewForm.module.css";
import { IReview, IReviewFormProps } from "@/typings/review";
import StarIcon from "../StarIcon/StarIcon";
import { v4 as uuidv4 } from "uuid";
import {
  Button,
  chakra,
  Flex,
  FormControl,
  FormErrorMessage,
  Textarea,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormData {
  comment: string;
  rating: number;
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

export default function ReviewForm({ onAddReview }: IReviewFormProps) {
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
  const [rating, setRating] = useState(0);
  const starsParent = useRef<HTMLDivElement>(null);
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
    const stars = starsParent.current
      ?.childNodes as NodeListOf<HTMLLabelElement>;

    stars.forEach((star) => {
      star.style.color = "#fff";
      const inputElement = star.childNodes[0] as HTMLInputElement;
      inputElement.checked = false;
    });
  }

  const onSubmit = ({ comment, rating }: IFormData) => {
    const newReview: IReview = {
      id: uuidv4(),
      avatar:
        "https://st3.depositphotos.com/6672868/13701/v/380/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
      email: "email@example.com",
      comment,
      rating,
    };
    onAddReview(newReview);
    toast({
      title: "Review posted",
      status: "success",
      duration: 3500,
      isClosable: true,
    });
    setRating(0);
    resetingRatingStars();
    reset();
  };

  function onError() {
    toast({
      title: "Review not posted",
      status: "error",
      duration: 3500,
      isClosable: true,
    });
  }

  return (
    <chakra.form
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
          placeholder="Add review"
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
          value={rating}
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

      <div>
        <Button
          className="reviewPostBtn"
          type="submit"
          tabIndex={3}
          isDisabled={isSubmitting}
        >
          Post
        </Button>
      </div>
    </chakra.form>
  );
}
