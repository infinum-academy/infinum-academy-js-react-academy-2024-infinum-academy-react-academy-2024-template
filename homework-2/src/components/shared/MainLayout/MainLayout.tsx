'use client'
import styles from "./MainLayout.module.css";
import ReviewContainer from "@/components/features/shows/ReviewContainer/ReviewContainer";
import ShowDetails from "@/components/features/shows/ShowDetails/ShowDetails";
import React from "react";
import { useState } from "react";
import { IReview } from "@/typings/review";
import { IShow } from "@/typings/show";
import { Heading } from "@chakra-ui/react";

const show: IShow = {
  title: "Navy Cis Los Angeles",
  description: "Follows undercover agents assigned to the Office of Special Projects, a special branch of the Naval Criminal Investigative Service (NCIS)",
  averageRating: 0,
  imageUrl: "/images/navy-cis.jpg"
}

const defaultArray: IReview[] = [
  {
    id: "1",
    comment: "Best show ever",
    rating: 5
  },
  {
    id: "2",
    comment: "I love it",
    rating: 5
  }
]

export default function MainLayout(){
  const [reviewArr, setReviewArr] = useState<IReview[]>(defaultArray);
  return (
    <main className={styles.main}>
      <Heading as='h1' size='xl' my={3}>TV shows APP</Heading>
      <ShowDetails show={show}/>
      <Heading as='h2' size='lg' my={3}>Reviews</Heading>
      <ReviewContainer show={show} reviews={reviewArr}/>
    </main>
  );
}