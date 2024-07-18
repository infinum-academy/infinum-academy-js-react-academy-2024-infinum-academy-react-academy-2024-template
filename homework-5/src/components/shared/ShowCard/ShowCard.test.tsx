import { render, screen } from '@testing-library/react';
import ShowCard from './ShowCard';

describe('ShowCard', () => {
  const show = {
    id: '1',
    title: 'Test Show',
    description: 'Test Description',
    average_rating: 4,
    image_url: 'https://fakeimg.pl/300/',
    no_of_reviews: 10
  };

  it('should contain image with provided src', () => {
    render(<ShowCard show={show} />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', show.image_url)
  })

  it('should render title', () => { 
    render(<ShowCard show={show} />);
    const title = screen.getByText(show.title);
    expect(title).toBeInTheDocument();
  })

  it('should render correct average rating', () => {
    render(<ShowCard show={show} />);
    const rating = screen.getByText(`${show.average_rating}/5`);
    expect(rating).toBeInTheDocument();
  })
});