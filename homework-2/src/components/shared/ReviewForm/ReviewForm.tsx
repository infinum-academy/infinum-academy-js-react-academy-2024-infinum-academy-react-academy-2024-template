'use client'
import { Button, Flex, Textarea } from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";
import styles from "./ReviewForm.module.css";

export default function ReviewForm() {
  const [rating, setRating] = useState<number>(0);
  const [reviewArr, setReviewArr] = useState<{ id: string; comment: string; rating: number }[]>([]);
  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("review-array") || "[]");
    setReviewArr(storedReviews);
  }, []);
  const averageRatingEl = document.querySelector(
    ".average-rating"
  ) as HTMLElement;

  function renderReviews(
    newReview: { rating: number; id: string; comment: string } | null
  ) {
    if (newReview) {
      setReviewArr(oldArray => {
        return [newReview, ...oldArray];
      });
      styleRatingStars(newReview.rating, newReview.id);
    } else {
      if (reviewArr.length === 0) return;
      const reviewList = document.querySelector(".review-list");
      reviewArr.forEach(
        (review: { rating: number; id: string; comment: string }) => {
          reviewList?.appendChild(createReviewElement(review));
          styleRatingStars(review.rating, review.id);
        }
      );
    }
    calculateAverageRating();
  }

  function onRatingChange(event: React.ChangeEvent<HTMLInputElement>) {
    setRating(Number(event?.target?.value));
    styleRatingStars(rating, "");
  }

  function styleRatingStars(rating: number, id: string) {
    let stars: NodeListOf<HTMLElement>;
    if (id) {
      stars = document.querySelectorAll(
        `[data-rating-index="${id}"] i`
      ) as NodeListOf<HTMLElement>;
    } else {
      stars = document.querySelectorAll(
        ".review-rating i"
      ) as NodeListOf<HTMLElement>;
    }
    const selectedIndex = 5 - rating;

    stars.forEach((star) => (star.style.color = "#fff"));

    for (let i = 4; i >= selectedIndex; i--) {
      stars[i].style.color = "gold";
    }
  }

  function createReviewElement(review: {
    id: string;
    comment: string;
    rating: number;
  }) {
    const reviewEl = document.createElement("div");
    reviewEl.setAttribute("data-index", review.id);

    reviewEl.classList.add("review-element");
    reviewEl.innerHTML = `
      <div>
        <p>${review.comment}</p>
        <p>${review.rating} / 5</p>
        <p data-rating-index=${review.id} class="review-rated">
          <i class="fa-regular fa-star star"></i>
          <i class="fa-regular fa-star star"></i>
          <i class="fa-regular fa-star star"></i>
          <i class="fa-regular fa-star star"></i>
          <i class="fa-regular fa-star star"></i>
        </p>
      </div>
      <button class="review-delete-btn" onclick='deleteReview(${JSON.stringify(
        review
      )})'>Delete</button>
    `;
    return reviewEl;
  }

  function addNewReview() {
    const comment = document.getElementById("review-comment");
    let id;

    if (!comment?.nodeValue || !rating || rating < 1 || rating > 5) {
      alert("Please fill in the comment and select a rating between 1 and 5");
      return;
    }

    if (reviewArr.length) {
      id = reviewArr[0].id + 1;
    }

    const newReview = {
      id: String(id || 1),
      comment: comment.nodeValue,
      rating: rating,
    };
    reviewArr.unshift(newReview);
    localStorage.setItem("review-array", JSON.stringify(reviewArr));
    renderReviews(newReview);
    resetFormInputs();
  }

  function resetFormInputs() {
    setRating(0);
    const stars = document.querySelectorAll(
      ".review-rating i"
    ) as NodeListOf<HTMLElement>;
    stars.forEach((star) => (star.style.color = "#fff"));

    const comment = document.getElementById(
      "review-comment"
    ) as HTMLInputElement;
    comment.value = "";
  }

  function calculateAverageRating() {
    const totalRating = reviewArr.reduce(
      (sum: number, review: { rating: number }) => sum + review.rating,
      0
    );
    const averageRating =
      reviewArr.length > 0 ? totalRating / reviewArr.length : 0;
    averageRatingEl.innerHTML = `${averageRating.toFixed(2)} (${
      reviewArr.length
    })`;
  }
  return (
    <Flex className={styles.reviewForm}>
      <Textarea
        color={"black"}
        bg="white"
        className={styles.reviewComment}
        name="review-comment"
        id="review-comment"
        placeholder="Add review"
        rows={3}
        tabIndex={1}
      ></Textarea>

      <Flex className={styles.reviewRating}>
        <label>
          <input
            type="radio"
            name="rating"
            value="5"
            onChange={onRatingChange}
            tabIndex={2}
          ></input>
          <i className="fa-regular fa-star star"></i>
        </label>
        <label>
          <input
            type="radio"
            name="rating"
            value="4"
            onChange={onRatingChange}
            tabIndex={2}
          ></input>
          <i className="fa-regular fa-star star"></i>
        </label>
        <label>
          <input
            type="radio"
            name="rating"
            value="3"
            onChange={onRatingChange}
            tabIndex={2}
          ></input>
          <i className="fa-regular fa-star star"></i>
        </label>
        <label>
          <input
            type="radio"
            name="rating"
            value="2"
            onChange={onRatingChange}
            tabIndex={2}
          ></input>
          <i className="fa-regular fa-star star"></i>
        </label>
        <label>
          <input
            type="radio"
            name="rating"
            value="1"
            onChange={onRatingChange}
            tabIndex={2}
          ></input>
          <i className="fa-regular fa-star star"></i>
        </label>
      </Flex>
      <Button
        colorScheme="red"
        className="reviewPostBtn"
        type="submit"
        onClick={addNewReview}
        tabIndex={3}
      >
        Post
      </Button>
    </Flex>
  );
}
