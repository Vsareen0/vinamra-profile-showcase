import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    spa: {
      enabled: true,
    },
  },

  vite: {
    base: process.env["BASE_PATH"] || "/",
  },
});
