import ShowTopRatedSection from "@/components/features/shows/ShowTopRatedSection/ShowTopRatedSection";
import AuthRedirect from "@/components/shared/AuthRedirect/AuthRedirect";

export default function TopRatedShowsList() {
  return (
  <>
    <AuthRedirect to="/login" isLoggedIn={false}/>
    <ShowTopRatedSection/>
  </>
  )
}
