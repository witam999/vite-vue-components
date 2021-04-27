import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  build: {
    lib: {
      formats: ['umd'],
      entry: path.resolve(__dirname, 'src/components/index.js'),
      name: 'Mod'
    },
    cssCodeSplit: false // 禁用CSS拆分
  },
  plugins: [vue()]
})