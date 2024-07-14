import AuthRedirect from "@/components/shared/AuthRedirect/AuthRedirect";

export default function MyProfile() {
  return (
    <div>
      <AuthRedirect to="/login" isLoggedIn={false}/>
      <h1>My profile</h1>
    </div>
  );
}