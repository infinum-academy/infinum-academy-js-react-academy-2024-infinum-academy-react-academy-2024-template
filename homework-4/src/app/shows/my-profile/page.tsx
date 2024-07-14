'use client'
import AuthRedirect from "@/components/shared/AuthRedirect/AuthRedirect";
import { useUser } from "@/hooks/useUser";
import ImageWithFallback from "@/components/shared/utilities/ImageWithFallback/ImageWithFallback";
import { IUser } from "@/fetchers/user";

interface IApiResponse{
  user: IUser;
}

export default function MyProfile() {
  const { data } = useUser() as { data: IApiResponse };
  return (
    <>
      <AuthRedirect to="/login" isLoggedIn={false}/>
      <h1>My Profile</h1>
      <p>{data?.user?.email}</p>
      <ImageWithFallback src={data?.user.image_url} alt="User Avatar" width={100} defaultHeight="100" defaultWidth="100"/>
    </>
  );
}