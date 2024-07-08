import { IReviewListProps } from "@/typings/review";
import ReviewItem from "../ReviewItem/ReviewItem";
import { Flex } from "@chakra-ui/react";

export default function ReviewList({reviews, onDeleteReview}: IReviewListProps ) {
  return (
    <Flex flexDirection="column">
      {reviews.length === 0 && <p style={{margin: "10px 0"}}>No reviews yet</p>}
      {reviews.map((review, index) => {
        return (
          <ReviewItem
            key={index}
            review={review}
            onDeleteReview={onDeleteReview}
          />
        );
      })}
    </Flex>
  );
}