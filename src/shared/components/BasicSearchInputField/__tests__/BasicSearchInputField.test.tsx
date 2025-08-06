import React, { ReactNode } from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";
import { TestProviders } from "../../../../providers";
import { BasicSearchInputField } from "../BasicSearchInputField";

interface PropsWithChildren {
  children: ReactNode;
}

jest.useFakeTimers();

describe("BasicSearchInputField", () => {
  const onChangeMock = jest.fn();

  const Wrapper = ({ children }: PropsWithChildren) => {
    const methods = useForm({ defaultValues: { search: "" } });
    return (
      <TestProviders>
        <FormProvider {...methods}>{children}</FormProvider>
      </TestProviders>
    );
  };

  const renderComponent = () =>
    render(
      <Wrapper>
        <BasicSearchInputField
          name="search"
          label="Поиск"
          placeholder="Введите запрос"
          onChange={onChangeMock}
        />
      </Wrapper>,
    );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("рендерит поле с label и placeholder", () => {
    renderComponent();

    expect(screen.getByLabelText("Поиск")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Введите запрос")).toBeInTheDocument();
  });

  it("отображает иконку поиска", () => {
    renderComponent();

    expect(screen.getByTestId("SearchIcon")).toBeInTheDocument();
  });

  it("вызывает debounced onChange", async () => {
    renderComponent();

    const input = screen.getByLabelText("Поиск") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "test" } });

    // Сначала проматываем таймер
    jest.advanceTimersByTime(333);

    // Потом проверяем результат
    await waitFor(() => {
      expect(onChangeMock).toHaveBeenCalledWith({ searchQuery: "test" });
    });
  });

  it("показывает сообщение об ошибке, если оно передано", async () => {
    const ErrorWrapper = ({ children }: PropsWithChildren) => {
      const methods = useForm({
        defaultValues: { search: "" },
        mode: "onSubmit",
      });

      // выставим ошибку вручную
      React.useEffect(() => {
        methods.setError("search", { message: "Обязательное поле" });
      }, [methods]);

      return (
        <TestProviders>
          <FormProvider {...methods}>{children}</FormProvider>
        </TestProviders>
      );
    };

    render(
      <ErrorWrapper>
        <BasicSearchInputField
          name="search"
          label="Поиск"
          placeholder="Введите"
          onChange={onChangeMock}
        />
      </ErrorWrapper>,
    );

    expect(await screen.findByText("Обязательное поле")).toBeInTheDocument();
  });
});
