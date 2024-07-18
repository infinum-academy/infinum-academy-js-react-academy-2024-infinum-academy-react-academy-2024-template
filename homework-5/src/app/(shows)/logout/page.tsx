'use client'
import AuthRedirect from "@/components/shared/AuthRedirect/AuthRedirect";
import { useUser } from "@/hooks/useUser";
import { useEffect } from "react";
import { clearLocalStorage } from "@/components/shared/utilities/LocalStorage/LocalStorage";

export default function Logout(){
  const { data, isLoading, mutate } = useUser();
  useEffect(() => {
    if (isLoading) {
      return;
    }
    clearLocalStorage();
    mutate(undefined, {"revalidate": false});
  }, [data, isLoading, mutate]);

  return <AuthRedirect to="/login" isLoggedIn={true} />;
}