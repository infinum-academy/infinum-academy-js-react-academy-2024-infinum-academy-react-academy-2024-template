'use client'
import AuthForm from '@/components/shared/AuthForm/AuthForm';
import { swrKeys } from '@/fetchers/swrKeys';
import * as yup from 'yup';

export default function RegisterForm() {
  const schema = yup.object({
    email: yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: yup.string()
      .required('Password is required')
      .min(8, 'Enter at least 8 characters'),
    password_confirmation: yup.string()
      .oneOf([yup.ref('password')], 'Your passwords do not match')
      .required('Repeat password input'),
  }).required();

  return <AuthForm schema={schema} isLogin={false} swrKey={swrKeys.register}/>
};