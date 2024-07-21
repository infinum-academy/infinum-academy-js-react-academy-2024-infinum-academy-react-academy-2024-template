import { render, screen } from "@testing-library/react"
import ReviewForm from "./ReviewForm";

describe('ReviewForm', () => {
  it('should render comment input field', () => {
    render(<ReviewForm show_id={"1"} handleReview={() => {}} mode="create"/>);
    const comment = screen.getByPlaceholderText('Add review');
    expect(comment).toBeInTheDocument();
  })
})