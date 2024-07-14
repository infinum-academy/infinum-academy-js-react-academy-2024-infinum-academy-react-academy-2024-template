'use client'
import AuthForm from '@/components/shared/AuthForm/AuthForm';
import { swrKeys } from '@/fetchers/swrKeys';
import * as yup from 'yup';

export default function LoginForm(){
  const schema = yup.object({
    email: yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: yup.string()
      .required('Password is required')
      .min(8, 'Enter at least 8 characters'),
    password_confirmation: yup.string()
      .default(undefined)
  }).required();
  
  return <AuthForm schema={schema} isLogin={true} swrKey={swrKeys.login}/>
}