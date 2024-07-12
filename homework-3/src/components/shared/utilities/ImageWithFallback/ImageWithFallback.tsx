import React, {useState} from "react";
import { Image } from "@chakra-ui/react";

interface ImageWithFallbackProps {
  src: string | undefined;
  alt: string;
  width: number;
  defaultHeight: string;
  defaultWidth: string;
  className?: string;
}

export default function ImageWithFallback({
  src,
  alt,
  width,
  className,
  defaultHeight,
  defaultWidth
}: ImageWithFallbackProps) {
  const defaultImageSrc = `https://fakeimg.pl/${defaultHeight}x${defaultWidth}?text=No+image+found`;
  const [imgSrc, setImgSrc] = useState(src || defaultImageSrc);

  const handleImageError = () => {
    setImgSrc(defaultImageSrc);
  };

  return (
    <Image
      className={className}
      src={imgSrc}
      alt={alt}
      width={width}
      onError={handleImageError}
    />
  );
}
