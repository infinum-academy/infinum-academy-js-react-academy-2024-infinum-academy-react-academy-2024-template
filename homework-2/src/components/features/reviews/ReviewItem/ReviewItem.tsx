import { IReviewItemProps } from "@/typings/review"
import { Button, Flex } from "@chakra-ui/react"
import styles from './ReviewItem.module.css'

export default function ReviewItem({review, onDeleteReview}: IReviewItemProps) {
  return (
    <div className={styles.reviewElement}>
      <Flex flexDirection="column" flexWrap="wrap">
        <div>
          {review.comment}
        </div>
        <div>
          {review.rating}/5
        </div>
      </Flex>
      <div>
        <Button colorScheme="red" onClick={() => onDeleteReview(review.id)}>Delete</Button>
      </div>
    </div>
  )
}