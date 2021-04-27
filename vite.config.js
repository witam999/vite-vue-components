import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  build: {
    lib: {
      formats: ['cjs'],
      entry: path.resolve(__dirname, 'src/components/index.js'),
      name: 'components'
    },
    cssCodeSplit: false // 禁用CSS拆分
  },
  plugins: [vue()]
})