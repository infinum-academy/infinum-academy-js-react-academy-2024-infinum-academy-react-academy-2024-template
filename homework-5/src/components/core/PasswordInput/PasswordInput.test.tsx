import { fireEvent, render, screen } from "@testing-library/react";
import PasswordInput from "./PasswordInput";
import { useForm } from "react-hook-form";

const PasswordInputMock = () => {
  const { register } = useForm();
  return <PasswordInput register={register("password", {required: "true"})} placeholder="Enter password" />;
}

describe('PasswordInput', () => {
  it('should render password input element', () => {
    render(<PasswordInputMock/>);
    const input = screen.getByPlaceholderText("Enter password");
    expect(input).toBeInTheDocument(); 
  });

  it('should type text into the input', () => {
    render(<PasswordInputMock/>);
    const input = screen.getByPlaceholderText("Enter password") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Some generic password" } });
    expect(input.value).toBe("Some generic password");
  });
});
