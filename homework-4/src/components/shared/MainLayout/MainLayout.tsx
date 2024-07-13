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
  const [show, setShow] = useState<IShow>(tvShow);

  useEffect(() => {
    const arr = getItemFromLocalStorage();
    setReviewArr(arr);
    calculateAverageRating(arr);
  }, []);

  function calculateAverageRating(reviews: IReview[]) {
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    const average = Number((sum / reviews.length).toFixed(2));
    setShow((prevShow) => ({
      ...prevShow,
      averageRating: average,
    }));
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
      <ShowDetails show={show} />
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