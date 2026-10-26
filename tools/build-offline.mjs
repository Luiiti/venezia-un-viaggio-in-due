import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const core=['./','index.html','print.html','styles.css','app.js','manifest.webmanifest','data/places.js','data/sources.js','data/itinerary.js','assets/photo-credits.js','assets/photo-credits.json','assets/icon.svg','assets/icon-180.png','assets/icon-192.png','assets/icon-512.png','assets/vendor/cormorant.woff2','assets/vendor/sans.woff2','assets/vendor/leaflet.js','assets/vendor/leaflet.css',...fs.readdirSync(path.join(root,'assets')).filter(f=>f.endsWith('.webp')).map(f=>'assets/'+f)];
core.push('print.css','print.js');
const hash=crypto.createHash('sha256');for(const f of core.filter(f=>f!=='./'))hash.update(fs.readFileSync(path.join(root,f)));
const name='venezia-'+hash.digest('hex').slice(0,12);
const code=`/* Generado con node tools/build-offline.mjs después de editar la guía. */
const PREFIX='venezia-guide:'+self.registration.scope+':';
const CACHE=PREFIX+${JSON.stringify(name)};
const FILES=${JSON.stringify(core)};
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith(PREFIX)&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('message',e=>{if(e.data==='CHECK_CACHE')e.waitUntil(caches.open(CACHE).then(async c=>{const result=await Promise.all(FILES.map(f=>c.match(new URL(f,self.registration.scope).href)));e.source?.postMessage({type:'CACHE_READY',ready:result.every(Boolean),requested:false})}))});
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;
 const url=new URL(e.request.url);if(!url.href.startsWith(self.registration.scope))return;
 if(e.request.mode==='navigate'){
  e.respondWith((async()=>{const cache=await caches.open(CACHE);const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),2500);try{const response=await fetch(e.request,{signal:controller.signal});if(response.ok)return response}catch(err){}finally{clearTimeout(timer)}const isPrint=url.pathname.endsWith('/print.html');return await cache.match(new URL(isPrint?'print.html':'index.html',self.registration.scope).href)||Response.error()})());return;
 }
 e.respondWith(caches.open(CACHE).then(async c=>await c.match(e.request)||fetch(e.request)));
});
`;
fs.writeFileSync(path.join(root,'sw.js'),code);console.log('Consulta sin conexión:',name,core.length,'recursos. No se guardan teselas del mapa ni contenido de servicios externos.');
