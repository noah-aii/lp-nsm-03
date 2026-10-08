import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { assertQuizSecret } from "./src/lib/assertQuizSecret";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === "production") assertQuizSecret(loadEnv(mode, process.cwd(), "VITE_"));
  return {
    base: "./",
    server: {
      host: "::",
      port: 5175,
      hmr: {
        overlay: false,
      },
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
