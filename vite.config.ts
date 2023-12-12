import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteCompression from 'vite-plugin-compression'
import dotenv from 'dotenv';
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  // Load environment variables from .env files
  if (mode === 'development') {
    await dotenv.config({ path: '.env.local' });
  } else {
    await dotenv.config({ path: '.env.production' });
  }
  return {
  plugins: [react(), viteCompression(), svgr()],
  server: {
    port: 3000
  },
  envPrefix: 'APP_',
}
});
