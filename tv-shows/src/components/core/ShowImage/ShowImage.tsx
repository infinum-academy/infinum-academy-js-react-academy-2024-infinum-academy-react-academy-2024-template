import { Image } from "@chakra-ui/react";

interface IShowImage {
    url?: string;
    title: string;
}

export const ShowImage = ({ url, title }: IShowImage) => {
    const defaultImageUrl = 'https://fakeimg.pl/800x400/3d363d/909090?text='.concat(title);
    const imageUrl = url ?? defaultImageUrl;
    return (
        <Image
            src={imageUrl}
            alt={title}
            border='none'
            borderTopRadius={10}
        />
    );
}