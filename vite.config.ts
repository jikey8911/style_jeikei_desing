import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      // El archivo que acabamos de crear
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'JeiKeiUI',
      fileName: (format) => `jeikei-ui.${format}.js`
    },
    rollupOptions: {
      // Asegurarnos de externalizar dependencias que el proyecto destino ya tendrá
      external: ['react', 'react-dom', 'tailwindcss'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})