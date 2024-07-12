import { Fragment, useEffect, useState } from "react";
import { ReviewList } from "../../review/ReviewList/ReviewList";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { IReviewItem, IReviewList } from "@/typings/Review";
import { Heading } from "@chakra-ui/react";

interface IShowReviewSectionProps {
    reviewList: IReviewList;
    onAddReview: (review : IReviewItem) => void;
    onDeleteReview: (review : IReviewItem) => void;
};

export const ShowReviewSection = ({reviewList, onAddReview, onDeleteReview} : IShowReviewSectionProps) => {
    return (
        <>
            <Heading color='white' size='lg' marginBottom={2}>Reviews</Heading>
            <ReviewForm onAddReview={onAddReview}/>
            <ReviewList reviewList={reviewList} onDeleteReview={onDeleteReview} />
        </>
    );
};