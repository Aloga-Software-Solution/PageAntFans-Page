import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        historyApiFallback: true, // Redirige todas las rutas a index.html en desarrollo
    },
});
