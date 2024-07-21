import React from 'react';
import { render } from '@testing-library/react';
import ShowsList from './ShowsList';
import ShowCard from '../ShowCard/ShowCard';
import { IShow } from '@/typings/show';

const shows: IShow[] = [
  {
    id: '1',
    title: 'Test Show 1',
    description: 'Test Description 1',
    average_rating: 4,
    image_url: 'https://fakeimg.pl/300/',
    no_of_reviews: 10,
  },
  {
    id: '2',
    title: 'Test Show 2',
    description: 'Test Description 2',
    average_rating: 3,
    image_url: 'https://fakeimg.pl/300/',
    no_of_reviews: 20,
  },
  {
    id: '3',
    title: 'Test Show 3',
    description: 'Test Description 3',
    average_rating: 5,
    image_url: 'https://fakeimg.pl/300/',
    no_of_reviews: 30,
  },
];

jest.mock('../ShowCard/ShowCard', () => {
  return {
    __esModule: true,
    default: jest.fn(() => null),
  }
});

describe('ShowsList', () => {
  it('should call ShowCard with appropriate props', () => {
    render(<ShowsList shows={shows} />);
    shows.forEach((show) => {
      expect(ShowCard).toHaveBeenCalledWith({show: show}, expect.anything());
    });
  });
});
