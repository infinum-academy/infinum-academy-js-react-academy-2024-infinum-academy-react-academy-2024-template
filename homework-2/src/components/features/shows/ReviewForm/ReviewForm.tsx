"use client";
import React from "react";
import { useState } from "react";
import styles from "./ReviewForm.module.css";
import { IReview, IReviewFormProps } from "@/typings/review";
import StarIcon from "../StarIcon/StarIcon";
import { nanoid } from "nanoid";
import {
  Button,
  Flex,
  Textarea,
} from "@chakra-ui/react";

export default function ReviewForm({ onAddReview }: IReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  function onRatingInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const currentRating = Number(event.target.value);
    setRating(currentRating);
    styleRatingStars(currentRating);
  }

  function styleRatingStars(currentRating: number) {
    const stars: NodeListOf<HTMLElement>  = document.querySelectorAll(
      "#reviewRating i"
    );
    const selectedIndex = 5 - currentRating;

    stars.forEach((star) => (star.style.color = "#fff"));
    for (let i = 4; i >= selectedIndex; i--) {
      stars[i].style.color = "gold";
    }
  }

  function addShowReview() {
    if (!comment || !rating || rating < 1 || rating > 5) {
      alert("Please fill in the comment and select a rating between 1 and 5");
      return;
    }

    const newReview: IReview = {
      id: nanoid(),
      avatar: "https://st3.depositphotos.com/6672868/13701/v/380/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
      email: "email@example.com",
      comment: comment,
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

    setComment("");
    setRating(0);
  }

  return (
    <Flex className={styles.reviewForm}>
      <Textarea
        color="black"
        bg="white"
        className={styles.reviewComment}
        name="review-comment"
        id="reviewComment"
        placeholder="Add review"
        rows={3}
        tabIndex={1}
        value={comment}
        onChange={(event) => setComment(event.target.value)}
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
