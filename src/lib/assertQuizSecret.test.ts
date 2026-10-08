import { describe, it, expect } from "vitest";
import { assertQuizSecret } from "./assertQuizSecret";

describe("assertQuizSecret", () => {
  it("falha com segredo ausente, vazio ou só espaços", () => {
    expect(() => assertQuizSecret({})).toThrow(/VITE_QUIZ_SECRET/);
    expect(() => assertQuizSecret({ VITE_QUIZ_SECRET: "" })).toThrow();
    expect(() => assertQuizSecret({ VITE_QUIZ_SECRET: "  " })).toThrow();
  });
  it("passa com segredo definido", () => {
    expect(() => assertQuizSecret({ VITE_QUIZ_SECRET: "x" })).not.toThrow();
  });
});
