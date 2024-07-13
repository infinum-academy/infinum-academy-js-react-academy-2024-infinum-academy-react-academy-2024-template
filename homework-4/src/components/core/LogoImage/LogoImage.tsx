import { Image } from '@chakra-ui/react';

interface LogoImageProps {
  width: number;
  className?: string;
}

export default function LogoImage({ width, className }: LogoImageProps) {
  return <Image src="/images/logo.png" alt="logo" width={width} className={className} m={5}/>
}