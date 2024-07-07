'use client'
import ReviewForm from "@/components/shared/ReviewForm/ReviewForm";
import ReviewList from "../ReviewList/ReviewList";
import { IReviewProps } from "@/typings/review";

export default function ReviewContainer({reviews, onAddReview, onDeleteReview} : IReviewProps){
  return (
    <div className="review-section">
      <ReviewForm onAddReview={onAddReview}/>
      <ReviewList reviews={reviews} onDeleteReview={onDeleteReview}/>
    </div>
  )
}