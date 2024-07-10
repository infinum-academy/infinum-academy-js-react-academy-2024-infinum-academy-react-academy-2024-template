import { IShow } from '@/types/show.type';
import {
    Box,
    Card,
    CardBody,
    CardFooter,
    Flex,
    Heading,
    Text,
} from '@chakra-ui/react';
import Image from 'next/image';

export type ShowDetailsProps = {
    showDetails: IShow;
};

export const ShowDetails = ({
    showDetails: { title, description, image_url, average_rating },
}: ShowDetailsProps) => {
    return (
        <Card overflow={'hidden'} width={480}>
            <Flex direction={'column'}>
                <CardBody padding={0}>
                    {
                        <Image
                            width={480}
                            height={640}
                            src={
                                image_url ??
                                'https://fakeimg.pl/640x480?text=Placeholder'
                            }
                            alt={
                                image_url
                                    ? 'Tko pjeva zlo ne misli'
                                    : 'Placeholder image'
                            }
                        />
                    }
                </CardBody>
                <CardFooter display={'flex'} flexDirection={'column'}>
                    <Heading as={'h2'}>{title}</Heading>
                    <Box>{description}</Box>
                    {average_rating !== 0 ? (
                        <Text>Rating: {average_rating}</Text>
                    ) : (
                        <Text>No rating</Text>
                    )}
                </CardFooter>
            </Flex>
        </Card>
    );
};
