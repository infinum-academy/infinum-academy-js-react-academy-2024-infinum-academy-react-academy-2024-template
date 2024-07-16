import ShowDetailsSection from "@/components/features/shows/ShowDetailsSection/ShowDetailsSection";
import AuthRedirect from "@/components/shared/AuthRedirect/AuthRedirect";

export default function SpecificShowPage() {
  return (
    <>
      <AuthRedirect to="/login" isLoggedIn={false}/>
      <ShowDetailsSection/>
    </>
  )
}
