"use strict";function e(e){return new Promise(function(c,r){i.test(e.request.url)||!navigator.onLine?caches.match(e.request).then(function(t){t?c(t):caches.open(n).then(function(t){fetch(e.request).then(function(n){t.put(e.request.url,n.clone()),c(n)})})}):caches.open(t).then(function(t){fetch(e.request).then(function(n){t.put(e.request.url,n.clone()),c(n)})})})}var t="dataCache-1.0",n="staticCache-1.0",c=["/","/uglify.js","/index.html","/404.html","/browserconfig.xml","/favicon.ico","/manifest.json","/static/vendors.prod.dll.js"],r=/https?\:\/\/(w{3})?(\w+\.?)+(\:\d+)?\/(api|__webpack_hmr|init\.js$)/,i=/antcores\.com\/static/;self.addEventListener("install",function(e){console.log("[ServiceWorker] Install"),e.waitUntil(caches.open(n).then(function(e){return console.log("[ServiceWorker] Caching app shell"),e.addAll(c)}))}),self.addEventListener("activate",function(e){return console.log("[ServiceWorker] Activate"),e.waitUntil(caches.keys().then(function(e){return Promise.all(e.map(function(e){if(e!==n&&e!==t)return caches.delete(e)}))})),self.clients.claim()}),self.addEventListener("fetch",function(n){var c=n.request.url;r.test(c)?n.respondWith(caches.open(t).then(function(e){return fetch(n.request).then(function(t){return e.put(n.request.url,t.clone()),t})})):n.respondWith(e(n))});