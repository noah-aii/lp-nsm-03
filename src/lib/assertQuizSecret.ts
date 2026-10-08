// Build de produção sem VITE_QUIZ_SECRET manda segredo vazio e todo lead toma 401 em silêncio.
export function assertQuizSecret(env: Record<string, string>) {
  if (!env.VITE_QUIZ_SECRET?.trim()) {
    throw new Error(
      "VITE_QUIZ_SECRET vazio: defina a variável antes do build de produção, senão todo lead recebe 401.",
    );
  }
}
