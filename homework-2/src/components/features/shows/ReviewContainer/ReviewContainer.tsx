'use client'
import ReviewForm from "@/components/shared/ReviewForm/ReviewForm";
import { IShowProps } from "@/typings/show";
import ReviewList from "../ReviewList/ReviewList";

export default function ReviewContainer({reviews = []} : IShowProps){
  return (
    <div className="review-section">
      <ReviewForm/>
      <ReviewList reviews={reviews}/>
    </div>
  )
}