import { Flex } from "@chakra-ui/react";
import { ShowCard } from "../ShowCard/ShowCard";
import useSWR from "swr";
import { getAllShows, getTopRatedShows } from "@/fetchers/show";
import { IShow } from "@/typings/Show";

interface IShowsList {
    topRated: boolean;
}

export const ShowsList = ({ topRated } : IShowsList) => {
    const cacheUrl = topRated ? '/top-rated' : '/shows';
    const getter = topRated ? getTopRatedShows : getAllShows;
    const { data: showsResponse, error, isLoading } = useSWR(cacheUrl, getter);

    if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Ups something went wrong...</div>;
	}
    
    if(!showsResponse) {
        return <div>No shows found!</div>;
    };

	const shows = showsResponse.shows.map((showResponse) => {
        return (
            {
                title: showResponse.title,
                imageUrl: showResponse.image_url,
                averageRating: showResponse.average_rating,
                description: showResponse.description,
                id: parseInt(showResponse.id)
            } as IShow
        );
    });

    return (
        <Flex display='inline-grid' padding={10} backgroundColor='#2e0033' overflowY='hidden' height='100%' position='absolute' gridAutoColumns='300px' gridAutoFlow='column' gap={5} marginLeft='300px' border='none' width={`${window.innerWidth - 300}px`}>
            {shows.map((show, index) => {
                return <ShowCard key={index} title={show.title} imageUrl={show.imageUrl} rating={show.averageRating} id={show.id} />;
            })}
        </Flex>
    );
}