"use client";

import { useEffect, useState } from "react";
import { IReview } from "../../../../typings/Review.type";
import { IShow } from "../../../../typings/Show.type";
import { loadFromLocalStorage } from "../../../../utils/localstorage-helpers";
import { ShowDetails } from "../ShowDetails/ShowDetails";
import { ShowReviewSection } from "../ShowReviewSection/ShowReviewSection";

const mockShow: IShow = {
  title: "Dexter",
  description:
    "Dexter is a crime drama mystery television series that aired on Showtime from October 1, 2006, to September 22, 2013. Set in Miami, the series centers on Dexter Morgan (Michael C. Hall), a forensic technician specializing in bloodstain pattern analysis for the fictional Miami Metro Police Department, who leads a secret parallel life as a vigilante serial killer, hunting",
  imageUrl: "/assets/show-hero.jpg",
};

export default function ShowContainer() {
  const [reviews, setReviews] = useState<Array<IReview>>([]);

  useEffect(() => {
    setReviews(loadFromLocalStorage());
  }, []);

  const onAddReview = (review: IReview) => {
    setReviews((reviews: Array<IReview>) => [...reviews, review]);
  };

  const onRemoveReview = (review: IReview) => {
    setReviews((reviews: Array<IReview>) =>
      reviews.filter((currentReview) => currentReview.uuid !== review.uuid)
    );
  };

  return (
    <>
      <ShowDetails show={mockShow} reviews={reviews} />
      <ShowReviewSection
        reviews={reviews}
        onAddReview={onAddReview}
        onRemoveReview={onRemoveReview}
      />
    </>
  );
}
