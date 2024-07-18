'use client'
import AuthRedirect from "@/components/shared/AuthRedirect/AuthRedirect";
import { useUser } from "@/hooks/useUser";
import ImageWithFallback from "@/components/shared/utilities/ImageWithFallback/ImageWithFallback";
import { IUser } from "@/fetchers/user";
import { Card, CardBody, CardHeader, chakra, Heading, Text } from "@chakra-ui/react";

interface IApiResponse{
  user: IUser;
}

export default function MyProfile() {
  const { data } = useUser() as { data: IApiResponse };
  
  return (
    <chakra.div>
      <AuthRedirect to="/login" isLoggedIn={false}/>
      <Card bg="rgb(55,22,135)" color="#fff">
        <CardHeader>
          <Heading>My Profile</Heading>
        </CardHeader>
        <CardBody> 
          <ImageWithFallback src={data?.user.image_url} alt="User Avatar" width={300} defaultHeight="100" defaultWidth="100"/>
          <Text pt="2">Email: {data?.user?.email}</Text>
          <Text pt="2">id: {data?.user?.id}</Text>
        </CardBody>
      </Card>
    </chakra.div>
  );
}