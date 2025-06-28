import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpeg,jpg}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              }
            }
          },
          {
            urlPattern: /^https:\/\/images\.pexels\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'pexels-images-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
              }
            }
          },
          {
            urlPattern: /^https:\/\/www\.bokadirekt\.se\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'bokadirekt-cache',
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 // 1 day
              },
              networkTimeoutSeconds: 10
            }
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
              }
            }
          }
        ],
        navigateFallback: '/offline.html',
        navigateFallbackDenylist: [/^\/_/, /\/[^/?]+\.[^/]+$/],
        skipWaiting: true,
        clientsClaim: true
      },
      includeAssets: [
        'favicon.ico', 
        'Logo.jpeg', 
        'offline.html',
        'Favicon/android-icon-36x36.png',
        'Favicon/android-icon-48x48.png',
        'Favicon/android-icon-72x72.png',
        'Favicon/android-icon-96x96.png',
        'Favicon/android-icon-144x144.png'
      ],
      manifest: {
        name: 'Mister Barbershop',
        short_name: 'MrBarber',
        description: 'Boka din klipptid enkelt hos Mister Barbershop - Professionell barbering sedan 2009 i Jönköping',
        theme_color: '#F4A300',
        background_color: '#F4A300',
        display: 'standalone',
        orientation: 'portrait-primary',
        scope: '/',
        start_url: '/',
        categories: ['lifestyle', 'business', 'health'],
        lang: 'sv',
        icons: [
          {
            src: '/Favicon/android-icon-36x36.png',
            sizes: '36x36',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/Favicon/android-icon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/Favicon/android-icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/Favicon/android-icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/Favicon/android-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/Logo.jpeg',
            sizes: '180x180',
            type: 'image/jpeg',
            purpose: 'any'
          }
        ],
        shortcuts: [
          {
            name: 'Boka CITY',
            short_name: 'CITY',
            description: 'Boka tid på Barnapsgatan',
            url: '/location/city',
            icons: [
              {
                src: '/Favicon/android-icon-96x96.png',
                sizes: '96x96'
              }
            ]
          },
          {
            name: 'Boka ASECS',
            short_name: 'ASECS', 
            description: 'Boka tid på Kompanigatan',
            url: '/location/asecs',
            icons: [
              {
                src: '/Favicon/android-icon-96x96.png',
                sizes: '96x96'
              }
            ]
          }
        ]
      },
      // CRITICAL: Disable all development features and popups
      devOptions: {
        enabled: false
      },
      // Disable update prompts and notifications
      injectRegister: 'script',
      strategies: 'injectManifest',
      srcDir: 'public',
      filename: 'sw.js'
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          icons: ['lucide-react']
        }
      }
    }
  }
});