// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  // **Base Path Configuration**
  // Replace 'vite-PWA' with your GitHub repository name
  base: '/vite-PWA/',

  plugins: [
    // **React Plugin**
    react(),

    // **PWA Plugin Configuration**
    VitePWA({
      // **Manifest Injection**
      injectRegister: 'auto',

      // **Register Type**
      registerType: 'autoUpdate',

      // **Workbox Configuration for Caching**
      workbox: {
        // Customize caching strategies
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/your-api-domain\.com\/api\/.*$/, // Update to match your API endpoints
            handler: 'CacheFirst',
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 300, // 5 minutes
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },

      // **Development Options**
      devOptions: {
        enabled: true, // Enable PWA in development
        type: 'module',
      },

      // **Web App Manifest**
      manifest: {
        name: 'My PWA App',
        short_name: 'PWA App',
        description: 'My awesome Progressive Web App!',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        start_url: '/',
        display: 'standalone',
        icons: [
          {
            src: '/vite-PWA/icons/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/vite-PWA/icons/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/vite-PWA/icons/pwa-512x512-maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],
});
