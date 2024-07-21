import ReviewList from "./ReviewList";
import ReviewItem from "../ReviewItem/ReviewItem";
import { render } from "@testing-library/react";
import { IReview } from "@/typings/review";

const reviews: IReview[] = [
  {
    id: "1",
    comment: "Great show",
    rating: 5,
    show_id: "1",
    user: {
      id: "1",
      email: "John Doe",
      image_url: "image_url"
    },
  },
  {
    id: "2",
    comment: "Bad show",
    rating: 1,
    show_id: "1",
    user: {
      id: "2",
      email: "Jane Doe",
      image_url: "image_url"
    },
  },
];

jest.mock("../ReviewItem/ReviewItem", () => {
  return {
    __esModule: true,
    default: jest.fn(() => null),
  }
});

describe('ReviewList', () => {
  const deleteReview = jest.fn();
  it("should call ReviewItem with appropriate props", () => {
    render(
      <ReviewList
        reviews={reviews}
        onDeleteReview={deleteReview}
      />
    );
    reviews.forEach((review) => {
      expect(ReviewItem).toHaveBeenCalledWith({ review, onDeleteReview: deleteReview }, expect.anything());
    });
  });
});