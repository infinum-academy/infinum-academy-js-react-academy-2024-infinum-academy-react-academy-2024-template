'use client'
import ShowListSection from "../../../components/features/shows/ShowListSection/ShowListSection";
import AuthRedirect from "@/components/shared/AuthRedirect/AuthRedirect";

export default function ShowsList() {
  return (
  <>
    <AuthRedirect to="/login" isLoggedIn={false}/>
    <ShowListSection/>
  </>
  )
}
