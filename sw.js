if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const c=e=>i(e,r),l={module:{uri:r},exports:o,require:c};s[r]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(t(...e),o)))}}define(["./workbox-f5523f08"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index--19UAChw.js",revision:null},{url:"assets/index-DiwrgTda.css",revision:null},{url:"index.html",revision:"2b924819447b3b40197f431a246e9a6f"},{url:"registerSW.js",revision:"1d975649725a96cfe77c44e6f9151fb6"},{url:"manifest.webmanifest",revision:"4011c54d37bc15a2dc14c2c2276f9fbb"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/your-api-domain\.com\/api\/.*$/,new e.CacheFirst({cacheName:"api-cache",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:300}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
