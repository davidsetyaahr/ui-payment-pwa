if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>n(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/-yM_uUqqu9Jfii2xrheRQ/_buildManifest.js",revision:"f66cab32d873066f9cee993254fa52d9"},{url:"/_next/static/-yM_uUqqu9Jfii2xrheRQ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/200-f3444107bf09c02e.js",revision:"f3444107bf09c02e"},{url:"/_next/static/chunks/860-c4e1bbd83bd55fd5.js",revision:"c4e1bbd83bd55fd5"},{url:"/_next/static/chunks/873-f0a097f596a51792.js",revision:"f0a097f596a51792"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-41c7a067006caf69.js",revision:"41c7a067006caf69"},{url:"/_next/static/chunks/pages/_app-b487435e1924d057.js",revision:"b487435e1924d057"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/attend-72952addfd8f1495.js",revision:"72952addfd8f1495"},{url:"/_next/static/chunks/pages/component/navbottom-921a93b551e2020a.js",revision:"921a93b551e2020a"},{url:"/_next/static/chunks/pages/helper/textHelper-e23e5af5b315a0cd.js",revision:"e23e5af5b315a0cd"},{url:"/_next/static/chunks/pages/home-03c6c5a4780820a6.js",revision:"03c6c5a4780820a6"},{url:"/_next/static/chunks/pages/mypoint-fb4f3cc382af3242.js",revision:"fb4f3cc382af3242"},{url:"/_next/static/chunks/pages/payment-c5f5c8f64fb700f7.js",revision:"c5f5c8f64fb700f7"},{url:"/_next/static/chunks/pages/payment_history-2ebb21e20b1f5dd2.js",revision:"2ebb21e20b1f5dd2"},{url:"/_next/static/chunks/pages/payment_konfirm-f1a9a942acdfbc91.js",revision:"f1a9a942acdfbc91"},{url:"/_next/static/chunks/pages/score-9e0341ee22edf371.js",revision:"9e0341ee22edf371"},{url:"/_next/static/chunks/pages/signin-874a0e6d46380d43.js",revision:"874a0e6d46380d43"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-59c5c889f52620d6.js",revision:"59c5c889f52620d6"},{url:"/_next/static/css/4daa21b9f24920b0.css",revision:"4daa21b9f24920b0"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"c606952e06643e074675703bd7dab932"},{url:"/icon-256x256.png",revision:"faa8747289212538114c36254662fa24"},{url:"/icon-384x384.png",revision:"f17e485a8817f4d59efce5e30506ada7"},{url:"/icon-512x512.png",revision:"f21f3c6183b5a1d4d096a1f7edd88260"},{url:"/images.png",revision:"92704abad4ef94714113fcba75e9d433"},{url:"/img/avatar/avatar.png",revision:"9093696aba6b756ab4f8b9afec826836"},{url:"/img/banner.png",revision:"956d36de917f410f1acfbf8b2414721f"},{url:"/img/icons/icon-attend.png",revision:"1b7ba1f821e6d2771859b6f9349ea298"},{url:"/img/icons/icon-home.png",revision:"bd9504a14f24827cab94778a51388a25"},{url:"/img/icons/icon-payment.png",revision:"40dcb294eda5841184e761346e43a0fc"},{url:"/img/icons/icon-point-red.png",revision:"edfa5f27c6ee5d4a860ee58a827fcaa8"},{url:"/img/icons/icon-point.png",revision:"9a539d8d85cdb9e71451b4a1a5b73188"},{url:"/img/icons/icon-score-red.png",revision:"ec2d74811fca84e3c2f9f916ee7232d6"},{url:"/img/icons/icon-score.png",revision:"719944e95149a30a274203f90538536f"},{url:"/img/logoutama1.png",revision:"32d789f13186a43d5c355ebdbcfd2da4"},{url:"/js/custome.js",revision:"e6c0e038276991574b6bafe9257f9e32"},{url:"/manifest.json",revision:"62df4392de7c6b7b6c28ccc2e4a779c4"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/thirteen.svg",revision:"53f96b8290673ef9d2895908e69b2f92"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
