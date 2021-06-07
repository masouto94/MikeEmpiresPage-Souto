# OBJETIVO DEL SITIO:

- El sitio tiene por objetivo listar, analizar, y mostrar en un formato fácil de leer los resultados de las simulaciones que hace el youtuber MikeEmpires (https://www.youtube.com/user/MikeAlexBillsZ). La idea es que la página le sirva como plataforma y que incluya funcionalidades interactivas/experimentales

# ESTRUCTURA DEL SITIO:

- La estructura está en el sitemap.xml. El index.html está aparte y las páginas están dentro de /pages. En /media está la foto del header y en /tables los resultados de las tablas generadas a través del PROGRAMA EXTERNO

- Los estilos están en /css/styles.css, el cual se genera a través del compilador SCSS, alojado en /scss. Tiene bootstrap incluido en algunas partes como los nav

- Cada página consta de header, main container (/div), footer y el menu lateral (/nav). civilizations.html no tiene menú lateral. El contacto del footer no va a ningún lado

- El contenido está diagramado con grid y los menúes también tienen flexbox. El grid se ordena con grid-template-areas

- Todas las páginas tienen responsiveness a través de @media query 

# PROGRAMA EXTERNO

- El flujo de trabajo que procesa las tablas de excel crudas tiene varias partes:
	1) Se recibe el excel con las tablas crudas y se genera un .csv por cada test a través de una macro
	2) Se importan los csvs y se procesan a través de un script de python que devuelve las tablas finales
	3) Dentro de las carpetas de las tablas, se hace un script constructor de las páginas que pone la tabla correspondiente en cada página

  El programa se puede subir a github pero actualmente no está subido

# CONTENIDO DEL SITIO:

## Index

- El index es una landing page común. Debería tener siempre el último video subido en "Latest content"

## About

- Acá debería haber información sobre el canal y el creador de contenido. Puede hacerse algo visual o interactivo

## Tests

- Este es el corazón de la página. Acá están todos los tests que me pasó y redirecciona a cada una de las unidades. Acá es donde más hay que cambiarle cosas porque yo quisiera tener interactividad, filtros, dropdowns, etc. Ahora está implementado como una simple lista

## Matchups

- Acá es donde habria que tener un comparador interactivo de unidades, edificios, etc. De esto no tengo nada, pero tendría que ser algo parecido a lo que hay acá https://play.google.com/store/apps/details?id=com.aoedb&hl=en_US&gl=US en Tools. Acá deberían estar las funcionalidades experimentales


## Civilizations

- Es una página que lleva a cada una de las civilizaciones. La idea es completarlo con información disponible en la wikia (https://ageofempires.fandom.com/wiki/Age_of_Empires_II:Portal) pero en una versión minimizada

## Units

- Lo mismo que en Civilizations. Habría que organizar alguna visual para tener información de las clases de unidades y etc. pero todo viniendo de la wikia