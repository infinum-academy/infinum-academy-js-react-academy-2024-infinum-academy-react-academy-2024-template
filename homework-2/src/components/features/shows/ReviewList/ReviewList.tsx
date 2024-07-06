import { IReview } from "@/typings/review";
import { Flex } from "@chakra-ui/react";
import ReviewItem from "../ReviewItem/ReviewItem";

export default function ReviewList({ reviews }: { reviews: IReview[] }) {
  return (
    <Flex flexDirection={"column"}>
      {reviews.map((review, index) => {
        return (
          <ReviewItem
            key={index}
            {...review}
          />
        );
      })}
    </Flex>
  );
}