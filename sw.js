// Minimal service worker so Android Chrome offers "Install". No caching: tides must always be live.
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",e=>e.respondWith(fetch(e.request)));
