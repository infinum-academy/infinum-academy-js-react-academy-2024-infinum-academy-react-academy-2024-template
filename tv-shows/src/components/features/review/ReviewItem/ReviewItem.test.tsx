/**
 * 1. Correct user email is rendered
 * 2. Correct rating is rendered
 * 3. Correct review comment is rendered
 * 4. Delete button is rendered
 * 5. onDelete callback has beed called only once with the necessary data
 */

jest.mock('@chakra-ui/icons', () => {
    const originalModule = jest.requireActual('@chakra-ui/icons');
    return {
        ...originalModule,
        DeleteIcon: () => <span>DeleteIcon</span>,
    };
});

import { act, render, screen } from '@testing-library/react';
import { ReviewItem } from '@/components/features/review/ReviewItem/ReviewItem';
import { localStorageMock } from '@/fetchers/localStorageMock';

Object.defineProperty(window, "localStorage", { value: localStorageMock });

describe('ReviewItem', () => {
    const mockReviewItem = {
        id: 1,
        showId: 1,
        comment: 'This is my comment',
        rating: 4,
        user: {
            id: 1,
            email: 'user@mail.com',
            avatarUrl: 'https://www.url.com/',
        },
    };

    beforeAll(() => {
        localStorage.setItem('userData', JSON.stringify({ email: 'user@mail.com'}));
    });

    afterAll(() => {
        localStorage.clear();
    });

	it('should render the correct user email', () => {
		render(<ReviewItem reviewItem={mockReviewItem} onDeleteReview={() => {}} />);

        expect(screen.getByText(mockReviewItem.user.email)).toBeInTheDocument();
	});

	it('should render the correct rating', () => {
        render(<ReviewItem reviewItem={mockReviewItem} onDeleteReview={() => {}} />);

        const fullStars = screen.getAllByAltText('full_star');
        const emptyStars = screen.getAllByAltText('empty_star');
        expect(fullStars).toHaveLength(mockReviewItem.rating);
        expect(emptyStars).toHaveLength(5 - mockReviewItem.rating);
	});

	it('should render correct comment', () => {
        render(<ReviewItem reviewItem={mockReviewItem} onDeleteReview={() => {}} />);

        expect(screen.getByText(mockReviewItem.comment)).toBeInTheDocument();
	});

    it('should render delete button', () => {
        render(<ReviewItem reviewItem={mockReviewItem} onDeleteReview={() => {}} />);

        expect(screen.getByText('DeleteIcon')).toBeInTheDocument();
	});

    it('call onDelete callback exactly once', async () => {
        const mockOnDelete = jest.fn();
        render(<ReviewItem reviewItem={mockReviewItem} onDeleteReview={mockOnDelete} />);

        const deleteButton = screen.getByRole('button');
        await act(async () => deleteButton.click());

        expect(mockOnDelete).toHaveBeenCalled();
        expect(mockOnDelete).toHaveBeenCalledTimes(1);
        expect(mockOnDelete).toHaveBeenCalledWith(mockReviewItem);
	});
});
