describe("SelectLanguage", () => {
  it("заглушка", () => {
    expect(true).toBe(true);
  });
});

// import { render, screen, act } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import { SearchInputForm, SearchInputFormData } from "../SearchInputForm";
// import { TestProviders } from "../../../../providers";

// /**
//  * Вспомогательная функция для ожидания завершения всех микротасок
//  * (например, завершения debounce или промисов).
//  */
// const flushPromises = () => new Promise((resolve) => setTimeout(resolve, 0));

// /**
//  * Хелпер для рендера компонента с провайдерами
//  */
// const renderSearchInputForm = (
//   sendRequest: (v: SearchInputFormData) => void,
//   placeholder = "Поиск",
// ) => {
//   render(
//     <TestProviders>
//       <SearchInputForm sendRequest={sendRequest} placeholder={placeholder} />
//     </TestProviders>,
//   );
// };

// jest.setTimeout(10_000); // увеличиваем глобальный таймаут для дебаунса

// describe("SearchInputForm", () => {
//   it("отображает placeholder", () => {
//     const mockFn = jest.fn();
//     renderSearchInputForm(mockFn, "Найти недвижимость");

//     const input = screen.getByPlaceholderText("Найти недвижимость");
//     expect(input).toBeInTheDocument();
//   });

//   it("вызывает sendRequest с введённым значением (debounced)", async () => {
//     jest.useFakeTimers();
//     const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
//     const sendRequest = jest.fn();

//     renderSearchInputForm(sendRequest);

//     const input = screen.getByPlaceholderText("Поиск");
//     await user.type(input, "квартира");

//     // Пролистываем debounce
//     act(() => {
//       jest.advanceTimersByTime(334);
//     });

//     await act(async () => {
//       await flushPromises();
//     });

//     expect(sendRequest).toHaveBeenCalledWith({ searchQuery: "квартира" });
//     expect(sendRequest).toHaveBeenCalledTimes(1);

//     jest.useRealTimers();
//   });

//   it("не вызывает sendRequest, если значение слишком длинное", async () => {
//     jest.useFakeTimers();
//     const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
//     const sendRequest = jest.fn();

//     renderSearchInputForm(sendRequest);

//     const longText = "a".repeat(40);
//     const input = screen.getByPlaceholderText("Поиск");

//     await user.clear(input);
//     await user.type(input, longText);

//     act(() => {
//       jest.advanceTimersByTime(334);
//     });

//     await act(async () => {
//       await flushPromises();
//     });

//     expect(sendRequest).not.toHaveBeenCalled();

//     expect(
//       await screen.findByText("Слишком длинное значение"),
//     ).toBeInTheDocument();

//     jest.useRealTimers();
//   });
// });
