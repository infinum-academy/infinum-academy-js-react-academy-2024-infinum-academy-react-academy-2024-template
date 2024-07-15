import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import styles from "./PasswordInput.module.css";
import { UseFormRegisterReturn } from "react-hook-form";

interface PasswordInputProps {
  register: UseFormRegisterReturn<any>;
  placeholder: string;
}

export default function PasswordInput({register, placeholder}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <InputGroup>
      <Input
        {...register}
        type={`${showPassword ? "text" : "password"}`}
        placeholder={placeholder}
      />
      <InputRightElement onClick={() => setShowPassword(prevState => !prevState)}>
        {showPassword && <i className={`fa-solid fa-eye-slash icon ${styles.icon}`}></i>}
        {!showPassword && <i className={`fa-solid fa-eye icon ${styles.icon}`}></i>}
      </InputRightElement>
    </InputGroup>
  )
}