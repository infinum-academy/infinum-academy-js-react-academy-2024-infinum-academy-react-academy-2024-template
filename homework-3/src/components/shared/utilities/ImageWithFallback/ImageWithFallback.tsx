import React, {useState} from "react";
import Image from "next/image";

interface FallbackImageProps {
  src: string | undefined;
  alt: string;
  width: number;
  height: number;
  defaultHeight: string;
  defaultWidth: string;
  className?: string;
}

export default function FallbackImage({
  src,
  alt,
  width,
  height,
  className,
  defaultHeight,
  defaultWidth
}: FallbackImageProps) {
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
      height={height}
      priority={true}
      onError={handleImageError}
    />
  );
}
