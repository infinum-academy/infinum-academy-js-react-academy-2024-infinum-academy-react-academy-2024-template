'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoadingSpinner from '@/components/core/LoadingSpinner/LoadingSpinner';

export default function Home(){
  const { push } = useRouter();
  useEffect(() => {
    push('/shows/all-shows');
  }, []);

  return <LoadingSpinner/>;
};