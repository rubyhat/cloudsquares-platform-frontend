import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";

// Полифилы для Node.js
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
