if(!self.define){let e,i={};const r=(r,c)=>(r=new URL(r+".js",c).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(c,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let s={};const d=e=>r(e,o),f={module:{uri:o},exports:s,require:d};i[o]=Promise.all(c.map((e=>f[e]||d(e)))).then((e=>(n(...e),s)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"Shootout"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/android-chrome-192x192.png",revision:"1c75c75e9cde80078eece5178cc770b6"},{url:"/android-chrome-512x512.png",revision:"e024a34cba72a24622d4e49ecc01f15e"},{url:"/apple-touch-icon.png",revision:"0238f12e9ddf429fbf9f979c26bddbb3"},{url:"/beep-08b.mp3",revision:"b76b0645d3ba50d44def821b619ab0b6"},{url:"/browserconfig.xml",revision:"50fbafb31fef9b3398f6182fe2da742d"},{url:"/button-4.mp3",revision:"3959f938ad32fc6ed291d956079c3506"},{url:"/buzzer.mp3",revision:"4718706b29e472df739be8d9d500cbe1"},{url:"/css/app.8b664681.css",revision:null},{url:"/css/chunk-vendors.30118143.css",revision:null},{url:"/favicon-16x16.png",revision:"e45755512d9cfd971a8677c5a7c72a4d"},{url:"/favicon-32x32.png",revision:"c6e5a7d7808f5053baf3ffc6e961aa6b"},{url:"/game-over-voice.mp3",revision:"3dc444ae794e69291cdc16519204075e"},{url:"/index.html",revision:"b2005902be12b0620908a264e64c1aaf"},{url:"/js/app.2a3a519e.js",revision:null},{url:"/js/chunk-vendors.36dc3f8c.js",revision:null},{url:"/limited-shot-clock-activated.mp3",revision:"75dda9c1bd710a7f84d8d324b89160a6"},{url:"/manifest.json",revision:"3667b47b85656743f6af1ba10039fd54"},{url:"/mstile-150x150.png",revision:"fbe41b9ce8d16ce72b3853787f41c94e"},{url:"/one-minute-left.mp3",revision:"947161e91e7e088199c42d3e3dc2e481"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/safari-pinned-tab.svg",revision:"095af32ac5a28e4eccee2cdfdfd4f5c4"}],{})}));
//# sourceMappingURL=service-worker.js.map
