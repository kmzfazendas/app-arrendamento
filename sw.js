const CACHE_NAME = 'arrendamento-v9'; 
const urlsToCache = [
  './',
  'index.html',
  'manifest.json',
  'image.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
