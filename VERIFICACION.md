# Comprobación de la entrega

Fecha: 26 octubre 2026. Proyecto independiente publicado mediante GitHub Pages en [Luiiti/venezia-un-viaggio-in-due](https://github.com/Luiiti/venezia-un-viaggio-in-due).

## Publicación comprobada

- Web: https://luiiti.github.io/venezia-un-viaggio-in-due/ · HTTPS y despliegue de GitHub Pages completado correctamente.
- Los 46 archivos del repositorio coinciden con los archivos locales revisados, comparando sus hashes de Git sin conversión de finales de línea.
- En la web pública: cuatro resúmenes diarios, siete bloques de tiempo libre, fotografías cargadas y ausencia de desbordamiento horizontal en la vista comprobada.
- «Volver al hotel» apunta al Hotel Riva | BZAR hotels y conserva su identificador único de Google Maps.
- La sección Guardar confirma la copia preparada en el navegador del dominio público. El PDF, el service worker y el manifiesto responden con HTTP 200 y su tipo de contenido correcto.
- Repositorio y ruta de publicación propios; no se han modificado los proyectos de las bodas.

## Pruebas realizadas

- Aplicación ejecutada mediante HTTP local, con respuestas correctas de sus recursos.
- 36 combinaciones de pantalla: 12 vistas a 375, 390 y 430 píxeles, con modo táctil, zona horaria `Europe/Rome` y preferencia de movimiento reducido.
- Portada, itinerario, cuatro jornadas, mapa, información, preparativos, presupuesto, guardado y fuentes inspeccionados mediante capturas.
- Inicio ampliado con cuatro listas breves (8, 9, 10 y 11), horas leídas de las actividades, ratos libres destacados y enlaces al detalle de cada jornada.
- Sin desbordamiento horizontal, imágenes rotas ni errores de consola en las pruebas finales.
- Navegación de portada a índice y jornadas; selectores; expansión de instrucciones; consulta rápida; filtros de mapa; lista de puntos; compartir desde una vista local con explicación real.
- Las 21 URL de rutas usan el formato oficial de Google Maps. Comprobados origen, destino, codificación, modo y puntos intermedios. «Volver al hotel» omite el origen para que Maps utilice la posición disponible.
- Hotel: identificador de Google Maps `ChIJqVHbStixfkcRvkWxpL81in8` y punto 45.4359774, 12.3400347 contrastados con el mapa incrustado en la web oficial del Hotel Riva | BZAR hotels, C. va al Ponte de l’Anzolo, 5310, 30122 Venezia VE, Italy. Se utiliza en la ficha, el botón permanente y todas las rutas desde o hacia el hotel.
- Presupuesto inicial tras sustituir el tour del barrio judío por Dorsoduro: 914 €. Migración comprobada con un presupuesto anterior: se elimina la antigua partida del tour y se conservan San Marcos a 180 € y góndola a 100 €, con total 934 €. La impresión refleja el mismo total.
- Casillas de preparativos: persistencia comprobada tras recargar.
- «Mi día» comprobado antes, durante y después del viaje; también al cambiar de día en Venecia mientras todavía es el día anterior en UTC.
- Cuatro jornadas validadas por fecha, orden cronológico y ausencia de solapamientos numéricos. Los desplazamientos condicionados por el servicio se identifican como referencias flexibles.
- Sin reservas confirmadas sin evidencia. Tour de San Marcos y góndola pendientes. El paseo exterior por Dorsoduro es gratuito y no requiere reserva.
- Service worker: recarga y navegación sin conexión verificadas; fotografías, datos y fuentes tipográficas locales. Al quedar sin conexión, el mapa ofrece la lista y explica el límite.
- Mapa Leaflet con marcadores y filtros por día comprobado. Animaciones del mapa desactivadas para evitar errores al cambiar rápidamente de pantalla.
- PDF de 14 páginas renderizado a imágenes e inspeccionado. Enlaces activos, fuentes incrustadas, páginas numeradas, programa e instrucciones separados por jornada. Sin páginas vacías ni cortes de tablas.
- Vista de escritorio comprobada a 1440 píxeles.
- Recursos y caché preparados con rutas relativas, compatibles con alojamiento en una subcarpeta. La caché se identifica por la dirección y carpeta de esta guía, sin borrar cachés de otras aplicaciones.

## Límites de lo comprobado

La simulación de tamaños de iPhone se ha realizado con Chromium/Edge en Windows. No equivale a una prueba en Safari ni en un iPhone físico. El código incluye áreas seguras, `viewport-fit=cover`, `svh`, diseño táctil y movimiento reducido; realizar la comprobación final en el iPhone después de alojar la guía.

Las URL de Maps son enlaces reales y válidos en su estructura. No se afirma haber recorrido a pie los trayectos ni haber comprobado todos los resultados del motor de rutas en el teléfono. Los nombres, sentidos y líneas de transporte se muestran por separado para evitar depender de sus sugerencias.

La revisión de horarios es manual y no es un servicio en tiempo real. Los operadores pueden cambiar horarios, pontones y servicios. Los tiempos a pie y los marcadores son orientativos. El acceso al hotel y los puntos de encuentro de tours requieren confirmación.

No se han hecho reservas, comprado entradas ni guardado rutas en una cuenta de Google. La copia sin conexión se debe preparar y probar en cada teléfono; Safari puede eliminar almacenamiento.

## Repetir la comprobación de datos

```powershell
node tools/build-offline.mjs
node tools/check.mjs
```

Estos comandos no publican ni contactan con cuentas externas. Las pruebas de navegador realizadas durante el desarrollo no requieren instalarse para utilizar la guía.
