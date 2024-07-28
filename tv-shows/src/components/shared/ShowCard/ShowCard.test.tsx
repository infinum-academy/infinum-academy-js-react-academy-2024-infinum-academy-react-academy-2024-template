/**
 * 1. Component contains image element with provided url
 * 2. Render show title
 * 3. Corect average rating is rendered
 */

import { ShowCard } from '@/components/shared/ShowCard/ShowCard';
import { render, screen } from '@testing-library/react';

describe('ShowCard', () => {
    const mockShowData = {
        title: 'Show title',
        rating: 5,
        imageUrl: 'https://www.url.com/',
        id: 1
    };

	it('should render the image', () => {
		render(
            <ShowCard
                title={mockShowData.title}
                rating={mockShowData.rating}
                id={mockShowData.id}
                imageUrl={mockShowData.imageUrl}
            />
        );

		const image = screen.getByAltText(mockShowData.title) as HTMLImageElement;

		expect(image).toBeInTheDocument();
		expect(image.src).toEqual('https://www.url.com/');
	});

	it('should render the show title', () => {
        render(
            <ShowCard
                title={mockShowData.title}
                rating={mockShowData.rating}
                id={mockShowData.id}
                imageUrl={mockShowData.imageUrl}
            />
        );

		expect(screen.getByText(mockShowData.title)).toBeInTheDocument();
	});

	it('should render correct average rating', () => {
        render(
            <ShowCard
                title={mockShowData.title}
                rating={mockShowData.rating}
                id={mockShowData.id}
                imageUrl={mockShowData.imageUrl}
            />
        );

		expect(screen.getByText(mockShowData.rating)).toBeInTheDocument();
	});
});
