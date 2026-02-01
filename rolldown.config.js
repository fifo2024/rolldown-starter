import { defineConfig } from "rolldown";
import { minify } from "rollup-plugin-esbuild";

// export default defineConfig({
//     input: "src/main.js",
//     output: {
//         file: "bundle.js",
//     },
// });

export default defineConfig([
    {
        input: "src/main.js",
        output: {
            format: "esm",
        },
        plugins: [minify()],
    },
    {
        input: "src/worker.js",
        output: {
            format: "iife",
            dir: "dist/worker",
            name: "__worker__",
        },
    },
]);
