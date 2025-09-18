jest.mock("jwt-decode", () => ({
  jwtDecode: jest.fn(),
}));

jest.mock("@/shared/utils/devLogger", () => ({
  devLogger: {
    log: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
    info: jest.fn(),
    debug: jest.fn(),
  },
}));

import { jwtDecode } from "jwt-decode";
import { decodeToken } from "@/shared/utils/decodeToken";
import { devLogger } from "@/shared/utils/devLogger";
import { UserRole } from "@/shared/permissions/roles";

describe("decodeToken", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("возвращает декодированные данные токена", () => {
    const decoded = {
      fresh: true,
      iat: 1,
      jti: "id",
      type: "access" as const,
      sub: "sub",
      nbf: 1,
      csrf: "csrf",
      exp: 9999999999,
      role: UserRole.admin,
      phone: "+77001234567",
      first_name: "Test",
    };

    jest.mocked(jwtDecode).mockReturnValueOnce(decoded);

    expect(decodeToken("token")).toEqual(decoded);
    expect(jwtDecode).toHaveBeenCalledWith("token");
  });

  it("возвращает null и логирует ошибку, если декодирование не удалось", () => {
    jest.mocked(jwtDecode).mockImplementationOnce(() => {
      throw new Error("invalid token");
    });

    expect(decodeToken("broken-token")).toBeNull();
    expect(devLogger.error).toHaveBeenCalledWith(
      "Ошибка декодирования токена",
      expect.any(Error),
    );
  });
});
