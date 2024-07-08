"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./ShowDetails.module.css";
import { IShow } from "@/typings/show";
import { Box, Card, Heading, Text } from "@chakra-ui/react";

const defaultImageSrc = "https://fakeimg.pl/960x540?text=No+image+found";

export default function ShowDetails({show}: {show: IShow}) {
  const { title, description, averageRating, imageUrl } = show || {};
  const [isFound, setIsFound] = useState(false);
  
  useEffect(() => {
    const isImageFound = async (imageSrc: string) => {
      const response = await fetch("http://localhost:3000" + imageSrc, {
        method: "HEAD",
      });
      const result = response?.status === 200;
      setIsFound(result);
    };
    isImageFound(String(imageUrl));
  }, [imageUrl]);

  return (
    <Card bg="white" color="navy" className={styles.showSection}>
      <Image
        className={styles.showImage}
        src={isFound ? String(imageUrl) : defaultImageSrc}
        alt="navy-cis-team-photo"
        priority={true}
        width={960}
        height={540}
      />
      <Box className={styles.showInfo}>
        <Heading size="lg">{title}</Heading>
        <i
          className="fa-regular fa-star fa-lg"
          style={{ color: "#FFD43B" }}
        ></i>
        {averageRating ? <span className="averageRating"> {averageRating}</span> : <span> No ratings</span>}
        <Text>
          {description}
        </Text>
      </Box>
    </Card>
  );
}
