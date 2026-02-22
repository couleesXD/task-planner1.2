// sw.js - GitHub Pages совместимый
const CACHE_NAME = 'day-planner-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/icons/icon-192.png',
    '/manifest.json'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
            .catch(() => console.log('Cache failed - offline mode limited'))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
