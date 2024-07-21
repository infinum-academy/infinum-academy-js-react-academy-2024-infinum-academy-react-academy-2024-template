'use client'
import AuthForm from '@/components/shared/AuthForm/AuthForm';
import { swrKeys } from '@/fetchers/swrKeys';

export default function LoginForm(){
  
  return <AuthForm isLogin={true} swrKey={swrKeys.login}/>
}