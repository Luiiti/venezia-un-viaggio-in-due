/* Destinos editables. Las coordenadas solo sitúan marcadores orientativos.
   Las rutas usan nombres completos y direcciones; ningún ID de lugar se inventa. */
window.PLACES = {
 hotel:{name:'Hotel Riva | BZAR hotels',address:'C. va al Ponte de l’Anzolo, 5310',locality:'30122 Venezia VE, Italy',query:'Hotel Riva | BZAR hotels, C. va al Ponte de l’Anzolo, 5310, 30122 Venezia VE, Italy',placeId:'ChIJqVHbStixfkcRvkWxpL81in8',lat:45.4359774,lng:12.3400347,days:[1,2,3,4],source:'https://www.hotelrivavenice.com/location.php',note:'Hotel Riva | BZAR hotels. C. va al Ponte de l’Anzolo, 5310, 30122 Venezia VE, Italy. Dirección confirmada por los viajeros y punto contrastado con el mapa de la web oficial. Confirmar las instrucciones de entrada con el alojamiento.'},
 treviso:{name:'Aeropuerto Treviso · TSF',query:'Aeroporto di Treviso Antonio Canova, Italia',lat:45.6484,lng:12.1944,days:[1]},
 roma:{name:'Piazzale Roma',query:'Piazzale Roma ACTV Venezia Italia',lat:45.4377,lng:12.3184,days:[1]},
 rialtoactv:{name:'Rialto · ACTV',query:'Rialto ACTV Riva del Carbon Venezia Italia',lat:45.4370,lng:12.3351,days:[1]},
 rialto:{name:'Puente de Rialto',query:'Ponte di Rialto Venezia Italia',lat:45.4380,lng:12.3359,days:[1]},
 salute:{name:'Santa Maria della Salute · exterior',query:'Basilica di Santa Maria della Salute Dorsoduro Venezia Italia',lat:45.4308,lng:12.3340,days:[1],note:'Visita exterior. No se programan entradas a la basílica.'},
 dogana:{name:'Punta della Dogana · panorámica',query:'Punta della Dogana Venezia Italia',lat:45.4309,lng:12.3365,days:[1],note:'Mirador exterior sobre el Bacino San Marco; no se programa entrada al museo.'},
 zattere:{name:'Zattere · Gesuati',query:'Fondamenta Zattere ai Gesuati Venezia Italia',lat:45.4299,lng:12.3270,days:[1],note:'Paseo junto al Canale della Giudecca. Marcador orientativo.'},
 sanmarco:{name:'Plaza de San Marcos',query:'Piazza San Marco Venezia Italia',lat:45.4341,lng:12.3388,days:[2]},
 basilica:{name:'Basílica de San Marcos',query:'Basilica di San Marco Venezia Italia',lat:45.4346,lng:12.3397,days:[2]},
 ducale:{name:'Palacio Ducal',query:'Palazzo Ducale Venezia Italia',lat:45.4337,lng:12.3404,days:[2]},
 sospiri:{name:'Puente de los Suspiros',query:'Ponte della Paglia Venezia Italia',lat:45.4334,lng:12.3410,days:[2],note:'Mirador exterior desde Ponte della Paglia. El paso interior depende de las entradas y del tour.'},
 accademia:{name:'Puente de la Accademia',query:"Ponte dell’Accademia Venezia Italia",lat:45.4316,lng:12.3285,days:[2]},
 gondola:{name:'Gondole San Tomà',query:'Gondole San Toma Venezia Italia',lat:45.4343,lng:12.3265,days:[2],note:'Stazio preferido. Confirmar el punto de embarque y el recorrido privado; el traghetto no es la excursión privada.'},
 nove:{name:'Fondamente Nove · A',query:'Fondamente Nove A ACTV Venezia Italia',lat:45.4421,lng:12.3398,days:[3],note:'Comprobar la letra del pontón y el panel de salidas el mismo día.'},
 burano:{name:'Burano · embarcadero',query:'Burano ACTV imbarcadero Venezia Italia',lat:45.4873,lng:12.4161,days:[3]},
 galuppi:{name:'Plaza Baldassarre Galuppi',query:'Piazza Baldassarre Galuppi Burano Venezia Italia',lat:45.4848,lng:12.4173,days:[3]},
 treponti:{name:'Tre Ponti · Burano',query:'Tre Ponti Burano Venezia Italia',lat:45.4857,lng:12.4157,days:[3]},
 acquaalta:{name:'Librería Acqua Alta',query:'Libreria Acqua Alta Calle Lunga Santa Maria Formosa 5176B Venezia Italia',lat:45.4371,lng:12.3424,days:[4]},
 alilaguna:{name:'Rialto · Alilaguna',query:'Alilaguna Rialto Riva del Carbon Venezia Italia',lat:45.4368,lng:12.3350,days:[4],note:'Buscar el rótulo ALILAGUNA en Riva del Carbon; es un servicio diferente de ACTV.'},
 vce:{name:'Aeropuerto Marco Polo · VCE',query:'Aeroporto di Venezia Marco Polo terminal Italia',lat:45.5053,lng:12.3519,days:[4]}
};
window.ROUTES = {
 'treviso-roma':{from:'treviso',to:'roma',mode:'transit',label:'Treviso → Piazzale Roma'},
 'roma-rialto':{from:'roma',to:'rialtoactv',mode:'transit',label:'Piazzale Roma → Rialto · ACTV 1'},
 'rialto-hotel':{from:'rialtoactv',to:'hotel',label:'Rialto ACTV → Hotel Riva'},
 'hotel-salute':{from:'hotel',to:'salute',via:['Campo Santo Stefano Venezia Italia','Ponte dell Accademia Venezia Italia'],label:'Hotel Riva → Santa Maria della Salute'},
 'salute-zattere':{from:'salute',to:'zattere',via:['Punta della Dogana Venezia Italia'],label:'Salute → Punta della Dogana → Zattere'},
 'zattere-hotel':{from:'zattere',to:'hotel',via:['Ponte dell Accademia Venezia Italia'],label:'Zattere → Hotel Riva'},
 'hotel-sanmarco':{from:'hotel',to:'sanmarco',label:'Hotel Riva → San Marcos'},
 'sanmarco-ducale':{from:'sanmarco',to:'ducale',label:'San Marcos → Palacio Ducal'},
 'ducale-sospiri':{from:'ducale',to:'sospiri',label:'Palacio Ducal → Ponte della Paglia'},
 'sanmarco-accademia':{from:'sanmarco',to:'accademia',label:'San Marcos → Accademia',via:['Campo Santo Stefano Venezia Italia']},
 'accademia-gondola':{from:'accademia',to:'gondola',label:'Accademia → Gondole San Tomà'},
 'gondola-hotel':{from:'gondola',to:'hotel',label:'Gondole San Tomà → Hotel Riva'},
 'hotel-nove':{from:'hotel',to:'nove',label:'Hotel Riva → Fondamente Nove A',via:['Campo Santi Giovanni e Paolo Venezia Italia']},
 'nove-burano':{from:'nove',to:'burano',mode:'transit',label:'Fondamente Nove → Burano · ACTV 12'},
 'burano-walk':{from:'burano',to:'treponti',via:['Piazza Baldassarre Galuppi Burano Venezia Italia'],label:'Burano → Plaza Galuppi → Tre Ponti'},
 'burano-nove':{from:'burano',to:'nove',mode:'transit',label:'Burano → Fondamente Nove · ACTV 12'},
 'nove-hotel':{from:'nove',to:'hotel',label:'Fondamente Nove → Hotel Riva'},
 'hotel-acqua':{from:'hotel',to:'acquaalta',label:'Hotel Riva → Librería Acqua Alta'},
 'acqua-hotel':{from:'acquaalta',to:'hotel',label:'Librería Acqua Alta → Hotel Riva'},
 'hotel-alilaguna':{from:'hotel',to:'alilaguna',label:'Hotel Riva → Alilaguna Rialto'},
 'alilaguna-vce':{from:'alilaguna',to:'vce',mode:'transit',label:'Alilaguna Rialto → Marco Polo'}
};
/* Tiempos a pie estimados, sin paradas. Puentes, maletas y afluencia los amplían. */
for(const [id,duration] of Object.entries({
 'rialto-hotel':'6–10 min', 'hotel-salute':'30–40 min', 'salute-zattere':'20–30 min sin paradas',
 'zattere-hotel':'30–40 min', 'hotel-sanmarco':'5–10 min', 'sanmarco-ducale':'2–5 min',
 'ducale-sospiri':'2–5 min', 'sanmarco-accademia':'15–20 min', 'accademia-gondola':'15–25 min',
 'gondola-hotel':'20–30 min', 'hotel-nove':'15–20 min', 'burano-walk':'20–30 min sin paradas',
 'nove-hotel':'15–20 min', 'hotel-acqua':'5–10 min', 'acqua-hotel':'5–10 min', 'hotel-alilaguna':'6–10 min'
})) ROUTES[id].duration=duration;
window.mapsRoute = function(id){
 const r=ROUTES[id], p=new URLSearchParams({api:'1',origin:PLACES[r.from].query,destination:PLACES[r.to].query,travelmode:r.mode||'walking'});
 if(PLACES[r.from].placeId)p.set('origin_place_id',PLACES[r.from].placeId);
 if(PLACES[r.to].placeId)p.set('destination_place_id',PLACES[r.to].placeId);
 if(r.via)p.set('waypoints',r.via.join('|'));
 return 'https://www.google.com/maps/dir/?'+p.toString();
};
window.mapsPlace = id=>{const p=new URLSearchParams({api:'1',query:PLACES[id].query});if(PLACES[id].placeId)p.set('query_place_id',PLACES[id].placeId);return 'https://www.google.com/maps/search/?'+p.toString()};
window.hotelRoute = ()=>'https://www.google.com/maps/dir/?'+new URLSearchParams({api:'1',destination:PLACES.hotel.query,destination_place_id:PLACES.hotel.placeId,travelmode:'walking',dir_action:'navigate'});
