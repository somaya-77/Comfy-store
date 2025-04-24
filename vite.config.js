import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react()],
  plugins: [
    react(),
    AutoImport({
      presets: ['react'],
    }),
  ],
  resolve: {
    extensions: ['.js','.jsx'],
  }
})

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import AutoImport from 'unplugin-auto-import/vite'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     AutoImport({
//       imports: [
//         'react',
//         'react-dom', 
//       ],
//     }),
//   ],
//   resolve: {
//     extensions: ['.js', '.jsx'],
//   },
// })


