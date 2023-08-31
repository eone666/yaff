import {defineConfig} from "vite";
import run from "vite-plugin-run";

export default defineConfig({
    base: process.env.NODE_ENV === "development" ? "/" : "/yaff/",
    plugins: [
        run([{
            name: 'build packages',
            run: ['pnpm', 'build-packages'],
            pattern: ["./packages/**/*.{ts,tsx}", "!./packages/*/lib/**/*"],
        },])
    ],
    esbuild: {
        jsx: "transform",
        jsxFactory: 'Yaff.createElement',
        jsxFragment: 'Yaff.Fragment',
        jsxInject: `import * as Yaff from 'yaff'`,
    },
})