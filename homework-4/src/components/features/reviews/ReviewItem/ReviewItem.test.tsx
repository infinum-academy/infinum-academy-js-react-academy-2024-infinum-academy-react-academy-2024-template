import { render, screen } from "@testing-library/react"
import ReviewItem from "./ReviewItem";

const review = {
  id: "1",
  avatar: "https://fakeimg.pl/300/",
  email: "user@email.com",
  comment: "...comment...",
  rating: 3
}

describe('ReviewItem', () => {
  it('should check if correct user email is rendered', () => {
    render(<ReviewItem review={review} onDeleteReview={() => {}} />);
    const email = screen.getByText(review.email);
    
    expect(email).toBeInTheDocument();
  })

  it('should check if correct rating is rendered', () => {
    render(<ReviewItem review={review} onDeleteReview={() => {}} />);
    const rating = screen.getByText(`${review.rating} / 5`);

    expect(rating).toBeInTheDocument();
  })

  it('should check if correct comment is rendered', () => {
    render(<ReviewItem review={review} onDeleteReview={() => {}} />);
    const comment = screen.getByText(review.comment);

    expect(comment).toBeInTheDocument();
  })

  it('should check if delete button is rendered', () => {
    render(<ReviewItem review={review} onDeleteReview={() => {}} />);
    const deleteButton = screen.getByRole('button');

    expect(deleteButton).toBeInTheDocument();
    expect(deleteButton).toHaveTextContent('Delete');
  })

  it("should call onDeleteReview once with necessary data", () => {
    const mockOnDelete = jest.fn();
    render(<ReviewItem review={review} onDeleteReview={() => mockOnDelete(review.id)}></ReviewItem>)
    const deleteButton = screen.getByRole('button');
    deleteButton.click();

    expect(mockOnDelete).toHaveBeenCalledTimes(1);
  })
})