const CACHE_NAME = 'v1_cache';
console.log("coming in the file thisis the app file")
// const urlsToCache = [
//     '/',
//     '/index.html', 
//     '/offline.html',
//     '/main.css',
//     '/main.js',
//     '/app.js',
//     '/fetchdata.js',
//     '/fetchwheather.js',
// ];

// install service worker

// this.addEventListener('install', (event) => {
//     console.log('service worker is installing', event);
//     event.waitUntil(
//         caches.open(CACHE_NAME)
//          .then((cache) => {
//                 console.log('caching files');
//                  cache.addAll(urlsToCache);
//             })
//     );
// });


this.addEventListener("install", (event) => {
    console.log("coming in the cache store event ")
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
              cache.addAll([
                 "/static/js/bundle.js",
                 "/static/js/main.chunk.js",
                 "/static/js/0.chunk.js",
                  "/index.html",
                 "/offline.html",
                  "/",
                 "/features"
            ])
        })
    )
    
})

// lissten to install event


// this.addEventListener('fetch', (event) => {
//     console.log('service worker is fetching', event);
//     if (!navigator.onLine) { 
//         event.respondWith(
//             caches.match(event.request)
//           .then((response) => {
//                 // if (response) {
//                 //     return response;
//                 // }
//                 return fetch(event.request)
//                     .catch(err => caches.match('/offline.html'))
//             })
//         );
//     }
    
// });


this.addEventListener("fetch", (event) => { 
    if (!navigator.onLine) { 
        event.respondWith(
            caches.match(event.request).then((response) => {
                 if(response) return response
            })
        )
    }
  
})



// activate event

// this.addEventListener('activate', (event) => {
//     const cachewhitelist = []
//     cachewhitelist.push(CACHE_NAME);

//     event.waitUntil(
//         caches.keys().then((cacheNames) => {
//             return Promise.all(
//                 cacheNames.map((cacheName) => {
//                     if (!cachewhitelist.includes(cacheName)) {
//                         return caches.delete(cacheName);
//                     }
//                 })
//             );
        

//         })
//     )
// })