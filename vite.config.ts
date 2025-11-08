import { defineConfig } from 'vitest/config';
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // تحسينات React
      jsxRuntime: "automatic",
      babel: {
        plugins: [
          // يمكن إضافة babel plugins هنا إذا احتجت
        ],
      },
    }),
    tailwindcss(),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
  },  

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@types": path.resolve(__dirname, "./src/types"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@lib": path.resolve(__dirname, "./src/lib"),
    },
  },

  // تحسينات الأداء
  build: {
    target: "esnext",
    minify: "esbuild",
    sourcemap: false, // true للـ production debugging
    rollupOptions: {
      output: {
        manualChunks: {
          // تقسيم الـ vendor للتحميل الأسرع
          "react-vendor": ["react", "react-dom"],
        },
      },
    },
    // زيادة حد التحذير للـ chunks الكبيرة
    chunkSizeWarningLimit: 1000,
  },

  // إعدادات الـ Dev Server
  server: {
    port: 3000,
    open: true, // فتح المتصفح تلقائياً
    cors: true,
    proxy: {
      // مثال للـ API proxy
      // '/api': {
      //   target: 'http://localhost:8000',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, ''),
      // },
    },
  },

  // إعدادات الـ Preview
  preview: {
    port: 4173,
    open: true,
  },

  // تحسينات الـ Dependencies
  optimizeDeps: {
    include: ["react", "react-dom"],
    exclude: [], // مكتبات لا تريد Vite يعمل لها pre-bundle
  },

  // متغيرات البيئة
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
   
});
