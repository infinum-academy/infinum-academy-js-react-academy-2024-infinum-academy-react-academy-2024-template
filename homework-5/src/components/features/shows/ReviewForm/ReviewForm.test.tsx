import { render, screen } from "@testing-library/react"
import ReviewForm from "./ReviewForm";
import { IShow } from "@/typings/show";

const mockShow: IShow = {
  id: "1",
  title: "Title",
  description: "Description",
  image_url: "image_url",
  average_rating: 3,
  no_of_reviews: 3
}

describe('ReviewForm', () => {
  it('should render comment input field', () => {
    render(<ReviewForm show={mockShow} onAddReview={() => {}}/>);
    const comment = screen.getByPlaceholderText('Add review');
    expect(comment).toBeInTheDocument();
  })
})