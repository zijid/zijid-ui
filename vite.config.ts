import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: 'src',
      tsconfigPath: 'tsconfig.build.json',
      outDir: 'dist',
      insertTypesEntry: true,
      exclude: ['demo', 'node_modules', 'dist']
    })
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'ZijidUI',
      fileName: 'zijid-ui'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue'
        },
        assetFileNames: 'style.css'
      }
    }
  }
})
