import { IReviewItem } from "@/typings/Review";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import fullStar from '../../../shared/images/full_star.png';

interface IReviewItemProps {
    reviewItem: IReviewItem;
    onDeleteReview: (review : IReviewItem) => void;
}

export const ReviewItem = ({ reviewItem, onDeleteReview }: IReviewItemProps) => {
    return (
        <Card
            direction='column'
            background='#3d363d'
            width='100%'
            borderRadius={10}
            color='white'
        >
            <CardHeader display='flex' margin='0' padding={1.5}>
                <Image alt='user' src={reviewItem.user.avatarUrl} borderRadius={4} marginRight={2} />
                <Text as='i'>{reviewItem.user.email}</Text>
            </CardHeader>
            <CardBody padding={1.5}>
                <Text>{reviewItem.text}</Text>
            </CardBody>
            <CardFooter justifyContent='space-between' alignItems='center' padding={1.5}>
                <Flex>
                    { Array(reviewItem.rating).fill(1).map((_n, index) => {
                        return <Image alt='full_star' key={index} src='/full_star.png' width={5} />
                    })}
                    { Array(5 - reviewItem.rating).fill(1).map((_n, index) => {
                        return <Image alt='empty_star' key={index} src='/empty_star.png' width={5} />
                    })}
                </Flex>
                <Button colorScheme="red" onClick={() => onDeleteReview(reviewItem)}>Delete</Button>
            </CardFooter>
        </Card>
    );
}