var e=function(){window.navigator.serviceWorker.register("/service-worker.js").then(function(e){})["catch"](function(e){})};"serviceWorker"in window.navigator&&window.navigator.serviceWorker.getRegistration().then(function(n){e()})["catch"](function(e){console.error(e)});var n="https://cdnjs.cloudflare.com/ajax/libs/core-js/2.4.1/core.min.js",c="https://cdnjs.cloudflare.com/ajax/libs/fetch/2.0.1/fetch.min.js",i=function(e){var n=document.createElement("script");n.async=!1,n.src=e,n.defer=!0,document.head.appendChild(n)};"assign"in Object&&"Promise"in window&&"keys"in Object||i(n),"fetch"in window||i(c);