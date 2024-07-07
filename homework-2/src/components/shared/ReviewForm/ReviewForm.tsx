"use client";
import {
  Button,
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import styles from "./ReviewForm.module.css";
import { IReviewFormProps } from "@/typings/review";
import { nanoid } from "nanoid";

export default function ReviewForm({ onAddReview }: IReviewFormProps) {
  const [rating, setRating] = useState("");

  function addNewReview() {
    const comment = document.getElementById(
      "reviewComment"
    ) as HTMLInputElement;
    const ratingEl = document.getElementById(
      "reviewRating"
    ) as HTMLInputElement;
    const rating = Number(ratingEl.value);

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
    const comment = document.getElementById(
      "reviewComment"
    ) as HTMLInputElement;
    comment.value = "";
    setRating("");
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

      <NumberInput
        min={1}
        max={5}
        value={rating}
        onChange={(valueString) => setRating(valueString)}
        bg="white"
        style={{ alignSelf: "flex-start" }}
        className="reviewRating"
        name="review-rating"
        id="reviewRating"
      >
        <NumberInputField
          tabIndex={2}
          placeholder="Add rating"
        />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <div>
        <Button
          className="reviewPostBtn"
          type="submit"
          onClick={addNewReview}
          tabIndex={3}
        >
          Post
        </Button>
      </div>
    </Flex>
  );
}
