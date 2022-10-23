import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import cesium from 'vite-plugin-cesium'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [vue(), cesium()],
    server: {
      host: 'localhost',
      port: Number(env.VITE_APP_PROT),
      open: false,
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: 'http://127.0.0.1:3000',
          changeOrigin: true,
          rewrite: path => path.replace(new RegExp('^' + env.VITE_APP_BASE_API), '')
        }
      }
    },
    resolve: {
      //配置路径别名
      alias: [
        //@替代src
        {
          find: '@',
          replacement: path.resolve('./src')
        }
      ]
    }
  }
})
