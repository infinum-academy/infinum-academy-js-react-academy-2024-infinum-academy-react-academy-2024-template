import React from "react";
import styles from "./ShowDetails.module.css";
import { IShow } from "@/typings/show";
import { Box, Card, Heading, Text, Flex } from "@chakra-ui/react";
import ImageWithFallback from "@/components/shared/utilities/ImageWithFallback/ImageWithFallback";

interface IShowDetailsProps {
  show: IShow;
  tempShow: { sumOfRatings: number; noOfReviews: number };
}

export default function ShowDetails({ show, tempShow }: IShowDetailsProps) {
  const { title, description, image_url } = show;
  const { sumOfRatings, noOfReviews } = tempShow;

  return (
    <Card
      bg="white"
      color="navy"
      className={styles.showSection}
    >
      <Flex className={styles.showFlex}>
        <ImageWithFallback
          className={styles.showImage}
          src={image_url}
          alt={title}
          width={200}
          defaultHeight="960"
          defaultWidth="540"
        />
        <Box
          className={styles.showInfo}
          paddingLeft="4"
        >
          <Heading size="lg">{title}</Heading>
          <i
            className="fa-regular fa-star fa-lg"
            style={{ color: "#FFD43B" }}
          ></i>
          {!!noOfReviews && (
            <span className="averageRating">
              {" "}
              {(sumOfRatings / noOfReviews).toFixed(1)}/5 {`(${noOfReviews})`}{" "}
            </span>
          )}
          {!noOfReviews && <span> No ratings</span>}
          <Text>{description}</Text>
        </Box>
      </Flex>
    </Card>
  );
}