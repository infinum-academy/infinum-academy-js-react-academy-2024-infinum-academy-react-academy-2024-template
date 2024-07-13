'use client'
import React, { useState } from 'react';
import styles from './RegisterForm.module.css';
import { Alert, AlertIcon, Button, chakra, Flex, FormControl, FormErrorMessage, Input, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import LogoImage from '@/components/core/LogoImage/LogoImage';
import Link from 'next/link';
import useSWRMutation from 'swr/mutation';
import { mutator } from '../../../../fetchers/mutators';
import IFormData from '@/typings/form';

const schema = yup.object({
  email: yup.string().required('Email is required').email('Email is invalid'),
  password: yup.string().required('Password is required').min(8, 'Enter at least 8 characters'),
  password_confirmation: yup.string().oneOf([yup.ref('password')], 'Your passwords do not match').required('Repeat password input'),
}).required();

export default function RegisterForm() {
  const [registered, setRegistered] = useState(false);
  const [error, setError] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  const { trigger } = useSWRMutation('https://tv-shows.infinum.academy/users', mutator, {
    onSuccess: () => {
      setRegistered(true);
    },
    onError: () => {
      setError(true);
      reset();
    }
  })

  const onRegister = async (data: IFormData) => {
    console.log(data);
    await trigger(data);
  };

  return (
    <>
      {
        error && 
          <Alert status="error" color="darkred">
            <AlertIcon />
            Something went wrong. Please try again.
          </Alert>
      }
      {
        registered && 
          <Alert status="success" color="darkgreen">
            <AlertIcon />
            You have successfully registered!
          </Alert>
      }
      {
        !registered &&
          <chakra.form className={styles.form} onSubmit={handleSubmit(onRegister)}>
            <Flex direction="column" alignItems="center" gap={8}>
              <LogoImage width={200} />
              <FormControl isInvalid={!!errors.email}>
                <Input {
                  ...register("email", {required: "true"})
                } 
                  type="email" 
                  placeholder="Email" />
                {errors.email && <FormErrorMessage>{errors.email.message}</FormErrorMessage>}
              </FormControl>

              <FormControl position="relative" isInvalid={!!errors.password}>
                <Input {
                  ...register("password", {required: "true"})
                } 
                  type="password" 
                  placeholder="Password" />
                {errors.password && <FormErrorMessage>{errors.password.message}</FormErrorMessage>}
              </FormControl>

              <FormControl isInvalid={!!errors.password_confirmation}>
                <Input {
                  ...register("password_confirmation", {required: "true"})
                } 
                  type="password" 
                  placeholder="Confirm password" />
                {errors.password_confirmation && <FormErrorMessage>{errors.password_confirmation.message}</FormErrorMessage>}
              </FormControl>

              <Button type="submit" borderRadius={20} px={7} py={2} color="rgb(55,22,135)">Sign up</Button>
              <Text>
                Already have an account?
                <Link href="/login"> Login</Link>
              </Text>
            </Flex>
          </chakra.form>
        }
    </>
  );
};