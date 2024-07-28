'use client'

import { mutator } from "@/fetchers/mutator";
import { swrKeys } from "@/fetchers/swrKeys";
import { FormControl, FormLabel, Heading, Input, chakra, Button, Alert, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import NextLink from 'next/link';
import useSWRMutation from "swr/mutation";

interface ILoginFormInputs {
    email: string,
    password: string,
}

export const LoginForm = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState } = useForm<ILoginFormInputs>();
    const { trigger } = useSWRMutation(swrKeys.logIn, mutator);

    const onLogin = async (data: ILoginFormInputs) => {
        setLoading(true);
        const response = await trigger(data);
        if (!response.ok) {
            setLoading(false);
            return
        }
        const body = await response.json();
        const userData = {
            accessToken: response.headers.get('access-token'),
            client: response.headers.get('client'),
            email: body.user.email,
        };
        setLoading(false);
        setLoggedIn(true);

        localStorage.setItem('userData', JSON.stringify(userData));
    }

    return (
        <>
            { loggedIn && <Alert status='success'>Login successful!</Alert>}
            { !loggedIn && <chakra.form
                display='flex'
                flexDirection='column'
                alignItems='center'
                gap={3}
                marginBottom={3}
                onSubmit={handleSubmit(onLogin)}
            >
                <Heading>Login</Heading>
                <FormControl isRequired={true}>
                    <FormLabel>Email</FormLabel>
                    <Input isInvalid={!formState.isValid} errorBorderColor='crimson' disabled={formState.isSubmitting} {...register('email')} required type='email' />
                </FormControl>
                <FormControl isRequired={true}>
                    <FormLabel>Password</FormLabel>
                    <Input isInvalid={!formState.isValid} errorBorderColor='crimson' disabled={formState.isSubmitting} {...register('password')} required type='password' />
                </FormControl>
                <Button isLoading={loading} type='submit'>Login</Button>
            </chakra.form> }
            { !formState.isValid && <Alert status='error'>Invalid credentials, try again!</Alert>}
            { !loggedIn && <Flex direction='column' alignItems='center' gap={3} marginTop={5}>
                <Heading size='md'>Need to create an account?</Heading>
                <Button as={NextLink} href='/register'>Register</Button>
            </Flex> }
        </>
    );
}