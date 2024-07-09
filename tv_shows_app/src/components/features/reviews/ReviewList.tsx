import { Flex, IconButton, Text } from '@chakra-ui/react';
import { IReview, ReviewItem } from './ReviewItem';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useState } from 'react';

interface IReviewsList {
  reviews: Array<IReview>;
  onRemove: (review: IReview) => void;
}

export const ReviewList = ({ reviews, onRemove }: IReviewsList) => {
  const [openPage, setOpenPage] = useState(0);
  const maxPage = Math.ceil(reviews.length / 3);

  const changePage = (increment: number) => {
    if (openPage + increment >= maxPage) setOpenPage(0);
    else if (openPage + increment < 0) setOpenPage(maxPage - 1);
    else setOpenPage(openPage + increment);
  };
  return (
    <Flex flexDirection="column" gap="2" width="100%" marginBottom="3">
      {reviews
        .filter(
          (el, index) => index >= openPage * 3 && index < openPage * 3 + 3
        )
        .map((review, index) => {
          console.log(index);
          return <ReviewItem key={index} review={review} onRemove={onRemove} />;
        })}
      <Flex
        flexDirection="row"
        alignSelf="center"
        alignItems="center"
        marginTop="auto"
      >
        <IconButton
          marginLeft="auto"
          aria-label="Previous comment"
          backgroundColor="pink.900"
          color="white"
          icon={<ChevronLeftIcon />}
          size="sm"
          _hover={{ backgroundColor: 'pink.900' }}
          onClick={() => changePage(-1)}
        />
        <Text color="white" fontSize="xs">
          {openPage + 1} od {maxPage}
        </Text>

        <IconButton
          marginLeft="auto"
          aria-label="Next comment"
          backgroundColor="pink.900"
          color="white"
          icon={<ChevronRightIcon />}
          size="sm"
          _hover={{ backgroundColor: 'pink.900' }}
          onClick={() => changePage(1)}
        />
      </Flex>
    </Flex>
  );
};
