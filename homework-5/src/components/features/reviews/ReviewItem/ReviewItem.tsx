import { IReviewItemProps } from "@/typings/review";
import styles from "./ReviewItem.module.css";
import { Button, Flex, Avatar, Text } from "@chakra-ui/react";
import { deleteReview } from "@/fetchers/mutators";
import { swrKeys } from "@/fetchers/swrKeys";
import useSWRMutation from "swr/mutation";

export default function ReviewItem({review, onDeleteReview}: IReviewItemProps) {
  const { trigger: deleteTrigger, isMutating } = useSWRMutation(swrKeys.deleteReview(review.id), deleteReview, {
    onSuccess: () => {
      onDeleteReview(review.id);
    }
  });

  async function handleDeleting(){
    await deleteTrigger();
  }

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
        <div>
          <Button
            display="inline-block"
            colorScheme="red"
            onClick={handleDeleting}
            disabled={isMutating}
          >
            Delete
          </Button>
        </div>
      </Flex>
    </Flex>
  );
}
