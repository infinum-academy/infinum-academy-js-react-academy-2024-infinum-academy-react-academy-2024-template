import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { mutator } from "@/fetchers/mutators";
import { swrKeys } from "@/fetchers/swrKeys";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("@/hooks/useUser", () => {
  return {
    useUser: jest.fn().mockReturnValue({
      data: null,
      mutate: jest.fn(),
    }),
  };
});

jest.mock("@/fetchers/mutators", () => {
  return {
    mutator: jest.fn().mockResolvedValue(null),
  };
});

describe("LoginForm", () => {
  it("should call mutator with appropriate data", async () => {
    render(<LoginForm />);
    const emailInput = screen.getByPlaceholderText("Email");
    fireEvent.change(emailInput, { target: { value: "user@example.com" } });

    const passwordInput = screen.getByPlaceholderText("Password");
    fireEvent.change(passwordInput, { target: { value: "password" } });
    
    const loginBtn = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginBtn);

    const arg = {
      email: "user@example.com",
      password: "password"
    }
    
    await waitFor(() => {
      expect(mutator).toHaveBeenCalledWith(swrKeys.login, {
        arg,
      });
    });
  });
});
