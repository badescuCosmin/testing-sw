/// <reference types="vitest" />
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/tests/setup.ts',
    coverage: {
      enabled: false,
      provider: 'v8',
      include: ['src'],
    },
  },
});
