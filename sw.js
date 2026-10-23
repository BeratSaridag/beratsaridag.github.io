// Generated public app shell only. IndexedDB is never accessed here.
const CACHE='personal-hub-shell-08d198f246873d91dced';
const FILES=["/404.html","/404/index.html","/__next.__PAGE__.txt","/__next._full.txt","/__next._tree.txt","/_next/static/6hofOi_9fgSTAkjYr0CVC/_buildManifest.js","/_next/static/6hofOi_9fgSTAkjYr0CVC/_ssgManifest.js","/_next/static/chunks/359-fca1099115d25055.js","/_next/static/chunks/463-ea46d822a7cd7857.js","/_next/static/chunks/4bd1b696-c7408084347438ae.js","/_next/static/chunks/500-fc3b64d9ff4a32a7.js","/_next/static/chunks/794-16b8a42d537e2b1f.js","/_next/static/chunks/app/_global-error/page-95da5568d5f3d1de.js","/_next/static/chunks/app/_not-found/page-0c87f91194f40003.js","/_next/static/chunks/app/fitness/history/layout-95da5568d5f3d1de.js","/_next/static/chunks/app/fitness/history/page-ed9e6bb6546f1e2a.js","/_next/static/chunks/app/fitness/layout-e65e30c825532e63.js","/_next/static/chunks/app/fitness/page-ddffbc9da630402f.js","/_next/static/chunks/app/fitness/progress/layout-95da5568d5f3d1de.js","/_next/static/chunks/app/fitness/progress/page-55bd31c646a682f7.js","/_next/static/chunks/app/fitness/templates/layout-95da5568d5f3d1de.js","/_next/static/chunks/app/fitness/templates/page-98b9a037b6cd495b.js","/_next/static/chunks/app/habits/detail/page-4e1c545dd8b71edf.js","/_next/static/chunks/app/habits/layout-95da5568d5f3d1de.js","/_next/static/chunks/app/habits/page-c4f3f7750f35e1d3.js","/_next/static/chunks/app/layout-c4688fde95e1cfc0.js","/_next/static/chunks/app/manifest.webmanifest/route-95da5568d5f3d1de.js","/_next/static/chunks/app/page-0f37738a1d032d96.js","/_next/static/chunks/app/settings/layout-95da5568d5f3d1de.js","/_next/static/chunks/app/settings/page-cfe0e786f36b5ac5.js","/_next/static/chunks/framework-6cf1e6a62a0e875a.js","/_next/static/chunks/main-app-b697f127596bd182.js","/_next/static/chunks/main-ecf0887cb02e3996.js","/_next/static/chunks/next/dist/client/components/builtin/app-error-95da5568d5f3d1de.js","/_next/static/chunks/next/dist/client/components/builtin/forbidden-95da5568d5f3d1de.js","/_next/static/chunks/next/dist/client/components/builtin/global-error-57f6d37f12635b29.js","/_next/static/chunks/next/dist/client/components/builtin/not-found-95da5568d5f3d1de.js","/_next/static/chunks/next/dist/client/components/builtin/unauthorized-95da5568d5f3d1de.js","/_next/static/chunks/polyfills-42372ed130431b0a.js","/_next/static/chunks/webpack-de4f54b5aae0cb14.js","/_next/static/css/eb4f26a3bd15c7f1.css","/_next/static/media/013b72fa676f92e0-s.woff2","/_next/static/media/22a5144ee8d83bca-s.p.woff2","/_next/static/media/2b5b02fc7e511755-s.woff2","/_next/static/media/65f03d54ccadf4a8-s.woff2","/_next/static/media/7d4881bb7e1bf84d-s.p.woff2","/_next/static/media/9766a7e9e2e0ad5a-s.woff2","/_next/static/media/aa016aab0e6d1295-s.woff2","/_next/static/media/b66cf8e69499582a-s.woff2","/_next/static/media/b9408752a0c24fb9-s.woff2","/_next/static/media/e038a29029a234f2-s.woff2","/_next/static/media/f639721981034f88-s.woff2","/_not-found/__next._full.txt","/_not-found/__next._not-found.__PAGE__.txt","/_not-found/__next._tree.txt","/_not-found/index.html","/_not-found/index.txt","/favicon.ico","/file.svg","/fitness/__next._full.txt","/fitness/__next._tree.txt","/fitness/__next.fitness.__PAGE__.txt","/fitness/history/__next._full.txt","/fitness/history/__next._tree.txt","/fitness/history/__next.fitness.history.__PAGE__.txt","/fitness/history/index.html","/fitness/history/index.txt","/fitness/index.html","/fitness/index.txt","/fitness/progress/__next._full.txt","/fitness/progress/__next._tree.txt","/fitness/progress/__next.fitness.progress.__PAGE__.txt","/fitness/progress/index.html","/fitness/progress/index.txt","/fitness/templates/__next._full.txt","/fitness/templates/__next._tree.txt","/fitness/templates/__next.fitness.templates.__PAGE__.txt","/fitness/templates/index.html","/fitness/templates/index.txt","/globe.svg","/habits/__next._full.txt","/habits/__next._tree.txt","/habits/__next.habits.__PAGE__.txt","/habits/detail/__next._full.txt","/habits/detail/__next._tree.txt","/habits/detail/__next.habits.detail.__PAGE__.txt","/habits/detail/index.html","/habits/detail/index.txt","/habits/index.html","/habits/index.txt","/icons/apple-touch-icon.png","/icons/icon-192.png","/icons/icon-512.png","/icons/personal-hub.svg","/index.html","/index.txt","/manifest.webmanifest","/next.svg","/settings/__next._full.txt","/settings/__next._tree.txt","/settings/__next.settings.__PAGE__.txt","/settings/index.html","/settings/index.txt","/vercel.svg","/window.svg"];
const ALLOWED=new Set(FILES);
function cleanResponse(response,path,head=false){
 if(!response.ok||response.type==='opaque'||response.type==='opaqueredirect')throw new Error('Invalid shell response');
 if(response.url){
  const final=new URL(response.url);
  const directory=path.endsWith('/index.html')?path.slice(0,-10):null;
  if(final.origin!==self.location.origin||!(final.pathname===path||(directory!==null&&final.pathname===directory))||final.search)throw new Error('Unexpected shell redirect');
 }
 const headers=new Headers(response.headers);
 headers.delete('Location');headers.delete('Content-Length');headers.delete('Content-Encoding');
 // Fresh Response removes the internal redirect URL list, including old cached redirects.
 return new Response(head?null:response.body,{status:response.status,statusText:response.statusText,headers});
}
async function loadFile(path){
 const response=await fetch(new URL(path,self.location.origin).href,{redirect:'follow',cache:'reload',credentials:'omit'});
 return cleanResponse(response,path);
}
self.addEventListener('install',event=>event.waitUntil((async()=>{
 const cache=await caches.open(CACHE);
 try { for(const path of FILES)await cache.put(path,await loadFile(path)); }
 catch(error){await caches.delete(CACHE);throw error;}
 // No skipWaiting: preserve open forms until all old clients close.
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 for(const key of await caches.keys())if(key.startsWith('personal-hub-shell-')&&key!==CACHE)await caches.delete(key);
 await self.clients.claim();
})()));
self.addEventListener('fetch',event=>{
 const url=new URL(event.request.url);
 if(!['GET','HEAD'].includes(event.request.method)||url.origin!==self.location.origin)return;
 let path=url.pathname;
 if((event.request.mode==='navigate'||event.request.method==='HEAD')&&!ALLOWED.has(path))path=path.endsWith('/')?path+'index.html':path+'/index.html';
 if(!ALLOWED.has(path))return;
 event.respondWith((async()=>{
  try {
   const cache=await caches.open(CACHE);const cached=await cache.match(path);
   if(cached){try{return cleanResponse(cached,path,event.request.method==='HEAD');}catch{/* Repair a stale invalid shell entry online. */}}
   const response=await loadFile(path);
   await cache.put(path,response.clone());
   return cleanResponse(response,path,event.request.method==='HEAD');
  }catch{return new Response('Uygulama dosyası hazır değil. Bağlantı varken tekrar aç.',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}});}
 })());
});
