import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: 'html',
  use: {
    
    browserName: 'chromium',
    headless: false,
    baseURL: 'http://localhost:100',
  },
  
});