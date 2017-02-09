"use strict";
var VERSION = "1.1.6";
var dataCacheName = "dataCache-" + VERSION;
var staticCacheName = "staticCache-" + VERSION;
var filesToCache = [
    "/",
    "/init.js",
    "/uglify.js",
    "/index.html",
    "/404.html",
    "/browserconfig.xml",
    "/favicon.ico",
    "/manifest.json",
    "/static/vendors.dev.dll.js",
];
var dataUrlPattern = /https?\:\/\/(w{3})?(\w+\.?)+(\:\d+)?\/(api|__webpack_hmr)/;
var domainToCachePattern = /antcores\.com\/static/;
var fileToCachePtn = /\.(jpe?g|png|gif|svg|mp4|mov|woff2?|eot|mp3|wav)/i;
function syncGetCache(e) {
    var url = e.request.url;
    return new Promise(function (resolve, reject) {
        if (!navigator.onLine ||
            domainToCachePattern.test(url) ||
            fileToCachePtn.test(url)) {
            caches.match(e.request).then(function (response) {
                if (response) {
                    resolve(response);
                }
                else {
                    caches.open(staticCacheName).then(function (cache) {
                        fetch(e.request).then(function (response) {
                            cache.put(url, response.clone());
                            resolve(response);
                        });
                    });
                }
            });
        }
        else {
            caches.open(dataCacheName).then(function (cache) {
                fetch(e.request).then(function (response) {
                    cache.put(url, response.clone());
                    resolve(response);
                });
            });
        }
    });
}
self.addEventListener("install", function (e) {
    console.log("[ServiceWorker] Install");
    e.waitUntil(caches.open(staticCacheName).then(function (cache) {
        console.log("[ServiceWorker] Caching app shell");
        return cache.addAll(filesToCache);
    }));
});
self.addEventListener("activate", function (e) {
    console.log("[ServiceWorker] Activate");
    e.waitUntil(caches.keys().then(function (keyList) {
        return Promise.all(keyList.map(function (key) {
            if (key !== staticCacheName && key !== dataCacheName) {
                return caches.delete(key);
            }
        }));
    }));
    return self.clients.claim();
});
self.addEventListener("fetch", function (e) {
    var url = e.request.url;
    if (dataUrlPattern.test(url)) {
        e.respondWith(caches.open(dataCacheName).then(function (cache) {
            return fetch(e.request).then(function (response) {
                cache.put(url, response.clone());
                return response;
            });
        }));
    }
    else {
        e.respondWith(syncGetCache(e));
    }
});
