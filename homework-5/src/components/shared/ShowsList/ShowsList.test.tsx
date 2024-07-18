import { render, screen } from '@testing-library/react'
import ShowsList from './ShowsList'

const shows = [
  {
    id: '1',
    title: 'Test Show 1',
    description: 'Test Description 1',
    average_rating: 4,
    image_url: 'https://fakeimg.pl/300/',
    no_of_reviews: 10
  },
  {
    id: '2',
    title: 'Test Show 2',
    description: 'Test Description 2',
    average_rating: 3,
    image_url: 'https://fakeimg.pl/300/',
    no_of_reviews: 20
  },
  {
    id: '3',
    title: 'Test Show 3',
    description: 'Test Description 3',
    average_rating: 5,
    image_url: 'https://fakeimg.pl/300/',
    no_of_reviews: 30
  }
]

describe('ShowsList', () => {
  it('should render all shows', () => {
    render(<ShowsList shows={shows} />);
    shows.forEach((show) => {
      expect(screen.getByText(show.title)).toBeInTheDocument();
    });
  })
})