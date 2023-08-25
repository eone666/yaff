import path from "path";
import { defineConfig } from 'vite'

export default defineConfig({
    resolve: {
        alias: {
            "yaff": path.resolve(__dirname, './src/yaff'),
            "@": path.resolve(__dirname, './src')
        }
    },
    esbuild:{
        jsx:'transform',
        jsxInject: 'import {createElement,fragment} from "yaff"'
    }
})