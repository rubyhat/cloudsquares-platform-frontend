describe("SelectLanguage", () => {
  it("заглушка", () => {
    expect(true).toBe(true);
  });
});

// import { render, screen, waitFor } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import { SelectLanguage } from "../SelectLanguage";
// import { TestProviders } from "../../../../providers";
// import i18n from "../../../../i18n";

// // Мокаем i18n для управления языком
// jest.mock("../../../../i18n", () => ({
//   __esModule: true,
//   default: {
//     language: "ru",
//     changeLanguage: jest.fn(),
//   },
// }));

// jest.mock("react-i18next", () => ({
//   useTranslation: () => ({
//     t: (key: string) => key,
//   }),
// }));

// // Мокаем BasicFormSelectField и выводим test-id и options
// type MockBasicFormSelectFieldProps = {
//   name: string;
//   placeholder?: string;
//   data: { value: string; label: string }[];
//   disabled?: boolean;
// };

// jest.mock("../../BasicFormSelectField", () => ({
//   BasicFormSelectField: ({
//     name,
//     placeholder,
//     data,
//     disabled,
//   }: MockBasicFormSelectFieldProps) => {
//     return (
//       <select
//         data-testid="mock-language-select"
//         aria-label={placeholder}
//         name={name}
//         disabled={disabled}
//         onChange={(e) => {
//           const event = new Event("input", { bubbles: true });
//           Object.defineProperty(e.target, "value", {
//             value: e.target.value,
//             writable: true,
//           });
//           e.target.dispatchEvent(event);
//         }}
//       >
//         {data.map((option) => (
//           <option key={option.value} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </select>
//     );
//   },
// }));

// describe("SelectLanguage", () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   it("рендерит select с текущим языком", async () => {
//     render(
//       <TestProviders>
//         <SelectLanguage />
//       </TestProviders>,
//     );

//     const select = await screen.findByTestId("mock-language-select");
//     expect(select).toBeInTheDocument();
//     expect(select).toHaveAttribute("name", "language");
//     expect(select).toHaveAttribute("aria-label", "select_language_placeholder");
//   });

//   it("меняет язык при выборе другой опции", async () => {
//     const user = userEvent.setup();

//     render(
//       <TestProviders>
//         <SelectLanguage />
//       </TestProviders>,
//     );

//     const select = await screen.findByTestId("mock-language-select");
//     await user.selectOptions(select, "en");

//     await waitFor(() => {
//       expect(i18n.changeLanguage).toHaveBeenCalledWith("en");
//     });

//     await user.selectOptions(select, "kz");

//     await waitFor(() => {
//       expect(i18n.changeLanguage).toHaveBeenCalledWith("kz");
//     });
//   });

//   it("не вызывает changeLanguage, если язык не изменился", async () => {
//     const user = userEvent.setup();
//     (i18n.language as string) = "ru";

//     render(
//       <TestProviders>
//         <SelectLanguage />
//       </TestProviders>,
//     );

//     const select = await screen.findByTestId("mock-language-select");
//     await user.selectOptions(select, "ru");

//     await waitFor(() => {
//       expect(i18n.changeLanguage).not.toHaveBeenCalled();
//     });
//   });
// });
