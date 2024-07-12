import React from "react";
import styles from "./ShowDetails.module.css";
import { IShow } from "@/typings/show";
import { Box, Card, Heading, Text, Flex } from "@chakra-ui/react";
import ImageWithFallback from "@/components/shared/utilities/ImageWithFallback/ImageWithFallback";

export default function ShowDetails({ show }: { show: IShow }) {
  const { title, description, average_rating, image_url } = show;

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
          height={200}
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
          {average_rating && <span className="averageRating"> {average_rating}/5</span>}
          {!average_rating && <span> No ratings</span>}
          <Text>{description}</Text>
        </Box>
      </Flex>
    </Card>
  );
}
