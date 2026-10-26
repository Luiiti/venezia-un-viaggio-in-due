/* Este es el archivo principal que hay que editar al cambiar el viaje.
   time = texto visible; start/end = minutos locales para comprobación de orden.
   status: planned | pending | confirmed. confirmed exige evidence no vacío.
   No hay reservas acreditadas en esta versión. */
window.TRIP={title:'Venezia, un viaggio in due',start:'2026-11-08',end:'2026-11-11',timezone:'Europe/Rome',adults:2,hotel:'Hotel Riva'};
window.DAYS=[
 {id:1,date:'2026-11-08',weekday:'Domingo',day:'08',title:'El primer encuentro',places:'Llegada · Salute · Punta della Dogana · Zattere',image:'hero',alt:'Santa Maria della Salute y el Gran Canal de Venecia',intro:'El Gran Canal nos da la bienvenida. Después, las cúpulas de la Salute, la laguna desde Punta della Dogana y la última luz en las Zattere.',note:'La mañana depende del vuelo y del equipaje. Salir hacia Dorsoduro a las 15:15 para aprovechar la luz; puesta de sol de referencia hacia las 16:48. Paseo por libre, sin reserva.',routeIds:['treviso-roma','roma-rialto','rialto-hotel','hotel-salute','salute-zattere','zattere-hotel'],events:[
  {time:'09:55',start:595,end:645,title:'Benvenuti a Venezia',kind:'plane',status:'planned',text:'Aterrizaje en Treviso Antonio Canova (TSF). Recoger el equipaje y salir de la terminal.',details:['Horario de vuelo facilitado por los viajeros; comprobarlo con la aerolínea.','Seguir la señalización ATVO hacia via le Canevare. Desde llegadas, salir y utilizar el paso peatonal elevado; hay ascensor y escaleras.'],sources:['atvo']},
  {time:'10:45–11:20',start:645,end:680,title:'En autobús hacia la laguna',kind:'bus',status:'planned',text:'Llegar a la parada con las maletas y tomar el próximo ATVO 351 hacia Venezia · Piazzale Roma.',transport:{company:'ATVO',line:'351',from:'Treviso · via le Canevare',direction:'Venezia · Piazzale Roma',off:'Piazzale Roma',duration:'40 min aprox. + espera',reference:'Referencias publicadas: 11:00 → 11:40 o 11:20 → 12:00. Revalidar el 8/11.'},details:['La franja 10:45–11:20 es para llegar y embarcar; la llegada a Venecia depende del autobús elegido.','Comprobar el destino antes de subir y las condiciones de equipaje del billete.'],routes:['treviso-roma'],sources:['atvo','atvopdf']},
  {time:'11:40–12:20',start:700,end:740,title:'Nuestro primer Gran Canal',kind:'boat',status:'planned',text:'Desde Piazzale Roma, embarcar en ACTV 1 y disfrutar de la llegada a Venecia desde el agua.',transport:{company:'ACTV',line:'1',from:'Piazzale Roma · F (referencia)',direction:'San Marco / Lido S.M.E.',off:'Rialto · no Rialto Mercato',duration:'20–30 min + espera',reference:'Franja orientativa; si el bus llega a las 12:00, el vaporetto y el hotel se desplazan unos minutos.'},details:['El documento inicial indicaba D. La referencia del horario oficial para la línea 1 es F: comprobar el panel del embarcadero.','Validar el título de transporte antes de subir. Llevar las maletas sin bloquear el paso.'],routes:['roma-rialto'],sources:['actv1','actv']},
  {time:'12:30–13:30',start:750,end:810,title:'Dejar las maletas, bajar el ritmo',kind:'hotel',status:'planned',text:`${PLACES.hotel.name} · ${PLACES.hotel.address}, ${PLACES.hotel.locality}. Desde Rialto: unos 6–10 minutos a pie, según el recorrido y las maletas.`,details:['Check-in virtual: hipótesis, no confirmado. No asumir que se puede entrar directamente.','Confirmar instrucciones de acceso, habitación antes de las 15:00 y consigna de equipaje.','Si no hay acceso temprano, acordar antes una solución para dejar las maletas.'],routes:['rialto-hotel']},
  {time:'13:30–15:15',start:810,end:915,title:'Una mesa y un respiro',kind:'food',status:'planned',text:'Comida y descanso cerca del Hotel Riva, sin restaurante reservado. Preparar una tarde de paseo antes de que se vaya la luz.'},
  {time:'15:15–17:15',start:915,end:1035,title:'Dorsoduro y la última luz',kind:'walk',status:'planned',text:'Paseo por libre: fachada de Santa Maria della Salute, panorámica desde Punta della Dogana y paseo junto al agua por las Zattere. Dos horas aproximadas con paradas para fotos.',image:'hero',details:['15:15: salir del Hotel Riva. Caminar por Campo Santo Stefano y cruzar el puente de la Accademia hacia la Salute; unos 30–40 minutos sin paradas.','15:55–16:20: contemplar la basílica por fuera y acercarse a Punta della Dogana para ver el Bacino San Marco.','16:20–17:15: seguir las Zattere hacia los Gesuati, con vistas a la Giudecca. Puesta de sol de referencia: 16:48; la visibilidad depende del tiempo.','Recorrido exterior gratuito, sin guía ni entradas a la basílica o al museo. Si la llegada se retrasa o llueve, acortarlo a Salute y Punta della Dogana.'],routes:['hotel-salute','salute-zattere'],sources:['dorsoduro','sunset']},
  {time:'Desde 17:15',start:1035,end:1320,title:'Un aperitivo y la ciudad de noche',kind:'food',status:'planned',text:'Aperitivo, cena y noche libres. Quedarnos por Dorsoduro o volver al Hotel Riva para descansar; sin restaurante reservado.',routes:['zattere-hotel']}
 ]},
 {id:2,date:'2026-11-09',weekday:'Lunes',day:'09',title:'Piedra, agua y última luz',places:'San Marcos · Accademia · Góndola',image:'sanmarco',alt:'Detalle de la fachada de la basílica de San Marcos, con el león dorado',intro:'La Venecia monumental por la mañana. Por la tarde, una panorámica inolvidable y media hora para dejarnos llevar.',note:'Los dos momentos con reserva —tour y góndola— siguen pendientes. Solicitar un recorrido por canales pequeños antes de pagar.',routeIds:['hotel-sanmarco','sanmarco-ducale','ducale-sospiri','sanmarco-accademia','accademia-gondola','gondola-hotel'],events:[
  {time:'09:00',start:540,end:600,title:'Desayuno sin prisas',kind:'food',status:'planned',text:'Una mañana tranquila antes de encontrarnos con San Marcos.'},
  {time:'10:10',start:610,end:625,title:'Camino de San Marcos',kind:'walk',status:'planned',text:'Salir del Hotel Riva. Unos 5 minutos a pie hasta la plaza; reservar margen para encontrar al guía.',routes:['hotel-sanmarco']},
  {time:'10:30–13:00',start:630,end:780,title:'El corazón de la Serenissima',kind:'monument',status:'pending',text:'Visita guiada en español a la Basílica de San Marcos y al Palacio Ducal. Duración prevista: 2 horas y 30 minutos.',image:'ducale',details:['Plaza y Basílica de San Marcos, Palacio Ducal y entorno del Campanile y la Torre del Reloj.','Puente de los Suspiros si lo permite el recorrido. Desde Ponte della Paglia hay vista exterior; el paso interior depende del tour.','Confirmar que el precio incluye entradas a ambos monumentos, las zonas accesibles y la duración.','Punto de encuentro y condiciones pendientes de la reserva. Ninguna entrada está comprada.'],routes:['sanmarco-ducale','ducale-sospiri']},
  {time:'13:00–14:20',start:780,end:860,title:'Almuerzo entre dos paseos',kind:'food',status:'planned',text:'Por Campo Santo Stefano o de camino a Accademia. Sin restaurante reservado y sin reserva obligatoria.'},
  {time:'14:30–15:00',start:870,end:900,title:'Una ventana al Gran Canal',kind:'walk',status:'planned',text:'Paseo gratuito al Puente de la Accademia. Tiempo para fotografiar la panorámica hacia Santa Maria della Salute.',image:'accademia',routes:['sanmarco-accademia']},
  {time:'15:00–15:25',start:900,end:925,title:'Pasear hasta San Tomà',kind:'walk',status:'planned',text:'Caminar hacia Gondole San Tomà. Disfrutar del recorrido y dejar un margen generoso antes de embarcar.',routes:['accademia-gondola']},
  {time:'16:00–16:30',start:960,end:990,title:'Solo nosotros y los canales',kind:'gondola',status:'pending',text:'Góndola privada, 30 minutos, buscando la última luz. Embarcadero preferido: Gondole San Tomà. Estimación para dos: 90 € por embarcación.',image:'gondola',details:['Pedir expresamente canales estrechos, pequeños puentes, edificios históricos y un recorrido tranquilo e íntimo.','Evitar un itinerario centrado principalmente en el Gran Canal y su tráfico. San Tomà no garantiza por sí solo el recorrido deseado.','Antes de pagar, confirmar ruta, punto de embarque, duración y tarifa. No confundir el traghetto de cruce con el paseo privado.','Frase útil: «Vorremmo un giro privato di trenta minuti nei canali piccoli e tranquilli, non principalmente sul Canal Grande. Potete confermare il percorso e il prezzo?»','La tarifa municipal publicada es de 90 € diurnos por 30 minutos; condiciones, disponibilidad y meteorología por confirmar.'],sources:['gondola']},
  {time:'Desde 16:30',start:990,end:1380,title:'Que la tarde decida',kind:'food',status:'planned',text:'Aperitivo, paseo y cena sin horarios. Tarde y noche libres.',routes:['gondola-hotel']}
 ]},
 {id:3,date:'2026-11-10',weekday:'Martes',day:'10',title:'Un día de todos los colores',places:'Burano · Canales · Tiempo libre',image:'burano',alt:'Casas de colores junto a un canal de Burano',intro:'Una isla para caminar despacio, mirar los reflejos y quedarse un rato más. Hoy, todo el tiempo es para Burano.',note:'Sin excursiones a Murano ni Torcello. Los barcos pueden hacer paradas intermedias; no hay visitas programadas en esas islas.',routeIds:['hotel-nove','nove-burano','burano-walk','burano-nove','nove-hotel'],events:[
  {time:'08:30–09:20',start:510,end:560,title:'Desayuno antes de zarpar',kind:'food',status:'planned',text:'Desayuno tranquilo. Llevar billetes, abrigo y batería suficiente para mapas y fotografías.'},
  {time:'09:25',start:565,end:590,title:'Hacia Fondamente Nove',kind:'walk',status:'planned',text:'Desde Hotel Riva, caminar 15–20 minutos por Campo Santi Giovanni e Paolo hasta Fondamente Nove A.',routes:['hotel-nove']},
  {time:'10:00–10:41',start:600,end:641,title:'La laguna, rumbo a Burano',kind:'boat',status:'planned',text:'Referencia de la tabla oficial consultada: salida 10:00 y llegada 10:41. Revalidar el servicio de invierno antes del 10/11.',transport:{company:'ACTV',line:'12',from:'Fondamente Nove · A',direction:'Burano / Treporti',off:'Burano · C (referencia)',duration:'41 min publicados + margen',reference:'Sustituye la hipótesis inicial 10:10 → 10:50. La tabla enlazada está fechada el 22/04/2026; comprobar cambios de invierno.'},details:['El plan inicial proponía 10:10 → 10:50. La tabla oficial consultada permite planificar 10:00 → 10:41, sujeto a cambios.','Tomar un servicio que llegue a Burano; comprobar dirección y parada en el panel.'],routes:['nove-burano'],sources:['actv12','actv']},
  {time:'11:00–13:00',start:660,end:780,title:'Perderse entre los colores',kind:'walk',status:'planned',text:'Burano por libre: plaza Baldassarre Galuppi, casas de colores, canales y pequeños puentes, Tre Ponti, tiendas locales y rincones para fotografiar.',details:['Sin guía ni visitas obligatorias. La ruta enlazada une embarcadero, plaza Galuppi y Tre Ponti; desviarse forma parte del paseo.'],routes:['burano-walk']},
  {time:'13:00–14:30',start:780,end:870,title:'Una pausa en la isla',kind:'food',status:'planned',text:'Almuerzo en Burano, sin reserva. Dejar tiempo para sentarnos y disfrutar.'},
  {time:'14:30–15:10',start:870,end:910,title:'Los últimos reflejos',kind:'walk',status:'planned',text:'Último paseo antes de acercarnos al embarcadero. Llegar con margen al barco elegido.'},
  {time:'15:32–16:13',start:932,end:973,title:'De vuelta a Venecia',kind:'boat',status:'planned',text:'Referencia de la tabla oficial consultada: Burano C 15:32 → Fondamente Nove A 16:13. Revalidar antes de viajar.',transport:{company:'ACTV',line:'12',from:'Burano · C (referencia)',direction:'Venezia · Fondamente Nove',off:'Fondamente Nove · A',duration:'41 min publicados + margen',reference:'Actualiza el plan inicial 15:25 → 16:05. Comprobar el horario de invierno y el pontón.'},details:['La tabla enlazada, en vigor desde el 22/04/2026, muestra 15:32 → 16:13. No es una salida garantizada para noviembre.','Comprobar el pontón, el sentido y los minutos de salida en la tabla de invierno.','No utilizar el barco hacia Treporti. La ruta de Maps es una ayuda; seguir las instrucciones de ACTV.'],routes:['burano-nove'],sources:['actv12','actv']},
  {time:'16:13–16:35',start:973,end:995,title:'Volver a nuestro rincón',kind:'walk',status:'planned',text:'Regreso a pie al Hotel Riva, unos 15–20 minutos. Ajustado desde la franja inicial 16:05–16:30; flexible según la llegada real del barco.',routes:['nove-hotel']},
  {time:'Desde 16:35',start:995,end:1380,title:'Descanso y cena libre',kind:'food',status:'planned',text:'Sin más excursiones. Descanso y noche a nuestro ritmo. La hora de descanso se desplaza unos minutos respecto al plan inicial de las 16:30.'}
 ]},
 {id:4,date:'2026-11-11',weekday:'Miércoles',day:'11',title:'Arrivederci, Venezia',places:'Acqua Alta · Último paseo · Regreso',image:'acquaalta',alt:'Libros apilados en la Librería Acqua Alta de Venecia',intro:'Libros, un último café y una despedida por el agua. El regreso, con tiempo para llevarnos la ciudad un poco más lejos.',note:'Prioridad del día: estar en la terminal hacia las 13:00–13:30 para el vuelo de las 16:00. Revisar Alilaguna antes de cerrar el check-out.',routeIds:['hotel-acqua','acqua-hotel','hotel-alilaguna','alilaguna-vce'],events:[
  {time:'08:30–09:15',start:510,end:555,title:'Nuestro último desayuno',kind:'food',status:'planned',text:'Preparar las maletas y confirmar la hora de salida y recogida del equipaje.'},
  {time:'09:20',start:560,end:570,title:'Camino de Acqua Alta',kind:'walk',status:'planned',text:'Paseo desde Hotel Riva hacia la librería. Trayecto corto; prever unos 5–10 minutos.',routes:['hotel-acqua']},
  {time:'09:30–10:00',start:570,end:600,title:'Una librería fuera del tiempo',kind:'book',status:'planned',text:'Visita gratuita a Librería Acqua Alta: libros en góndolas, rincones curiosos y la escalera de libros, si está accesible.',details:['No comprar entrada. Horario de apertura y acceso del 11/11 por comprobar; si está cerrada, continuar con el café y el paseo.','La accesibilidad a la escalera depende de las condiciones y de las indicaciones del establecimiento.']},
  {time:'10:00–10:45',start:600,end:645,title:'Un café para recordar',kind:'food',status:'planned',text:'Café y último paseo por las calles próximas al hotel, sin alejarnos demasiado.',routes:['acqua-hotel']},
  {time:'10:45–11:30',start:645,end:690,title:'Hotel, equipaje y check-out',kind:'hotel',status:'planned',text:'Recoger las maletas y realizar el check-out. La consigna y las instrucciones de salida deben estar confirmadas con el hotel.'},
  {time:'11:30–11:45',start:690,end:705,title:'Rialto, esta vez hacia casa',kind:'walk',status:'planned',text:'Caminar con las maletas hasta Alilaguna Rialto, en Riva del Carbon. Buscar el rótulo ALILAGUNA; no confundirlo con ACTV.',routes:['hotel-alilaguna']},
  {time:'12:01–12:56',start:721,end:776,title:'Despedir Venecia desde el agua',kind:'boat',status:'planned',text:'Referencia de la tabla oficial de invierno: Rialto 12:01 → aeropuerto 12:56. Revalidar para el miércoles 11 antes de comprar.',transport:{company:'ALILAGUNA',line:'Naranja',from:'Rialto · Riva del Carbon',direction:'Aeroporto Marco Polo',off:'Aeroporto Marco Polo · embarcadero',duration:'55 min publicados',reference:'Sin transbordos, con paradas intermedias. Horario publicado desde el 28/10/2026; no es una reserva.'},details:['Se sustituye «alrededor de las 12:00» por la referencia publicada 12:01. Llegar al pontón antes de las 11:45.','El servicio anterior de referencia es 11:31 → 12:26; si se elige, adelantar la recogida de equipaje y la salida del hotel.','Si la salida de 12:01 cambia, elegir una anterior que permita llegar a la terminal hacia las 13:00–13:30. No contar con el siguiente barco sin recalcular el margen.'],routes:['alilaguna-vce'],sources:['alilaguna','aranciopdf','avvisi']},
  {time:'13:00–13:30',start:780,end:810,title:'Del embarcadero a la terminal',kind:'walk',status:'planned',text:'Añadir unos 10–15 minutos de paseo con las maletas desde el embarcadero. Objetivo: terminal hacia las 13:00–13:30; seguir señalización del aeropuerto.'},
  {time:'16:00',start:960,end:960,title:'Vuelo de regreso',kind:'plane',status:'planned',text:'Salida desde Venecia Marco Polo (VCE). Horario facilitado por los viajeros; comprobar terminal, facturación, equipaje y hora límite con la aerolínea.'}
 ]}
];
/* Resumen del inicio. Las horas se leen del evento para mantenerlas sincronizadas.
   event es la posición de la actividad dentro de events (empezando por cero). */
