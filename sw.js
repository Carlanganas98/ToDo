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
]

self.addEventListener('install', function(e){
    e.waitUntil(caches.open(cacheName).then((cache) => {
        return cache.addAll(urls_to_cache);
    }))
})

self.addEventListener('fetch', function(e){
    e.respondWith(caches.match(e.request).then((response) => {
        if(response){
            return response;
        }
        else{
            return fetch(e.request);
        }
    }))
})