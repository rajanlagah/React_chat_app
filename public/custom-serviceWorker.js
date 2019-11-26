const cacheName = `cache-v3.9.2`;

const cacheAssets = [
  '/loadmsgs',
  './offline_assets/404.svg',
  './offline_assets/rocket.svg',
  './offline_assets/earth.svg',
  './offline_assets/moon.svg',
  './offline_assets/astronaut.svg',
  './offline_assets/overlay_stars.svg',
  './offline_assets/bg_purple.png',
  './favicon.ico',
  './logo.png',
];

// Call Install Event
self.addEventListener('install', e => {
  console.log('Service Worker: Installed');

  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log('Service Worker: Caching Files');
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting()),
  );
});

// Call Activate Event
  self.addEventListener('activate', e => {
    console.log('Service Worker: Activated');
    // Remove unwanted caches
    e.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cache => {
            if (cache !== cacheName) {
              console.log('Service Worker: Clearing Old Cache');
              return caches.delete(cache);
            }
          }),
        );
      }),
    );
  });

  self.addEventListener('message', event => {
    if (event.data === 'skipWaiting') {
      self.skipWaiting();
    }
  });

  self.addEventListener('new-message', event => {
      console.log('new-message')
  });