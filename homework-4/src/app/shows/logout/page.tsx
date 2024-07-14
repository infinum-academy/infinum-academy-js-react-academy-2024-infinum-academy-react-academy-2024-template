'use client'
import AuthRedirect from "@/components/shared/AuthRedirect/AuthRedirect";
import { useUser } from "@/hooks/useUser";
import { useEffect } from "react";

function clearLocalStorage() {
  localStorage.removeItem("uid");
  localStorage.removeItem("access-token");
  localStorage.removeItem("client");
}
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