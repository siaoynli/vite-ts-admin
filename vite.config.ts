import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      include: ['src/**/*.js', 'src/*.js', 'src/**/*.ts', 'src/*.ts', 'src/**/*.vue', 'src/*.vue']
    })
  ],
})
