import { RegistrationForm } from "@/components/features/auth/RegistrationForm/RegistrationForm";
import { Container } from "@chakra-ui/react";

export default function Register() {
    return (
        <Container background="grey.50">
            <RegistrationForm />
        </Container>
    );
}