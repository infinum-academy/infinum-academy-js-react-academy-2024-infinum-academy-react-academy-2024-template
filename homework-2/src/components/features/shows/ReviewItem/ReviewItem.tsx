import { IReview } from "@/typings/review"
import styles from './ReviewItem.module.css'

export default function ReviewItem(review: IReview): JSX.Element {
  return (
    <div className={styles.reviewElement}>
      Comment: {review.comment}<br/>
      Rating: {review.rating}
    </div>
  )
}