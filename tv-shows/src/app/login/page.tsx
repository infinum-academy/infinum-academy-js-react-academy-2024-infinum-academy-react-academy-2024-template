'use client'

import { LoginForm } from "@/components/features/auth/LoginForm/LoginForm";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";
import { Container } from "@chakra-ui/react";

export default function Register() {
    return (
        <Container background="grey.50">
            <AuthRedirect to='/all-shows' condition='isLoggedIn'/>
            <LoginForm />
        </Container>
    );
}