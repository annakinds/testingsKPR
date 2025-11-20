import { defineConfig } from 'astro/config';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
    plugins: [mkcert()],
    server: {
        https: true,
        host: true, 
        port: 5173, 
    },
});
