"use client";
import Image from "next/image";
import styles from "./ShowDetails.module.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { IShow } from "@/typings/show";

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
    <div className={styles.showSection}>
      <Image
        className={styles.showImage}
        src={isFound ? String(imageUrl) : defaultImageSrc}
        alt="navy-cis-team-photo"
        priority={true}
        width={960}
        height={540}
      />
      <div className={styles.showInfo}>
        <h2>{title}</h2>
        <i
          className="fa-regular fa-star fa-lg"
          style={{ color: "#FFD43B" }}
        ></i>
        {averageRating ? <span className="averageRating"> {averageRating}</span> : <span> No ratings</span>}
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}
