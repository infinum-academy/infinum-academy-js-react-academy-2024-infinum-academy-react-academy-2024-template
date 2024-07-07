import { IReviewItemProps } from "@/typings/review"
import { Button, Flex, Avatar, Text } from "@chakra-ui/react"
import styles from './ReviewItem.module.css'

export default function ReviewItem({review, onDeleteReview}: IReviewItemProps) {
  return (
    <Flex className={styles.reviewElement} flexWrap="wrap" gap={2} p={5}>
      <Flex flexDirection="column" flexWrap="wrap" gap={2}>
        <Flex alignItems="center" flexWrap="wrap">
          <Avatar mr={2}/>
          <Text>email@example.com</Text>
        </Flex>
        <div>
          {review.comment}
        </div>
        <div>
          {review.rating}/5
        </div>
        <div>
          <Button display={"inline-block"} colorScheme="red" onClick={() => onDeleteReview(review.id)}>Delete</Button>
        </div>
      </Flex>
    </Flex>
  )
}