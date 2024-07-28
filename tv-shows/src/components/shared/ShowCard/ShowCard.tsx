import { Card, CardBody, CardHeader, CardFooter, Heading, Image, Flex, Text } from "@chakra-ui/react";
import NextLink from 'next/link';

interface IShowCard {
    imageUrl?: string;
    title: string;
    rating: number;
    id: number;
}

export const ShowCard = ({ imageUrl, title, rating, id } : IShowCard) => {
    return (
        <Card
            width='300px'
            height='400px'
            backgroundColor='#4e4057'
            color='white'
            borderRadius={10}
            _hover={{cursor: 'pointer'}}
            onClick={() => {}}
            as={NextLink}
            href={`/all-shows/${id}`}
            display='inline-grid'
        >
            <CardHeader padding={0}>
                <Image
                    src={imageUrl}
                    alt={title}
                    objectFit='cover'
                    width='300px'
                    height='300px'
                    borderTopRadius={10}
                />
            </CardHeader>
            <CardBody flexDirection='column'>
                <Heading size='md'>{title}</Heading>
                <Flex alignItems='center'>
                    <Image src='full_star.png' width={4} height={4} alt='star' marginRight={1}/>
                    <Text>{rating}</Text>
                </Flex>
            </CardBody>
        </Card>
    );
};