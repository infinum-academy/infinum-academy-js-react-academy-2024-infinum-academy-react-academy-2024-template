import { ShowImage } from "@/components/core/ShowImage/ShowImage";
import { IShow } from "@/typings/Show";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";

interface IShowDetails {
    show: IShow;
    hasReviews: boolean;
}

export const ShowDetails = ({ show, hasReviews }: IShowDetails) => {
    return (
        <Flex
            direction='column'
            background='#3d363d'
            color='white'
            border='none'
            borderRadius={10}
            marginBottom={7}
        >
            <ShowImage url={show.imageUrl} title={show.title} />
            <Flex direction='column' padding={5}>
                <Heading>{show.title}</Heading>
                <Text>{show.description}</Text>
                { hasReviews && <Text>{show.averageRating}</Text> }
                { !hasReviews && <Text as='i'>No ratings</Text> }
            </Flex>
        </Flex>
    );
};