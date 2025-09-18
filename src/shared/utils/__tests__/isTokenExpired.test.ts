jest.mock("@/shared/utils/decodeToken", () => ({
  decodeToken: jest.fn(),
}));

import { decodeToken } from "@/shared/utils/decodeToken";
import { isTokenExpired } from "@/shared/utils/isTokenExpired";

describe("isTokenExpired", () => {
  const nowSpy = jest.spyOn(Date, "now");

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    nowSpy.mockRestore();
  });

  it("возвращает true, если токен отсутствует", () => {
    expect(isTokenExpired(null)).toBe(true);
  });

  it("возвращает true, если токен не удалось декодировать", () => {
    jest.mocked(decodeToken).mockReturnValueOnce(null);
    expect(isTokenExpired("broken")).toBe(true);
  });

  it("возвращает false, если токен ещё не истёк", () => {
    const now = 1_700_000_000_000;
    nowSpy.mockReturnValueOnce(now);
    jest.mocked(decodeToken).mockReturnValueOnce({
      exp: Math.floor((now + 60_000) / 1000),
    } as ReturnType<typeof decodeToken>);

    expect(isTokenExpired("valid")).toBe(false);
  });

  it("возвращает true, если токен истёк", () => {
    const now = 1_700_000_000_000;
    nowSpy.mockReturnValueOnce(now);
    jest.mocked(decodeToken).mockReturnValueOnce({
      exp: Math.floor((now - 60_000) / 1000),
    } as ReturnType<typeof decodeToken>);

    expect(isTokenExpired("expired")).toBe(true);
  });
});
