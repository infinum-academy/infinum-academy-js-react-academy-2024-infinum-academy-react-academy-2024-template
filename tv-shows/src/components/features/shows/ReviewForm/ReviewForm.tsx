import { InputStar } from "@/components/core/InputStar/InputStar";
import { IReviewItem } from "@/typings/Review";
import { Button, Flex, Input, Textarea } from "@chakra-ui/react";
import { use, useState } from "react";

interface IReviewFormProps {
    onAddReview: (review: IReviewItem) => void;
};

const mockUser = {
    email: 'mock.user@mail.com',
    avatarUrl: 'https://fakeimg.pl/30x30/854d85/909090?text=User',
};

export const ReviewForm = ({ onAddReview }: IReviewFormProps) => {
    const [comment, setComment] = useState(''); // isto i za rating
    const [selectedStars, setSelectedStars] = useState(0);
    const [hoveredStars, setHoveredStars] = useState(0);

    const onClick = () => {
        if(!comment || selectedStars <= 0) {
            alert('Both comment and rating need to be filled!');
            return;
        };

        const newReview: IReviewItem = {
            text: comment,
            rating: selectedStars,
            user: mockUser
        };
        onAddReview(newReview);
    };

    return (
        <Flex
            background='#3d363d'
            width='100%'
            padding={2}
            borderRadius={10}
            direction='column'
            marginBottom={6}
        >
            <Textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                background='#7c727d'
                color='black'
                resize='vertical'
                placeholder='Add review...'
                borderColor='#352a36'
                focusBorderColor='#554157'
                id='review-textarea'
            />
            <Flex marginTop={2}
                direction='row'
                justifyContent='space-between'
            >
                <Flex>
                    { Array(5).fill(1).map((_n, index) => {
                        let filledStars = selectedStars;
                        if (hoveredStars) {
                            filledStars = hoveredStars;
                        }

                        return (
                            <InputStar
                                key={index}
                                filled={index < filledStars}
                                onHovered={() => setHoveredStars(index + 1)}
                                onUnhovered={() => setHoveredStars(0)}
                                onClicked={() => setSelectedStars(index + 1)}
                            />
                        );
                    })}
                </Flex>
                <Button colorScheme="purple" onClick={onClick}>Post</Button>
            </Flex>
        </Flex>
    );
}