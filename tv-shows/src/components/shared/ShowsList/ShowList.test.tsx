import { act, render } from "@testing-library/react";
import { ShowsList } from "./ShowsList";
import { ShowCard } from "../ShowCard/ShowCard";

jest.mock('../ShowCard/ShowCard', () => {
    return {
        ShowCard: jest.fn().mockReturnValue(null),
    };
});

jest.mock('@/fetchers/show', () => {
    return {
        getAllShows: jest.fn(() => Promise.resolve({
            shows: [{
            title: 'Show',
            description: 'Description',
            average_rating: 5,
            image_url: 'https://url.com/',
            id: 3,
        }]}))
    };
});

describe('ShowsList', () => {
    const mockShow = {
        title: 'Show',
        rating: 5,
        imageUrl: 'https://url.com/',
        id: 3,
    };
    
    it('should render one show card with correct attributes', async () => {
        await act(async () => render(<ShowsList topRated={false} />));
        
        expect(ShowCard).toHaveBeenCalledWith(mockShow, expect.anything());
    });
});