import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Doc-House-New/', // Firebase hosting এর জন্য base path সঠিকভাবে সেট করা
})
