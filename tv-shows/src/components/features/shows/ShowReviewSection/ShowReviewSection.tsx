import { Fragment, useEffect, useState } from "react";
import { ReviewList } from "../../review/ReviewList/ReviewList";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { IReviewItem, IReviewList } from "@/typings/Review";
import { Heading } from "@chakra-ui/react";

interface IShowReviewSectionProps {
    reviewList: IReviewList;
};

export const ShowReviewSection = ({reviewList} : IShowReviewSectionProps) => {
    return (
        <>
            <Heading color='white' size='lg' marginBottom={2}>Reviews</Heading>
            <ReviewForm />
            <ReviewList reviewList={reviewList} />
        </>
    );
};