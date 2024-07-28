import { render } from "@testing-library/react";
import { ReviewList } from "./ReviewList";
import { ReviewItem } from "../ReviewItem/ReviewItem";
import { IReviewItem } from "@/typings/Review";
import { IUser } from "@/typings/User";

jest.mock('@/components/features/review/ReviewItem/ReviewItem', () => {
    return {
        ReviewItem: jest.fn().mockReturnValue(null),
    };
});

describe('ReviewList', () => {
    const mockReviewItem = {
        id: 1,
        comment: 'My comment',
        rating: 4,
        showId: 1,
        user: {
            id: 1,
            email: 'my@email.com',
            avatarUrl: 'https://url.com/'
        },
    };

    const mockReviewList = {
        reviews: [mockReviewItem],
    };

    const mockOnDeleteReview = jest.fn();

    it('should render ReviewItem with correct attributes', () => {
        render(<ReviewList reviewList={mockReviewList} onDeleteReview={mockOnDeleteReview} />);

        expect(ReviewItem).toHaveBeenCalledWith({reviewItem: mockReviewItem, onDeleteReview: mockOnDeleteReview}, expect.anything());
    });
});