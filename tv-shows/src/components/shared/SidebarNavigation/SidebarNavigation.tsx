'use client'

import { Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading } from "@chakra-ui/react";
import NextLink from 'next/link';
import { useRouter } from "next/navigation";

export const SidebarNavigation = () => {
    const router = useRouter();
    const onLogOut = () => {
        localStorage.removeItem('userData');
        router.push('/login');
    };

    return (
        <Flex height='100vh' width='300px' position='sticky' top='0' >
            <Card width='100%' backgroundColor='#2e0033' color='white' border='none' borderRadius={0}>
                <CardHeader>
                    <Heading>TV Show App</Heading>
                </CardHeader>
                <CardBody display='flex' flexDirection='column'>
                    <Button color='white' variant='ghost' as={NextLink} href='/all-shows/'>All shows</Button>
                    <Button color='white' variant='ghost' as={NextLink} href='/top-rated/'>Top rated</Button>
                    <Button color='white' variant='ghost'>My profile</Button>
                </CardBody>
                <CardFooter>
                    <Button color='white' variant='ghost' onClick={onLogOut}>Log out</Button>
                </CardFooter>
            </Card>
        </Flex>
    );
}