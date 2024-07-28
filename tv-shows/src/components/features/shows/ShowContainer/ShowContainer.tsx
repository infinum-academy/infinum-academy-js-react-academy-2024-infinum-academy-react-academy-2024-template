import { ShowDetails } from "@/components/features/shows/ShowDetails/ShowDetails";
import { ShowReviewSection } from "@/components/features/shows/ShowReviewSection/ShowReviewSection";
import { IReviewItem, IReviewList } from "@/typings/Review";
import { useEffect, useState } from "react";
import { IShow } from "@/typings/Show";
import { Flex } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { getShowReviews } from "@/fetchers/review";
import { IUser } from "@/typings/User";

interface IShowContainerProps {
    showProp: IShow;
}

export default function ShowContainer({ showProp } : IShowContainerProps) {
    const params = useParams();
    const { data: reviewsResponse } = useSWR(`/reviews/${params.id}`, () => getShowReviews(params.id as string));

    const reviewList = reviewsResponse ? {
        reviews: reviewsResponse.reviews.map((review) => {
            return {
                id: parseInt(review.id),
                comment: review.comment,
                rating: review.rating,
                showId: review.show_id,
                user: {
                    id: parseInt(review.user.id),
                    email: review.user.email,
                    avatarUrl: review.user.image_url,
                } as IUser,
            } as IReviewItem
        })
    } as IReviewList : { reviews: [] };

    const hasReviews = reviewList.reviews.length > 0;

    return (
        <Flex direction='column' backgroundColor='#2e0033' position='sticky' flexGrow={1} padding={10}>
            <ShowDetails show={showProp} hasReviews={hasReviews} />
            <ShowReviewSection reviewList={reviewList} />
        </Flex>
    );
}
