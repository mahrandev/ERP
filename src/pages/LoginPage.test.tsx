import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import LoginPage from "./LoginPage";

describe("LoginPage", () => {
  it("should render the login form correctly", () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    // Check for the main heading
    expect(
      screen.getByRole("heading", { name: /تسجيل الدخول/i })
    ).toBeInTheDocument();

    // Check for input fields
    expect(screen.getByLabelText(/اسم المستخدم/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/كلمة المرور/i)).toBeInTheDocument();

    // Check for the submit button
    expect(
      screen.getByRole("button", { name: /دخول/i })
    ).toBeInTheDocument();

    // Check for the link to the sign-up page
    expect(screen.getByText(/أنشئ حسابًا/i)).toBeInTheDocument();
  });
});
