"use strict";function e(e){var c=e.request.url;return new Promise(function(o,a){!navigator.onLine||i.test(c)&&!s.test(c)||r.test(c)?caches.match(e.request).then(function(t){t?o(t):caches.open(n).then(function(t){fetch(e.request).then(function(e){t.put(c,e.clone()),o(e)})})}):caches.open(t).then(function(t){fetch(e.request).then(function(e){t.put(c,e.clone()),o(e)})})})}var t="dataCache-1.0.3",n="staticCache-1.0.3",c=["/","/uglify.js","/index.html","/404.html","/browserconfig.xml","/favicon.ico","/manifest.json","/static/vendors.prod.dll.js"],o=/https?\:\/\/(w{3})?(\w+\.?)+(\:\d+)?\/(api|__webpack_hmr|init\.js$)/,i=/antcores\.com\/static/,s=/antcores\.com\/static\/js\//,r=/\.(jpe?g|png|gif|svg|mp4|mov|woff2?|eot|mp3|wav)/i;self.addEventListener("install",function(e){console.log("[ServiceWorker] Install"),e.waitUntil(caches.open(n).then(function(e){return console.log("[ServiceWorker] Caching app shell"),e.addAll(c)}))}),self.addEventListener("activate",function(e){return console.log("[ServiceWorker] Activate"),e.waitUntil(caches.keys().then(function(e){return Promise.all(e.map(function(e){if(e!==n&&e!==t)return caches.delete(e)}))})),self.clients.claim()}),self.addEventListener("fetch",function(n){var c=n.request.url;o.test(c)?(console.log("[Service Worker] Fetch: ",c),n.respondWith(caches.open(t).then(function(e){return fetch(n.request).then(function(t){return e.put(c,t.clone()),t})}))):n.respondWith(e(n))});