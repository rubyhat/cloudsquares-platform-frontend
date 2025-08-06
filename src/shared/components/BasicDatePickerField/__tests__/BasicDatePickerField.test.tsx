import React from "react";
import { render, screen } from "@testing-library/react";
import { useForm, FormProvider } from "react-hook-form";

import { BasicDatePickerField } from "../BasicDatePickerField";
import { TestProviders } from "../../../../providers";

const renderWithForm = (defaultValues = {}, props = {}) => {
  const Wrapper = () => {
    const methods = useForm({ defaultValues });

    return (
      <TestProviders>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(jest.fn())}>
            <BasicDatePickerField
              name="testDate"
              label="Дата рождения"
              {...props}
            />
            <button type="submit">Submit</button>
          </form>
        </FormProvider>
      </TestProviders>
    );
  };

  return render(<Wrapper />);
};

describe("BasicDatePickerField", () => {
  it("рендерит компонент с плейсхолдером", () => {
    renderWithForm();

    const input = screen.getByPlaceholderText("Выберите дату");
    expect(input).toBeInTheDocument();
  });

  it("отображает текст ошибки, если поле невалидно", async () => {
    const defaultValues = { testDate: "" };

    const Wrapper = () => {
      const methods = useForm({
        defaultValues,
        mode: "onSubmit",
      });

      React.useEffect(() => {
        methods.setError("testDate", {
          type: "manual",
          message: "Поле обязательно",
        });
      }, []);

      return (
        <TestProviders>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(jest.fn())}>
              <BasicDatePickerField name="testDate" label="Дата рождения" />
            </form>
          </FormProvider>
        </TestProviders>
      );
    };

    render(<Wrapper />);
    expect(await screen.findByText("Поле обязательно")).toBeInTheDocument();
  });

  it("передаёт проп disablePast", () => {
    renderWithForm({}, { disablePast: true });

    const input = screen.getByPlaceholderText("Выберите дату");
    expect(input).toBeInTheDocument();
  });
});
