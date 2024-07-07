"use client";
import {
  Button,
  Flex,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import styles from "./ReviewForm.module.css";
import { IReviewFormProps } from "@/typings/review";
import { nanoid } from "nanoid";
import StarIcon from "../StarIcon/StarIcon";

export default function ReviewForm({ onAddReview }: IReviewFormProps) {
  const [rating, setRating] = useState(0);

  function onRatingInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const rating = Number(event.target.value);
    setRating(rating);
    styleRatingStars(rating);
  }

   function styleRatingStars(rating: number) {
    const stars: NodeListOf<HTMLElement>  = document.querySelectorAll(
      "#reviewRating i"
    );
  
    const selectedIndex = 5 - rating;

    stars.forEach((star) => (star.style.color = "#fff"));

    for (let i = 4; i >= selectedIndex; i--) {
      stars[i].style.color = "gold";
    }
  }

  function addShowReview() {
    const comment = document.getElementById(
      "reviewComment"
    ) as HTMLInputElement;

    if (!comment.value || !rating || rating < 1 || rating > 5) {
      alert("Please fill in the comment and select a rating between 1 and 5");
      return;
    }

    const newReview = {
      id: nanoid(),
      comment: comment.value || "",
      rating: rating,
    };
    onAddReview(newReview);
    resetFormInputs();
  }

  function resetFormInputs() {
    const stars = document.querySelectorAll(
      ".star"
    ) as NodeListOf<HTMLElement>;

    stars.forEach((star) => (star.style.color = "#fff"));

    const comment = document.getElementById(
      "reviewComment"
    ) as HTMLInputElement;
    comment.value = "";
    setRating(0);
  }
  return (
    <Flex className={styles.reviewForm}>
      <Textarea
        color={"black"}
        bg="white"
        className={styles.reviewComment}
        name="review-comment"
        id="reviewComment"
        placeholder="Add review"
        rows={3}
        tabIndex={1}
      ></Textarea>


      <Flex className={styles.reviewRating} id="reviewRating">
        {
          Array.from({ length: 5 }).map((_, index) => (
            <StarIcon key={index} label="rating" value={5 - index} onChange={onRatingInputChange}/>
          ))
      }
      </Flex>
      <div>
        <Button
          className="reviewPostBtn"
          type="submit"
          onClick={addShowReview}
          tabIndex={3}
        >
          Post
        </Button>
      </div>
    </Flex>
  );
}
