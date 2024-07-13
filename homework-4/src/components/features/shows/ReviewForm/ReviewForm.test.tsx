import { render, screen } from "@testing-library/react"
import ReviewForm from "./ReviewForm";

describe('ReviewForm', () => {
  it('should render comment input field', () => {
    render(<ReviewForm onAddReview={() => {}}/>);
    const comment = screen.getByPlaceholderText('Add review');
    expect(comment).toBeInTheDocument();
  })
})