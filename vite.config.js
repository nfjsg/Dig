// vite.config.js
import ReactRefresh from '@vitejs/plugin-react-refresh';

export default {
  plugins: [ReactRefresh()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
};
