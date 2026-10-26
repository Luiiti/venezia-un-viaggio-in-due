import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');const sandbox={URLSearchParams};sandbox.window=sandbox;vm.createContext(sandbox);
for(const f of ['data/places.js','data/sources.js','data/itinerary.js']){vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),sandbox);Object.assign(sandbox,sandbox.window)}
const {DAYS,DAY_OVERVIEWS,ROUTES,PLACES,mapsRoute,hotelRoute,BUDGET_DEFAULTS,SOURCES}=sandbox.window;
assert.equal(DAYS.length,4);assert.equal(Object.values(BUDGET_DEFAULTS).reduce((a,b)=>a+b,0),950);let count=0;
for(const day of DAYS){let end=0;assert.equal(new Date(day.date+'T12:00:00Z').getUTCDay(),day.id===1?0:day.id-1);
 for(const e of day.events){assert.ok(e.start>=end,`Solapamiento: día ${day.id}, ${e.title}`);assert.ok(e.end>=e.start);end=e.end;assert.ok(['planned','pending','confirmed'].includes(e.status));if(e.status==='confirmed')assert.ok(e.evidence,'Una reserva confirmada exige evidencia');for(const id of e.routes||[])assert.ok(ROUTES[id],id);for(const id of e.sources||[])assert.ok(SOURCES[id],id)}
 for(const id of day.routeIds){assert.ok(ROUTES[id]);count++}
 assert.ok(fs.existsSync(path.join(root,'assets',day.image+'.webp')))
}
assert.equal(count,21);
for(const id of Object.keys(ROUTES)){const u=new URL(mapsRoute(id));const r=ROUTES[id];assert.equal(u.origin,'https://www.google.com');assert.equal(u.pathname,'/maps/dir/');assert.equal(u.searchParams.get('api'),'1');assert.equal(u.searchParams.get('origin'),PLACES[r.from].query);assert.equal(u.searchParams.get('destination'),PLACES[r.to].query);assert.equal(u.searchParams.get('travelmode'),r.mode||'walking');if(r.via)assert.equal(u.searchParams.get('waypoints'),r.via.join('|'));assert.ok(u.href.length<2048)}
const hotel=new URL(hotelRoute());assert.ok(!hotel.searchParams.has('origin'));assert.equal(hotel.searchParams.get('travelmode'),'walking');
assert.equal(hotel.searchParams.get('destination_place_id'),PLACES.hotel.placeId);
for(const id of Object.keys(ROUTES)){const r=ROUTES[id],u=new URL(mapsRoute(id));if(r.from==='hotel')assert.equal(u.searchParams.get('origin_place_id'),PLACES.hotel.placeId);if(r.to==='hotel')assert.equal(u.searchParams.get('destination_place_id'),PLACES.hotel.placeId)}
assert.equal(DAY_OVERVIEWS.length,4);for(const o of DAY_OVERVIEWS){const d=DAYS.find(x=>x.id===o.dayId);assert.ok(d);for(const item of o.items)assert.ok(d.events[item.event],'Actividad inexistente en el resumen')}
for(const f of ['index.html','styles.css','app.js','print.html','print.css','print.js','manifest.webmanifest','sw.js','assets/photo-credits.js'])assert.ok(fs.existsSync(path.join(root,f)),f);
console.log(`OK: cuatro jornadas cronológicas, sin solapamientos; ${count} rutas válidas; estados y presupuesto comprobados.`);
