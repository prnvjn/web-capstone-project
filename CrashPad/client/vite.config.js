import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001' 
      }
    }
  }
  // fazeel
  // build: {
  //   outDir: '../server/public',
  //   emptyOutDir: true
  // },
  // resolve: {
  //   alias: {
  //     'picocss': path.resolve(__dirname, '../node_modules/@picocss/pico/css')
  //   }
  // },
  // server: {
  //   port: 3000, // or any other port you prefer
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:5173'
  //     }
  //   }
  // }
})
