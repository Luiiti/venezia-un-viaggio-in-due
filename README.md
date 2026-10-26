# Venezia, un viaggio in due

Guía personal para dos adultos · Venecia, 8–11 noviembre 2026.

Guía alojada en un repositorio independiente: [Luiiti/venezia-un-viaggio-in-due](https://github.com/Luiiti/venezia-un-viaggio-in-due). Publicación mediante GitHub Pages: [abrir la guía](https://luiiti.github.io/venezia-un-viaggio-in-due/).

No se han hecho reservas ni compras. Este proyecto tiene su propia dirección y no utiliza los repositorios ni los dominios de las bodas.

## Abrirla en este ordenador

En Windows, puedes hacer doble clic en **`Abrir-guia.cmd`** y mantener abierta su ventana. Utiliza Node instalado o el runtime local de este ordenador si está disponible. Si el navegador abre antes que el servidor, recarga una vez.

También puedes abrir una terminal en esta carpeta y ejecutar:

```powershell
node tools/serve.mjs
```

Después abre [la vista local](http://127.0.0.1:4187/). Requiere Node.js, sin instalación de paquetes. El servidor escucha únicamente en este ordenador. Para cerrarlo, pulsa Ctrl+C en su terminal. Si el puerto está ocupado, el servidor falla sin modificar el servicio existente; utiliza otro puerto con la variable `PORT`.

También puedes abrir `index.html` como archivo para consultar la interfaz y sus enlaces; la instalación y la copia sin conexión requieren HTTPS o el servidor local. Para un uso completo, utiliza el servidor.

## Llevarla al iPhone y compartirla por WhatsApp

1. Abre [la guía publicada](https://luiiti.github.io/venezia-un-viaggio-in-due/) en Safari en el iPhone.
2. Para compartirla, copia esa dirección HTTPS en WhatsApp.
3. En la guía, entra en **Información → Guardar → Preparar consulta sin conexión**. Espera al mensaje «Guía guardada».
4. En Safari, pulsa **Compartir → Añadir a pantalla de inicio**. Si aparece, activa «Abrir como app web».
5. Comprueba que puedes cerrar, abrir y consultar las cuatro jornadas en modo avión. Después vuelve a activar la conexión.
6. Pulsa el icono de compartir de la guía y elige WhatsApp, o pega la dirección HTTPS en el chat. «Copiar el día» permite compartir también un resumen con sus rutas.

La dirección `127.0.0.1` es solo de este ordenador: no sirve como enlace para otro teléfono. La guía local lo explica al pulsar Compartir y no crea un enlace falso.

Guarda además `Venezia-guia.pdf` en Archivos. El PDF entregado tiene 14 páginas y usa los importes iniciales. «Imprimir con mis importes» genera una versión desde el navegador con tu presupuesto actualizado.

Referencia: [instrucciones de Apple para añadir una web a la pantalla de inicio](https://support.apple.com/es-es/guide/iphone/iphea86e5236/ios).

## Publicar en Cloudflare Pages

Para este proyecto estático no hay compilación ni variables secretas.

1. En tu cuenta de Cloudflare, crea un proyecto nuevo de Pages mediante **Direct Upload**.
2. Usa la carga de una carpeta o ZIP. En la raíz de lo que subas deben estar `index.html`, `sw.js`, `data/` y `assets/`; evita una carpeta envolvente adicional.
3. Revisa el nombre del proyecto y confirma el despliegue cuando quieras publicar. Ese paso hace accesible la guía por Internet.
4. Abre la dirección HTTPS que te entregue Cloudflare y prueba una jornada, el presupuesto y la copia sin conexión desde el iPhone.

`_headers` incluye tipos de seguridad básicos y evita conservar un service worker antiguo por caché HTTP. No se configura ningún dominio ni servicio existente.

[Documentación oficial: Direct Upload](https://developers.cloudflare.com/pages/get-started/direct-upload/).

## Publicar en GitHub Pages

1. Crea un repositorio nuevo e independiente. Para GitHub Free, utiliza un repositorio público.
2. Sube el contenido de esta carpeta a la raíz de la rama `main`, incluyendo `.nojekyll`.
3. En **Settings → Pages → Build and deployment**, elige **Deploy from a branch**, `main`, `/(root)` y guarda cuando quieras publicar.
4. Espera al despliegue y utiliza la dirección HTTPS mostrada por GitHub. No se ha creado ninguna dirección de ejemplo que se presente como real.

La aplicación utiliza rutas relativas para poder funcionar también bajo el nombre de un repositorio. GitHub Pages publica la web en Internet; un repositorio privado no equivale a una web privada.

[Documentación oficial de la fuente de publicación](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Actualizar horas, ubicaciones o reservas

- **`data/itinerary.js`**: jornadas, horas, actividades, instrucciones, lista y presupuesto inicial. `DAY_OVERVIEWS` contiene las listas breves del inicio, incluidos los ratos libres; toma las horas de sus actividades para mantenerlas sincronizadas. `time` es el texto visible; `start` y `end` son minutos desde medianoche para validar el orden. Todos los horarios se expresan en `Europe/Rome`.
- **`data/places.js`**: ubicaciones y 21 rutas. Se utilizan URL oficiales de Google Maps con parámetros codificados. Las rutas del hotel y «Volver al hotel» llevan el identificador de lugar `ChIJqVHbStixfkcRvkWxpL81in8`, contrastado con el mapa de la web oficial del Hotel Riva | BZAR hotels (C. va al Ponte de l’Anzolo, 5310, 30122 Venezia VE, Italy). El marcador del hotel usa ese punto; los demás son orientativos. Los tiempos a pie son estimados.
- **`data/sources.js`**: referencias oficiales y fecha de consulta. Se mantienen separadas del itinerario.
- **`assets/photo-credits.json` y `.js`**: autoría, licencia y origen de cada fotografía; conservarlos al redistribuir.
- **`styles.css` / `app.js`**: interfaz principal.
- **`print.css` / `print.js` / `print.html`**: edición para imprimir, generada desde los mismos datos.

Estados: `planned`, `pending` y `confirmed`. Una actividad `confirmed` necesita una propiedad `evidence` no vacía con sus datos acreditados. El comprobador rechaza confirmaciones sin evidencia. Añade el punto de encuentro solo cuando lo tengas.

Después de editar datos o recursos, ejecuta:

```powershell
node tools/build-offline.mjs
node tools/check.mjs
```

Así se genera una nueva versión de la copia sin conexión y se comprueban fechas, orden, solapamientos, reservas y rutas. Revisa también la vista para imprimir y vuelve a guardar el PDF si has cambiado el itinerario; el archivo PDF no se regenera solo al publicar.

En el móvil, vuelve a abrir la guía con conexión después de un cambio y recarga para obtener la actualización. La caché está aislada por la dirección y la carpeta de esta guía.

## Datos que requieren confirmación

- Hotel: acceso exacto, check-in virtual, entrada temprana y consigna.
- Tour de San Marcos en español: precio, entradas incluidas, punto de encuentro y reserva.
- Día 8: paseo exterior por Dorsoduro, Salute, Punta della Dogana y Zattere, de 15:15 a 17:15 aproximadamente. Sin guía ni entradas; revisar el tiempo. Sustituye al tour del barrio judío y reduce la estimación inicial a 914 € para dos.
- Góndola privada: disponibilidad de las 16:00, recorrido por canales estrechos y precio.
- ATVO: salidas 11:00 o 11:20 consultadas, sujetas a cambios de vuelos y servicio.
- ACTV 1: se corrige Piazzale Roma **D → F** como referencia; seguir paneles.
- ACTV 12: la tabla oficial enlazada, fechada el 22/04/2026, da **10:00 → 10:41** y **15:32 → 16:13**. Sustituyen las hipótesis iniciales de 10:10 y 15:25. Revalidar los horarios de invierno. El regreso al hotel se desplaza hasta aproximadamente las 16:35.
- Alilaguna: referencia de regreso publicada desde el 28/10/2026: **Rialto 12:01 → aeropuerto 12:56**, más el paseo a la terminal. Revalidar el servicio del 11/11 antes de comprar. No hay un billete reservado.
- Librería Acqua Alta: comprobar apertura y acceso el día 11. No se propone comprar entrada.
- Vuelos: datos de los viajeros; revisar con la aerolínea.

Fuentes enlazadas dentro de la guía, en el PDF y en `data/sources.js`. Consulta manual: **26 octubre 2026**. Ningún transporte se presenta como servicio en tiempo real.

## Alcance sin conexión y privacidad

La copia sin conexión incluye interfaz, las cuatro jornadas, fotografías, tipografías e instrucciones. Los mapas de calles, Google Maps, las webs de operadores y el envío por WhatsApp requieren Internet. No se guardan teselas de OpenStreetMap ni páginas externas.

El presupuesto y la lista se guardan en `localStorage`, solo en el navegador actual. No hay servidor de datos, analítica ni sincronización entre teléfonos. Borrar los datos del navegador elimina los cambios; Safari puede liberar la caché. Marcar un preparativo no cambia el estado de una reserva.

El mapa solicita teselas a OpenStreetMap al abrirse; los enlaces externos llevan a sus respectivos proveedores. No hay claves API ni dependencias de pago.

## Verificación incluida

Consulta `VERIFICACION.md`. Se ha probado en Chromium/Edge con pantallas móviles de 375, 390 y 430 píxeles, interacción táctil y zona horaria de Venecia. No se ha probado en un iPhone físico ni se afirma una validación real de Safari iOS. Se incluyen áreas seguras, `svh`, campos de 16 px para evitar zoom de edición, controles táctiles y movimiento reducido.

Fotografías, fuentes y librería de mapas incluidas localmente. Licencias completas de tipografía y Leaflet, y créditos individuales en `LICENCIAS.md`.
