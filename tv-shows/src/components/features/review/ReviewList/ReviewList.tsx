import { IReviewItem, IReviewList } from "@/typings/Review";
import { Flex } from "@chakra-ui/react";
import { ReviewItem } from "../ReviewItem/ReviewItem";

interface IReviewListProps {
    reviewList: IReviewList;
    onDeleteReview: (review : IReviewItem) => void;
};

export const ReviewList = ({ reviewList, onDeleteReview }: IReviewListProps) => {
    return (
        <Flex direction='column' gap={3} width='100%'>
            {reviewList.reviews.map((review, index) => {
                return (
                    <ReviewItem reviewItem={review} key={index} onDeleteReview={onDeleteReview} />
                );
            })}
        </Flex>
    );
};