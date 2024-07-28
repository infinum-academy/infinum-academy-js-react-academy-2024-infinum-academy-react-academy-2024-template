import { useUser } from "@/fetchers/useUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react"

interface IAuthRedirectProps {
    to: string,
    condition: 'isLoggedIn' | 'isLoggedOut',
}

export const AuthRedirect = ({ to, condition }: IAuthRedirectProps) => {
    const router = useRouter();
    const { data, isLoading } = useUser();
    const userData = localStorage.getItem('userData');
    const isLoggedIn = Boolean(userData) && Boolean(data);

    useEffect(() => {
        if(isLoading) {
            return;
        };
        if (!isLoggedIn && condition === 'isLoggedOut') {
            router.push(to)
        };
        if (isLoggedIn && condition === 'isLoggedIn') {
            router.push(to)
        }
    }, [isLoggedIn, isLoading, router, condition, to]);

    return null;
}