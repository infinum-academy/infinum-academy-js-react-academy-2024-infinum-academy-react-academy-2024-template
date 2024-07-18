"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import ShowReviewSection from "@/components/features/shows/ShowReviewSection/ShowReviewSection";
import ShowDetails from "@/components/features/shows/ShowDetails/ShowDetails";
import { IReview, IReviewList } from "@/typings/review";
import { IShow } from "@/typings/show";
import styles from "./MainLayout.module.css";
import { Heading } from "@chakra-ui/react";
import { swrKeys } from "@/fetchers/swrKeys";
import { fetcher } from "@/fetchers/fetcher";
import useSWR from "swr";
import LoadingSpinner from "@/components/core/LoadingSpinner/LoadingSpinner";
import { createReview } from "@/fetchers/mutators";
import useSWRMutation from "swr/mutation";

export default function MainLayout({ tvShow }: { tvShow: IShow }) {
  const [reviewArr, setReviewArr] = useState<IReview[]>([]);
  const [tempShow, setTempShow] = useState({
    sumOfRatings: Math.round(tvShow.no_of_reviews * tvShow.average_rating),
    noOfReviews: tvShow.no_of_reviews
  });

  const { data, error, isLoading } = useSWR<IReviewList>(swrKeys.getReviews(tvShow.id), fetcher);
  
  const { trigger: addTrigger } = useSWRMutation(swrKeys.createReview, createReview, {
    onSuccess: (resData: any) => {
      const newArray = [resData.review, ...reviewArr];
      setReviewArr(newArray);
      calculateAverageRating(newArray);
    }
  });

  useEffect(() => {
    if(isLoading && !data) return;

    if (data && data.reviews) {
      setReviewArr(data.reviews);
      calculateAverageRating(data.reviews);
    }
  }, [data, isLoading]);

  if (error) return <div>No reviews available</div>;
  if (isLoading) return <LoadingSpinner />;
  
  function calculateAverageRating(reviews: IReview[]) {
    let sum = 0, average = 0;

    if (reviews.length) {
      sum = reviews.reduce((acc, review) => acc + review.rating, 0);
      average = sum / reviews.length;
    }

    setTempShow({
      sumOfRatings: sum,
      noOfReviews: reviews.length
    });
  }

  async function onAddReview(review: IReview) {
    await addTrigger(review);
  }

  async function onDeleteReview(reviewId: string) {
    const filteredArray = reviewArr.filter((review) => review.id !== reviewId);
    setReviewArr(filteredArray);
    calculateAverageRating(filteredArray);
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
        show={tvShow}
        onAddReview={onAddReview}
        onDeleteReview={onDeleteReview}
      />
    </main>
  );
}