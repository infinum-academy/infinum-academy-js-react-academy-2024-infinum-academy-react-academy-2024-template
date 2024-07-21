import { Flex, Avatar, Text } from "@chakra-ui/react";
import { useUser } from "@/hooks/useUser";
import ReviewOptionDropdown from "../ReviewOptionDropdown/ReviewOptionDropdown";
import styles from "./ReviewItem.module.css";
import { IApiResponseUser } from "@/typings/apiResponse";
import { IReviewItemProps } from "@/typings/review";

export default function ReviewItem({review, onDeleteReview}: IReviewItemProps) {
  const { data } = useUser() as { data: IApiResponseUser};

  return (
    <Flex
      className={styles.reviewElement}
      flexWrap="wrap"
      gap={2}
      p={5}
    >
      <Flex
        flexDirection="column"
        flexWrap="wrap"
        gap={2}
      >
        <Flex
          alignItems="center"
          flexWrap="wrap"
        >
          <Avatar
            mr={2}
            src={(review.user?.image_url !== null) ? review.user?.image_url : ""}
          />
          <Text>{review.user?.email}</Text>
        </Flex>
        <Text>{review.comment}</Text>
        <div>
          <Text>{review.rating} / 5</Text>
          <p
            data-rating-index={review.id}
            className={styles.reviewedRated}
          >
            {Array.from({ length: 5 }, (_, index) => {
              if (index >= review.rating) {
                return (
                  <i
                    key={index}
                    className="fa-regular fa-star"
                  ></i>
                );
              } else {
                return (
                  <i
                    key={index}
                    className={`${styles.reviewedRating} fa-regular fa-star`}
                  ></i>
                );
              }
            })}
          </p>
        </div>
      </Flex>
      {data?.user.id === review.user?.id && 
        <ReviewOptionDropdown onDeleteReview={onDeleteReview} review={review}/>
      }
    </Flex>
  );
}
