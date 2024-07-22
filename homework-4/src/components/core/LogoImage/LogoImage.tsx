import { Image } from '@chakra-ui/react';

interface LogoImageProps {
  width: number;
  className?: string;
}

export default function LogoImage({ width, className }: LogoImageProps) {
  return <Image src="/images/logo.svg" alt="logo" width={width} className={className}/>
}