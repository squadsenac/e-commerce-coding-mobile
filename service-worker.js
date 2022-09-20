var cacheName = 'LojadeMoveis+-v1.0';


 if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(reg => console.info('registered sw', reg))
    .catch(err => console.error('error registering sw', err));
} 

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        '.assets/css/animate.css',
        '.assets/css/bootsnav.css',
        '.assets/css/bootstrap.min.css',
        '.assets/css/font-awesome.min.css',
        '.assets/css/linearicons.css',
        '.assets/css/owl.carousel.min.css',
        '.assets/css/owl.theme.default.min.css',
        '.assets/css/responsive.css',
        './assets/css/style.css',

        './assets/fonts/fontawesome-webfont.eot',
        './assets/fonts/fontawesome-webfont.svg',
        './assets/fonts/fontawesome-webfont.ttf',
        './assets/fonts/fontawesome-webfont.woff',
        './assets/fonts/fontawesome-webfont.woff2',
        './assets/fonts/FontAwesome.otf',

        './assets/fonts/glyphicons-halflings-regular.eot',
        './assets/fonts/glyphicons-halflings-regular.svg',
        './assets/fonts/glyphicons-halflings-regular.ttf',
        './assets/fonts/glyphicons-halflings-regular.woff',
        './assets/fonts/glyphicons-halflings-regular.woff2',

        './assets/fonts/Linearicons-Free.eot',
        './assets/fonts/Linearicons-Free.svg',
        './assets/fonts/Linearicons-Free.ttf',
        './assets/fonts/Linearicons-Free.woff',
        './assets/fonts/Linearicons-Free.woff2',

        './assets/images/blog/b1.jpg',
        './assets/images/blog/b2.jpg',
        './assets/images/blog/b3.jpg',

        './assets/images/clients/c1.jpg',
        './assets/images/clients/c2.jpg',
        './assets/images/clients/c3.jpg',
        './assets/images/clients/c4.jpg',
        './assets/images/clients/c5.jpg',

        './assets/images/collection/arrivals1.jpg',
        './assets/images/collection/arrivals2.jpg',
        './assets/images/collection/arrivals3.jpg',
        './assets/images/collection/arrivals4.jpg',
        './assets/images/collection/arrivals5.jpg',
        './assets/images/collection/arrivals6.jpg',
        './assets/images/collection/arrivals7.jpg',
        './assets/images/collection/arrivals8.jpg',
        './assets/images/collection/sofa-collection-banner.jpg',
        './assets/images/collection/table-banner.jpg',

        './assets/images/features/f1.jpg',
        './assets/images/features/f2.jpg',
        './assets/images/features/f3.jpg',
        './assets/images/features/f4.jpg',

        './assets/images/populer-products/p1.jpg',
        './assets/images/populer-products/p2.jpg',
        './assets/images/populer-products/p3.jpg',

        './assets/images/slider/slider1.jpg',
        './assets/images/slider/slider2.jpg',
        './assets/images/slider/slider3.jpg',

        './assets/logo/favicon.png',
        './assets/logo/logo.png',

        './assets/js/bootsnav.js',
        './assets/js/bootstrap.min.js',
        './assets/js/custom.js',
        './assets/js/jquery.js',
        './assets/js/owl.carousel.min.js',

        './assets/icons/android/mipmap-hdpi/icone_e_biz.png',
        './assets/icons/android/mipmap-mdpi/icone_e_biz.png',
        './assets/icons/android/mipmap-xhdpi/icone_e_biz.png',
        './assets/icons/android/mipmap-xxhdpi/icone_e_biz.png',
        './assets/icons/android/mipmap-xxxhdpi/icone_e_biz.png',

        './assets/icons/Assets.xcassets/AppIcon.appiconset/_/16.png',
        './assets/icons/Assets.xcassets/AppIcon.appiconset/_/20.png',
        './assets/icons/Assets.xcassets/AppIcon.appiconset/_/29.png',
        './assets/icons/Assets.xcassets/AppIcon.appiconset/_/32.png',
        './assets/icons/Assets.xcassets/AppIcon.appiconset/_/40.png',
        './assets/icons/Assets.xcassets/AppIcon.appiconset/_/50.png',
        './assets/icons/Assets.xcassets/AppIcon.appiconset/_/55.png',
        './assets/icons/Assets.xcassets/AppIcon.appiconset/_/57.png',
        './assets/icons/Assets.xcassets/AppIcon.appiconset/_/60.png',
        './assets/icons/Assets.xcassets/AppIcon.appiconset/_/64.png',
        './assets/icons/Assets.xcassets/AppIcon.appiconset/_/72.png',
        './assets/icons/Assets.xcassets/AppIcon.appiconset/_/76.png',
        './assets/icons/Assets.xcassets/AppIcon.appiconset/_/80.png',
        './assets/icons/Assets.xcassets/AppIcon.appiconset/_/87.png',
        './assets/icons/Assets.xcassets/AppIcon.appiconset/_/88.png',
        './assets/icons/Assets.xcassets/AppIcon.appiconset/_/100.png',
        './assets/icons/Assets.xcassets/AppIcon.appiconset/_/114.png',
        './assets/icons/Assets.xcassets/AppIcon.appiconset/_/120.png',
        './assets/icons/Assets.xcassets/AppIcon.appiconset/_/128.png',
        './assets/icons/Assets.xcassets/AppIcon.appiconset/_/144.png',
        './assets/icons/Assets.xcassets/AppIcon.appiconset/_/152.png',
        './assets/icons/Assets.xcassets/AppIcon.appiconset/_/167.png',
        './assets/icons/Assets.xcassets/AppIcon.appiconset/_/172.png',
        './assets/icons/Assets.xcassets/AppIcon.appiconset/_/180.png',
        './assets/icons/Assets.xcassets/AppIcon.appiconset/_/196.png',
        './assets/icons/Assets.xcassets/AppIcon.appiconset/_/216.png',
        './assets/icons/Assets.xcassets/AppIcon.appiconset/_/256.png',
        './assets/icons/Assets.xcassets/AppIcon.appiconset/_/512.png',
        './assets/icons/Assets.xcassets/AppIcon.appiconset/_/1024.png',
        './assets/icons/Assets.xcassets/AppIcon.appiconset/Contents.json',
        
        './assets/icons/appstore.png',
        './assets/icons/playstore.png',
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

// This is the service worker with the combined offline experience (Offline page + Offline copy of pages)

const CACHE = "pwabuilder-offline-page";

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
const offlineFallbackPage = "ToDo-replace-this-name.html";

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener('install', async (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.add(offlineFallbackPage))
  );
});

if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

workbox.routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: CACHE
  })
);

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const preloadResp = await event.preloadResponse;

        if (preloadResp) {
          return preloadResp;
        }

        const networkResp = await fetch(event.request);
        return networkResp;
      } catch (error) {

        const cache = await caches.open(CACHE);
        const cachedResp = await cache.match(offlineFallbackPage);
        return cachedResp;
      }
    })());
  }
  // This is the "serving cached media" service worker

const CACHE = "pwabuilder-offline";

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.loadModule('workbox-cacheable-response');
workbox.loadModule('workbox-range-requests');

workbox.routing.registerRoute(
  /.*\.mp4/,
  new workbox.strategies.CacheFirst({
    cacheName: CACHE,
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({statuses: [200]}),
      new workbox.rangeRequests.RangeRequestsPlugin(),
    ],
  }),
);
});
});