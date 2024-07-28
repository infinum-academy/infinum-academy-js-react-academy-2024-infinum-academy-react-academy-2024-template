import { IReviewItem, IReviewList } from "@/typings/Review";
import { Flex } from "@chakra-ui/react";
import { ReviewItem } from "../ReviewItem/ReviewItem";

interface IReviewListProps {
    reviewList: IReviewList;
};

export const ReviewList = ({ reviewList }: IReviewListProps) => {
    return (
        <Flex direction='column' gap={3} width='100%'>
            {reviewList.reviews.map((review, index) => {
                return (
                    <ReviewItem reviewItem={review} key={index} />
                );
            })}
        </Flex>
    );
};