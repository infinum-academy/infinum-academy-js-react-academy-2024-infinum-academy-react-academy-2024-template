import { InputStar } from "@/components/core/InputStar/InputStar";
import { authenticatedCreator } from "@/fetchers/authenticatedMutators";
import { swrKeys } from "@/fetchers/swrKeys";
import { Button, Flex, FormControl, Input, Textarea, chakra } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { mutate } from "swr";
import useSWRMutation from "swr/mutation";

interface IReviewFormInputs {
    comment: string,
    rating: number,
}

export const ReviewForm = () => {
    const params = useParams();
    const [hoveredStars, setHoveredStars] = useState(0);
    const { register, unregister, handleSubmit, getValues, reset } = useForm<IReviewFormInputs>();
    const { trigger } = useSWRMutation(swrKeys.reviews, authenticatedCreator, {
        onSuccess: (data) => {
            mutate(`/reviews/${data.review.show_id}`);
        }
    });

    const onSubmitReview = async (data: IReviewFormInputs) => {
        if(!data.comment || !data.rating) {
            alert('Both comment and rating need to be filled!');
            return;
        };

        await trigger({...data, show_id: params.id });
        reset();
    };

    return (
        <chakra.form
            background='#3d363d'
            width='100%'
            padding={2}
            borderRadius={10}
            flexDirection='column'
            marginBottom={6}
            onSubmit={handleSubmit(onSubmitReview)}
        >
            <FormControl isRequired={true} >
                <Textarea
                    background='#7c727d'
                    color='black'
                    resize='vertical'
                    placeholder='Add review...'
                    borderColor='#352a36'
                    focusBorderColor='#554157'
                    id='review-textarea'
                    {...register('comment')}
                />
            </FormControl>
            <Flex marginTop={2}
                direction='row'
                justifyContent='space-between'
            >
                <FormControl display='flex' flexDirection='row' alignItems='center' isRequired={true}>
                    { Array(5).fill(1).map((_n, index) => {
                            let filledStars = getValues('rating');
                            if (hoveredStars) {
                                filledStars = hoveredStars;
                            }

                            return (
                                <InputStar
                                    key={index}
                                    filled={index < filledStars}
                                    onHovered={() => setHoveredStars(index + 1)}
                                    onUnhovered={() => setHoveredStars(0)}
                                    onClicked={() => {
                                        unregister('rating');
                                        register('rating', { value: index + 1 });
                                        }
                                    }
                                />
                            );
                        })}
                </FormControl>
                <Button colorScheme="purple" type='submit'>Post</Button>
            </Flex>
        </chakra.form>
    );
}