window.DAY_OVERVIEWS=[
 {dayId:1,title:'Llegada, Salute y Zattere',items:[
  {event:0,label:'Llegada a Treviso'},
  {event:2,label:'Primer paseo por el Gran Canal en vaporetto'},
  {event:4,label:'Comida y descanso, sin prisas',free:true},
  {event:5,label:'Salute, Punta della Dogana y Zattere por libre'},
  {event:6,label:'Aperitivo, cena y noche a nuestro ritmo',free:true}
 ]},
 {dayId:2,title:'San Marcos, Accademia y góndola',items:[
  {event:2,label:'Basílica de San Marcos y Palacio Ducal'},
  {event:3,label:'Almuerzo por Campo Santo Stefano'},
  {event:4,label:'Puente de la Accademia y fotografías'},
  {event:6,label:'Góndola privada por canales tranquilos'},
  {event:7,label:'Aperitivo, paseo y cena sin horarios',free:true}
 ]},
 {dayId:3,title:'Burano, sin prisas',items:[
  {event:2,label:'Vaporetto hacia Burano'},
  {event:3,label:'Casas de colores, canales y Tre Ponti por libre',free:true},
  {event:4,label:'Almuerzo en la isla'},
  {event:5,label:'Último paseo por Burano',free:true},
  {event:6,label:'Barco de regreso a Venecia'},
  {event:8,label:'Descanso y cena libre',free:true}
 ]},
 {dayId:4,title:'Acqua Alta y despedida',items:[
  {event:2,label:'Librería Acqua Alta'},
  {event:3,label:'Café y último paseo cerca del hotel',free:true},
  {event:4,label:'Recoger maletas y check-out'},
  {event:6,label:'Alilaguna hacia Marco Polo'},
  {event:8,label:'Vuelo de regreso'}
 ]}
];
window.CHECKLIST=[
 'Confirmar check-in, acceso y consigna del Hotel Riva',
 'Comprar el traslado ATVO desde Treviso',
 'Revisar el tiempo y salir a las 15:15 hacia Dorsoduro',
 'Reservar Basílica y Palacio Ducal con entradas y guía en español',
 'Confirmar recorrido, hora y precio de la góndola privada',
 'Revisar horarios de invierno ACTV para Burano, ida y vuelta',
 'Preparar Alilaguna a Marco Polo y revalidar salida de las 12:01',
 'Revisar documentación, equipaje, billetes y batería'
];
window.BUDGET_DEFAULTS={transport:121,sanmarco:170,gondola:90,food:473,other:60};
