import React from "react";
import { createRoot } from "react-dom/client";

jest.mock("react-dom/client", () => ({
  createRoot: jest.fn(),
}));

jest.mock("./modules/AppModule", () => ({
  AppModule: () => <div>Mocked AppModule</div>,
}));

describe("index.tsx", () => {
  it("renders the application correctly", async () => {
    // Создаем фиктивный контейнер для корня приложения
    const mockRoot = {
      render: jest.fn(),
    };

    (createRoot as jest.Mock).mockReturnValue(mockRoot);

    // Подключаем сам файл
    await import("./main");

    // Проверяем, что `createRoot` был вызван с правильным элементом
    expect(createRoot).toHaveBeenCalledWith(document.getElementById("root"));

    // Проверяем, что `render` был вызван с компонентом AppModule
    expect(mockRoot.render).toHaveBeenCalledWith(expect.anything());

    // Проверяем, что StrictMode оборачивает приложение
    expect(mockRoot.render.mock.calls[0][0].type).toBe(React.StrictMode);
  });
});
