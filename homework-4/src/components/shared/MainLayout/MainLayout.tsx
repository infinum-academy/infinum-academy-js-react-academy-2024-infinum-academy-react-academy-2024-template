"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import ShowReviewSection from "@/components/features/shows/ShowReviewSection/ShowReviewSection";
import ShowDetails from "@/components/features/shows/ShowDetails/ShowDetails";
import { IReview } from "@/typings/review";
import { IShow } from "@/typings/show";
import {
  getItemFromLocalStorage,
  removeLocalStorageItem,
  saveToLocalStorage,
} from "@/components/shared/utilities/LocalStorage/LocalStorage";
import styles from "./MainLayout.module.css";
import { Heading } from "@chakra-ui/react";

export default function MainLayout({tvShow}: {tvShow: IShow}) {
  const [reviewArr, setReviewArr] = useState<IReview[]>([]);
  const [tempShow, setTempShow] = useState({
    sumOfRatings:  Math.round(tvShow.no_of_reviews * tvShow.average_rating),
    noOfReviews: tvShow.no_of_reviews
  });
  const apiRatingSum = Math.round(tvShow.average_rating * tvShow.no_of_reviews);

  useEffect(() => {
    const arr = getItemFromLocalStorage();
    setReviewArr(arr);
    calculateAverageRating(arr);
  }, []);

  function calculateAverageRating(reviews: IReview[]) {
    let sum = 0;
    let average = 0;

    if (reviews.length && apiRatingSum) {
      sum = reviews.reduce((acc, review) => acc + review.rating, apiRatingSum);
      average = sum / (apiRatingSum + reviews.length);
    } else if (!reviews.length && apiRatingSum) {
      sum = apiRatingSum;
      average = sum / apiRatingSum;
    } else if (reviews.length && !apiRatingSum) {
      sum = reviews.reduce((acc, review) => acc + review.rating, 0);
      average = reviews.length ? sum / reviews.length : 0;
    }

    setTempShow({
      sumOfRatings: sum,
      noOfReviews: reviews.length + tvShow.no_of_reviews
    });
  }

  function onAddReview(review: IReview) {
    const newArray = [review, ...reviewArr];
    setReviewArr(newArray);
    saveToLocalStorage("reviewarray", newArray);
    calculateAverageRating(newArray);
  }

  function onDeleteReview(reviewId: string) {
    const filteredArray = reviewArr.filter((review) => review.id !== reviewId);
    setReviewArr(filteredArray);
    calculateAverageRating(filteredArray);
    if (!filteredArray.length) {
      removeLocalStorageItem();
    } else {
      saveToLocalStorage("reviewarray", filteredArray);
    }
  }

  return (
    <main className={styles.main}>
      <ShowDetails show={tvShow} tempShow={tempShow} />
      <Heading
        as="h2"
        size="lg"
        my={3}
      >
        Reviews
      </Heading>
      <ShowReviewSection
        reviews={reviewArr}
        onAddReview={onAddReview}
        onDeleteReview={onDeleteReview}
      />
    </main>
  );
}