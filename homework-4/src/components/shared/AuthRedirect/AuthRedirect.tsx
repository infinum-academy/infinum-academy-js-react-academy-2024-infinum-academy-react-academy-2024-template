'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/useUser";

interface IAuthDirectProps {
  to: string,
  isLoggedIn: boolean
}

export default function AuthRedirect({to, isLoggedIn} : IAuthDirectProps){
  const router = useRouter()
  const { data, isLoading } = useUser();

  useEffect(() => {
    if(isLoading){
      return;
    }
    if(!data && !isLoggedIn){
      router.push(to);
    }
    if(data && isLoggedIn){
      router.push(to);
    }
  }, [data, isLoggedIn, router, to, isLoading])
  
  return null;
}