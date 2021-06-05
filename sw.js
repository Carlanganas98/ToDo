let cacheName = 'v1';

let urls_to_cache = [
    './',
    './js/App.js',
    './js/BotonCrea.js',
    './js/CompleteTsk.js',
    './js/CreaTsk.js',
    './js/DelTsk.js',
    './js/DropDown.js',
    './js/Fila.js',
    './js/gui.js',
    './js/storage.js',
    './js/TablaToDo.js',
    './js/TotalTsk.js',
    './estilo.css',
    './index.html',
    './img/icon3.png',
    './sw.js',
    './manifest.json'
]

self.addEventListener('install', function(e){
    e.waitUntil(caches.open(cacheName).then((cache) => {
        return cache.addAll(urls_to_cache);
    }))
})

self.addEventListener('fetch', (e) => {
    e.respondWith(
      caches.match(e.request).then((r) => {
            //console.log('[Servicio Worker] Obteniendo recurso: '+e.request.url);
        return r || fetch(e.request).then((response) => {
                  return caches.open(cacheName).then((cache) => {
            //console.log('[Servicio Worker] Almacena el nuevo recurso: '+e.request.url);
            cache.put(e.request, response.clone());
            return response;
          });
        });
      })
    );
  });