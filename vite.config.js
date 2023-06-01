import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    /*build: {
        manifest: true,
        outDir: 'public/build',
        rollupOptions: {
            input: 'resources/js/app.jsx',
        },
    },*/
    /*build: {
        outDir: './public_html/build/'
    },*/
    plugins: [
        laravel({
            publicDirectory: "public/build",
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    base: '',
});
