import { render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";

describe("ProtectedRoute", () => {
  const TestComponent = () => <div>Protected Content</div>;

  it("redirects to /no-auth if user is not authenticated", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/protected"]}>
        <Routes>
          <Route
            path="/protected"
            element={
              <ProtectedRoute isAuth={false}>
                <TestComponent />
              </ProtectedRoute>
            }
          />
          <Route path="/no-auth" element={<div>No Auth</div>} />
        </Routes>
      </MemoryRouter>,
    );

    expect(container.textContent).toBe("No Auth");
  });

  it("redirects to /access-denied if user does not have access", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/protected"]}>
        <Routes>
          <Route
            path="/protected"
            element={
              <ProtectedRoute isAuth={true} hasAccess={false}>
                <TestComponent />
              </ProtectedRoute>
            }
          />
          <Route path="/access-denied" element={<div>Access Denied</div>} />
        </Routes>
      </MemoryRouter>,
    );

    expect(container.textContent).toBe("Access Denied");
  });

  it("renders children if user is authenticated and has access", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/protected"]}>
        <Routes>
          <Route
            path="/protected"
            element={
              <ProtectedRoute isAuth={true} hasAccess={true}>
                <TestComponent />
              </ProtectedRoute>
            }
          />
        </Routes>
      </MemoryRouter>,
    );

    expect(container.textContent).toBe("Protected Content");
  });
});
