'use client'
import ReviewForm from "@/components/features/shows/ReviewForm/ReviewForm";
import ReviewList from "@/components/features/reviews/ReviewList/ReviewList";
import { IReviewProps } from "@/typings/review";

export default function ReviewContainer({reviews, onAddReview, onDeleteReview} : IReviewProps){
  return (
    <div className="review-section">
      <ReviewForm onAddReview={onAddReview}/>
      <ReviewList reviews={reviews} onDeleteReview={onDeleteReview}/>
    </div>
  )
}