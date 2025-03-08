import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Page from "@/app/page";
import { signIn } from "next-auth/react";

jest.mock("next-auth/react", () => ({
  signIn: jest.fn(),
}));

describe("Home Component", () => {
  beforeEach(() => {
    render(<Page />);
  });

  it("renders the login form", () => {
    expect(screen.getByText("Welcome back, Ali Riaz 🙇🏾‍♀️")).toBeInTheDocument();
    expect(
      screen.getByText("Login to access your Uifry account")
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Email Address")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });

  it("allows entering an email and password", () => {
    const emailInput = screen.getByLabelText(
      "Email Address"
    ) as HTMLInputElement;
    const passwordInput = screen.getByLabelText("Password") as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(emailInput.value).toBe("test@example.com");
    expect(passwordInput.value).toBe("password123");
  });

  it("toggles password visibility", () => {
    const passwordInput = screen.getByLabelText("Password") as HTMLInputElement;
    const toggleButton = screen.getByRole("button", { name: "Show" });

    expect(passwordInput.type).toBe("password");

    fireEvent.click(toggleButton);
    expect(passwordInput.type).toBe("text");

    fireEvent.click(toggleButton);
    expect(passwordInput.type).toBe("password");
  });

  it("submits the form with email and password", async () => {
    const emailInput = screen.getByLabelText(
      "Email Address"
    ) as HTMLInputElement;
    const passwordInput = screen.getByLabelText("Password") as HTMLInputElement;
    const submitButton = screen.getByRole("button", { name: "Login" });

    fireEvent.change(emailInput, { target: { value: "testuser@uifry.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);

    expect(signIn).toHaveBeenCalledWith("credentials", {
      email: "testuser@uifry.com",
      password: "password123",
      callbackUrl: "/dashboard",
    });
  });

  it('renders the "Forgot Password" link', () => {
    expect(screen.getByText("I Forgot My Password!")).toBeInTheDocument();
  });

  it('renders the "Not Ali Riaz?" link', () => {
    expect(screen.getByText("Not Ali Riaz?")).toBeInTheDocument();
  });
});
