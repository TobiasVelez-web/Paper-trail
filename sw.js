// Network-first: always try to load the latest from the server.
// Only fall back to cache if the network is completely unavailable (offline).
const CACHE = 'papertrail-v4';

self.addEventListener('install', e => { self.skipWaiting(); });

self.addEventListener('activate', e => {
  // delete ALL old caches so stale pages can't be served
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.url.includes('/api/')) return;      // never touch API calls
  if (e.request.method !== 'GET') return;
  // network-first: get fresh copy, fall back to cache only if offline
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
