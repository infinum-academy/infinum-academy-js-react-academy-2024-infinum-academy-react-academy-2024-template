"use client";
import React from "react";
import { useState, useRef } from "react";
import styles from "./ReviewForm.module.css";
import { IReview, IReviewFormProps } from "@/typings/review";
import StarIcon from "../StarIcon/StarIcon";
import { nanoid } from "nanoid";
import { Button, Flex, Textarea } from "@chakra-ui/react";

export default function ReviewForm({ onAddReview }: IReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const commentEl = useRef<HTMLTextAreaElement>();
  const starsParent = useRef<HTMLDivElement>();

  function onRatingInputSelection(event: React.ChangeEvent<HTMLInputElement>) {
    const currentRating = Number(event.target.value);
    setRating(currentRating);
  }

  function onRatingChange(event: React.ChangeEvent<HTMLInputElement>) {
    const currentRating = Number(event.target.value);
    styleRatingStars(currentRating);
  }

  function styleRatingStars(currentRating: number) {
    const stars = starsParent.current!.childNodes as NodeListOf<HTMLElement>;
    
    stars.forEach((star) => {
      (star as HTMLElement).style.color = "#fff";
    });
    const selectedIndex = 5 - currentRating;
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
      avatar:
        "https://st3.depositphotos.com/6672868/13701/v/380/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
      email: "email@example.com",
      comment,
      rating,
    };
    onAddReview(newReview);
    resetFormInputs();
  }

  function resetFormInputs() {
    const stars = starsParent.current!.childNodes as NodeListOf<HTMLElement>;
    stars.forEach((star) => (star.style.color = "#fff"));
    commentEl.current!.value = "";
    setComment("");
    setRating(0);
  }

  return (
    <Flex className={styles.reviewForm}>
      <Textarea
        ref={commentEl as React.RefObject<HTMLTextAreaElement>}
        color="black"
        bg="white"
        className={styles.reviewComment}
        id="reviewComment"
        placeholder="Add review"
        rows={3}
        tabIndex={1}
        onBlur={(event) => setComment(event.target.value)}
      ></Textarea>

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
