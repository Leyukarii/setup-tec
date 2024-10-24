import { defineConfig } from 'vitest/config';
import Vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [Vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),    
      '~': path.resolve(__dirname, './'),    
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',  
  },
});