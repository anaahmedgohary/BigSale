import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import jsconfigPaths from 'vite-jsconfig-paths';

// https
// import mkcert from 'vite-plugin-mkcert';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  server: {
    // https: true,
    https: {
      cert: fs.readFileSync("./localhost.pem"),
      key: fs.readFileSync("./localhost-key.pem")
    },
    // origin: 'https://localhost:4000',
  },
})
