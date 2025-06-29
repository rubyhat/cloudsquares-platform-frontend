/** @type {import('jest').Config} */

const config = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,ts,tsx}"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.(js|ts|tsx)$": "babel-jest",
  },
  moduleFileExtensions: ["js", "ts", "tsx"],
  moduleNameMapper: {
    "^.+\\.svg$": "<rootDir>/src/shared/__mocks__/svgrMock.js",
    "^.+\\.(css|scss)$": "identity-obj-proxy",
    "^../../constants/envs$": "<rootDir>/src/constants/__mocks__/envs.ts",
  },
  coveragePathIgnorePatterns: [
    "./node_modules/",
    "./babel.config.js",
    "src/constants/envs.ts",
    ".*__snapshots__/.*",
  ],
  testPathIgnorePatterns: [
    "<rootDir>/src/shared/components/RouteRegistryFormDrawer/__tests__/fixtures/",
  ],
};

export default config;
