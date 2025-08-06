import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { BottomNavigationMenu } from "../BottomNavigationMenu";

/**
 * Вспомогательная функция для рендера компонента с заданным маршрутом
 */
const renderWithRoute = (initialPath = "/") => {
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <BottomNavigationMenu />
    </MemoryRouter>,
  );
};

describe("BottomNavigationMenu", () => {
  it("отображает все пункты меню", () => {
    renderWithRoute();

    expect(screen.getByText("Главная")).toBeInTheDocument();
    expect(screen.getByText("Каталог")).toBeInTheDocument();
    expect(screen.getByText("Заявки")).toBeInTheDocument();
    expect(screen.getByText("Профиль")).toBeInTheDocument();
  });

  it("подсвечивает Главная как активную при /", () => {
    renderWithRoute("/");
    const home = screen.getByTestId("nav-item-home");
    expect(home).toHaveAttribute("aria-current", "page"); // если используется NavLink
  });

  it("подсвечивает Каталог как активную при /properties", () => {
    renderWithRoute("/properties");
    const catalog = screen.getByTestId("nav-item-properties");
    expect(catalog).toHaveAttribute("aria-current", "page");
  });

  it("подсвечивает Заявки как активную при /cart", () => {
    renderWithRoute("/cart");
    const cart = screen.getByTestId("nav-item-cart");
    expect(cart).toHaveAttribute("aria-current", "page");
  });

  it("подсвечивает Профиль как активную при /profile", () => {
    renderWithRoute("/profile");
    const profile = screen.getByTestId("nav-item-profile");
    expect(profile).toHaveAttribute("aria-current", "page");
  });
});
