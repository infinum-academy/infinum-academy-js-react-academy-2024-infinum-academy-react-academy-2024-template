import { Container, Flex, Image} from "@chakra-ui/react";

interface IStarReview {
    noOfStars: number
}


export const StarReview = ({noOfStars}: IStarReview) => {
    let tempList = [];
    for(let i = 1; i <= 5; i++) {
        tempList.push(
        <Image 
            src = {(i <= noOfStars) ? "/filled-star.png" : "/empty-star.png"} 
            fallbackSrc={"https://fakeimg.pl/600x400/ff0000/ffffff?text=Nema+slike+:("}
            alt = "Nema slike"
            width={"15%"}
            key={"slika-" + i}/>
        );
    }
    return <Flex
        flexDirection={"row"}
        gap={"2"}
        width={"100%"}
        >
        {tempList}
     </Flex>
}