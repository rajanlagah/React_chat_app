const cacheName = `cache-v3.9.6`;

const channel = new BroadcastChannel('custom-serviceWorker');

const cacheAssets = [
  '/loadmsgs',
  './offline_assets/404.svg',
  './offline_assets/rocket.svg',
  './offline_assets/earth.svg',
  './offline_assets/moon.svg',
  './offline_assets/astronaut.svg',
  './offline_assets/overlay_stars.svg',
  './offline_assets/bg_purple.png',
  './offline.html',
  './shell.html',
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

  self.addEventListener('fetch', e => {
    console.log('i am fetch event')

    const url = new URL(e.request.url);

    // might b this block is useless as v use react
    if(url.origin == location.origin &&  url.pathname === '/'){
      console.log('sending sell')
      e.respondWith(caches.match('/shell.html'))
    }

      channel.postMessage(navigator.onLine);
      console.log(e.request.mode);
      if (!navigator.onLine && e.request.mode === 'navigate') {
        e.respondWith(
          caches.match('/offline.html').then(res => {
            return new Response(res.body, {
              headers: {
                'Content-Type': 'text/html',
              },
            });
          }),
        );
      } else {
        e.respondWith(
          caches.match(e.request).then(res => {
            return res || fetch(e.request);
          }),
        );
      }
  })

  self.addEventListener('message', event => {
    if (event.data === 'skipWaiting') {
      self.skipWaiting();
    }
  });

  self.addEventListener('new-message', event => {
      console.log('new-message')
  });