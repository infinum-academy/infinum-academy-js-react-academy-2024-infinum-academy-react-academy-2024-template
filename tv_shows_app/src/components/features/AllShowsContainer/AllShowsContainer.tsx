'use client';
import { ShowsList } from '@/components/shared/shows/ShowsList';
import { SidebarNavigation } from '@/components/shared/SidebarNavigation/SidebarNavigation';
import { getAllShows } from '@/fetchers/shows';
import { IShow } from '@/typings/show';
import { Box, Flex, Spinner } from '@chakra-ui/react';
import { useParams } from 'next/navigation';
import { title } from 'process';
import useSWR from 'swr';

export const AllShowsContainer = () => {
  const { data, error, isLoading } = useSWR(`/api/shows`, () => getAllShows());
  const showList = data?.shows || [];
  console.log(data);
  if (isLoading || !data) {
    return (
      <Flex height="100vh" alignItems="center" justifyContent="space-around">
        <Spinner />
      </Flex>
    );
  }

  if (error) {
    return <div> Ajoj čini se da se nešto jaaaako loše desilo... </div>;
  }
  return (
    <main>
      <Flex height="100vh">
        <Box width="15%">
          <SidebarNavigation selectedCategory="all" />
        </Box>
        <Box width="85%">
          <ShowsList shows={showList} />
        </Box>
      </Flex>
    </main>
  );
};
