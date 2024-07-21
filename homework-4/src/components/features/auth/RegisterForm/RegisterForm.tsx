'use client'
import AuthForm from '@/components/shared/AuthForm/AuthForm';
import { swrKeys } from '@/fetchers/swrKeys';

export default function RegisterForm() {
  return <AuthForm  isLogin={false} swrKey={swrKeys.register}/>
};