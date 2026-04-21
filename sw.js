// GoMed Service Worker — PWA offline support
const CACHE_NAME = 'gomed-v2';

// App shell assets to pre-cache on install
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon.svg',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.1.6/purify.min.js'
];

// ── Install: pre-cache app shell ─────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Cache local assets reliably; CDN assets best-effort
      const local = ['/', '/index.html', '/manifest.json', '/icons/icon.svg'];
      const cdn = [
        'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.1.6/purify.min.js'
      ];
      return cache.addAll(local).then(() =>
        Promise.allSettled(cdn.map(url => cache.add(url)))
      );
    }).then(() => self.skipWaiting())
  );
});

// ── Activate: remove old caches ──────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// ── Fetch: routing strategy ──────────────────────────────────
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Always go network for Groq API calls — never cache patient data
  if (url.hostname === 'api.groq.com') {
    event.respondWith(fetch(event.request));
    return;
  }

  // Cache-first for CDN assets (jsPDF, etc.)
  if (url.hostname.includes('cdnjs.cloudflare.com')) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        });
      })
    );
    return;
  }

  // Network-first for same-origin requests (always get latest index.html)
  if (url.origin === self.location.origin) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(event.request).then(cached => {
          if (cached) return cached;
          // Fallback to index.html for navigation requests (SPA)
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html');
          }
        }))
    );
    return;
  }

  // Default: network with cache fallback
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
