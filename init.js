"use strict";var e=function(e){return window.localStorage.getItem(e)},r=function(e,r){return window.localStorage.setItem(e,r)},n="antcores-services-worker-version",o="1.1.5",t=function(){window.navigator.serviceWorker.register("https://www.antcores.com/service-worker.js").then(function(t){r(n,o),console.log("Service Worker Registered"),console.log("Service Worker current version is : "+e(n))}).catch(function(e){console.error("Registration failed with "+e)})};"serviceWorker"in window.navigator&&window.navigator.serviceWorker.getRegistration().then(function(r){r&&e(n)!==o?(caches.keys().then(function(e){return Promise.all(e.map(function(e){return caches.delete(e)}))}),r.update(),r.unregister().then(function(){t(),console.log("Update Service Worker to version: "+o)})):t()}).catch(function(e){console.error(e)});var c="https://cdnjs.cloudflare.com/ajax/libs/core-js/2.4.1/core.min.js",i="https://cdnjs.cloudflare.com/ajax/libs/fetch/2.0.1/fetch.min.js",s=function(e){var r=document.createElement("script");r.async=!1,r.src=e,r.defer=!0,document.head.appendChild(r)};"assign"in Object&&"Promise"in window&&"keys"in Object||s(c),"fetch"in window||s(i);