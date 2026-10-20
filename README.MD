# Documentación técnica de la pagina web
## Último Refugio — Dashboard interactivo de Left 4 Dead

**Tipo de aplicación:** Página web estática con interacciones en JavaScript  
**Tecnologías principales:** HTML5, CSS3 y JavaScript  
**Contenido:** Juegos, supervivientes, infectados especiales y campañas


## 1. Introducción

Último Refugio es una página web inspirada en el universo de los videojuegos *Left 4 Dead* y *Left 4 Dead 2*. Su propósito es reunir en un mismo lugar información visual y descriptiva relacionada con los juegos, sus supervivientes, los infectados especiales y las campañas. La interfaz se plantea como un panel táctico: utiliza un fondo oscuro, elementos visuales de ambiente apocalíptico, tarjetas informativas y controles que permiten explorar el contenido sin tener que recorrer una página completamente textual.

El proyecto no se limita a mostrar imágenes. Incluye interacciones programadas con JavaScript, como filtros por videojuego, ventanas modales para ampliar información, navegación por una galería de campañas, controles de audio y cambios de apariencia. De esta manera, el usuario puede consultar diferentes partes del sitio mediante acciones sencillas.

## 2. Planteamiento y objetivos

### Objetivo general

Desarrollar una página web temática e interactiva que organice contenido de *Left 4 Dead* y *Left 4 Dead 2* mediante una interfaz visual coherente, permitiendo consultar personajes y campañas de manera clara y dinámica.

### Objetivos específicos

- Estructurar el contenido semántico y las secciones de la página mediante HTML.
- Aplicar estilos visuales con CSS para diferenciar los apartados y mantener una identidad gráfica de supervivencia.
- Utilizar JavaScript para crear tarjetas, aplicar filtros y mostrar información adicional en ventanas modales.
- Incorporar recursos multimedia, como imágenes de campañas, videos y audio ambiental.
- Facilitar la navegación mediante un menú, botones y controles de galería.
- Mantener el código distribuido en archivos separados para facilitar futuras modificaciones.

## 3. Alcance y descripción general

La página se organiza en secciones que cumplen funciones distintas. La zona de juegos presenta las dos entregas de la saga; el panel táctico ofrece indicadores visuales del contenido; las secciones de supervivientes e infectados muestran fichas individuales; y el apartado de campañas permite recorrer pósteres o imágenes asociados a distintas misiones. También se incorporan una pantalla de bienvenida relacionada con el refugio y controles para modificar ciertos aspectos de la experiencia.

Los números y porcentajes que aparecen en el panel deben entenderse como elementos informativos de la interfaz. En la estructura revisada no se identifican como estadísticas que se actualicen desde una base de datos o desde un servicio externo en tiempo real.

## 4. Tecnologías utilizadas

### HTML5

Define la estructura principal de la página. Sus elementos organizan encabezados, navegación, secciones, botones, tarjetas, ventanas modales y zonas destinadas a mostrar contenido multimedia. El HTML sirve como base sobre la que se aplican los estilos y la lógica interactiva.

### CSS3

Controla la presentación visual. Permite definir colores, fondos, tamaños, bordes, sombras, efectos de brillo, animaciones y transiciones. También ayuda a mantener una apariencia consistente entre las diferentes secciones. Las reglas de estilo pueden modificarse para cambiar el aspecto general sin reescribir la lógica JavaScript.

### JavaScript

Proporciona comportamiento a los controles de la página. Se utiliza para gestionar los datos de personajes y campañas, generar tarjetas, filtrar elementos, abrir o cerrar ventanas modales, recorrer imágenes y activar ciertos modos visuales. Al separar estas funciones en archivos, resulta más sencillo localizar el código responsable de cada comportamiento.

### Recursos multimedia

El proyecto incluye imágenes de campañas, una imagen relacionada con el refugio, archivos de video para las entregas de los juegos y un archivo de audio ambiental. Estos recursos refuerzan la ambientación, aunque su funcionamiento depende de que las rutas y los nombres de archivo se mantengan correctos.

## 5. Organización de carpetas y archivos

webgit-master/
├── README.MD
├── index.html
├── assets/
│   ├── campanas/       # Imágenes de las campañas
│   └── refugio/        # Recurso visual del refugio
├── audio/
│   └── intro.mp3       # Audio ambiental
├── css/
│   ├── estilos.css     # Apariencia visual
│   └── Videos/
│       ├── left4dead1.mp4
│       └── left4dead2.mp4
└── js/
    ├── main.js         # Personajes e interacciones principales
    ├── campanas.js     # Datos y galería de campañas
    └── experiencia.js  # Pantalla inicial y efectos de navegación


Esta organización separa las responsabilidades. La carpeta `assets` contiene recursos gráficos, `audio` agrupa el archivo de sonido, `css` mantiene los estilos y `js` contiene la programación interactiva. El archivo `index.html` conecta las distintas partes y actúa como punto de entrada del sitio. Si se cambia el nombre o la ubicación de un recurso, también se debe actualizar la ruta que lo referencia en el código.

## 6. Explicación de los archivos principales

### `index.html`

Es el documento que el navegador interpreta para construir la página. Contiene la estructura de las secciones y los elementos con los que interactúa el visitante. También enlaza las hojas de estilo y los scripts JavaScript. Si se desea cambiar el orden de las secciones o agregar un nuevo apartado, normalmente se comienza revisando este archivo.

### `css/estilos.css`

Define la identidad visual del sitio: colores, fondos, tipografía, espaciados, tarjetas, botones, ventanas y animaciones. Por ejemplo, un cambio de color para diferenciar supervivientes e infectados se realizaría en las reglas CSS que controlan sus tarjetas y estados. Mantener los estilos en un archivo separado evita mezclar la presentación con los datos y las funciones.

### `js/main.js`

Concentra buena parte de la lógica principal. Incluye datos de los supervivientes y de los infectados, la generación de sus tarjetas, los filtros por juego y la apertura de ventanas con información ampliada. También contiene funciones relacionadas con mensajes rotativos, modos de emergencia y control de música ambiental.

### `js/campanas.js`

Organiza la información de las campañas y administra la galería. Sus funciones permiten filtrar campañas según el juego, seleccionar una para mostrar sus detalles y desplazarse entre elementos usando controles anterior y siguiente. Las imágenes asociadas se cargan desde la carpeta de recursos correspondiente.

### `js/experiencia.js`

Gestiona elementos de la experiencia inicial, incluida la pantalla del refugio, las acciones para entrar o saltar esa introducción, la barra que indica el avance del desplazamiento y los efectos que aparecen cuando una sección entra en pantalla. También contempla la preferencia del dispositivo por reducir las animaciones.

### `README.MD`

Sirve como archivo de orientación del proyecto. Puede describir el objetivo, las tecnologías y la estructura, ayudando a otra persona a entender la organización del sitio antes de modificarlo.

## 7. Descripción detallada de las secciones

### 7.1. Pantalla de bienvenida: Último Refugio

La pantalla inicial introduce al visitante en la temática del refugio. Presenta una entrada visual antes de mostrar el contenido principal y ofrece controles para continuar o saltar la introducción. La lógica se encuentra en `experiencia.js`. Este tipo de pantalla funciona como una presentación de la identidad del sitio; debe permitir que el usuario avance de forma clara y sin quedar bloqueado.

### 7.2. Menú de navegación

El menú permite ir directamente a las principales zonas del sitio: juegos, supervivientes, infectados y campañas. La navegación por secciones reduce la necesidad de buscar manualmente el contenido. Además, hay controles adicionales para activar la visión nocturna y gestionar la música ambiental. Es importante que los botones tengan nombres claros y que su aspecto permita reconocer cuándo están activos.

### 7.3. Sección de juegos

La página presenta *Left 4 Dead* y *Left 4 Dead 2*, identificando ambas entregas por separado. En esta sección existen controles vinculados a sus tráileres o videos. Para que la reproducción funcione correctamente, los archivos deben estar en las rutas esperadas y el navegador debe poder acceder a ellos. Esta sección contextualiza el contenido que aparece posteriormente en las fichas de personajes y campañas.

### 7.4. Panel táctico

El panel presenta indicadores como la cantidad de supervivientes e infectados incluidos, un porcentaje de infección y la compatibilidad con las dos entregas. Estos elementos tienen una función visual: permiten reconocer rápidamente el contenido que ofrece el sitio. Si en el futuro se desea que los valores cambien automáticamente, sería necesario conectarlos a una fuente de datos o calcularlos a partir de los registros reales del proyecto.

### 7.5. Sección de supervivientes

El apartado reúne ocho supervivientes: Bill, Zoey, Louis y Francis, asociados al primer juego; y Coach, Ellis, Nick y Rochelle, asociados a la segunda entrega. Los personajes aparecen en tarjetas que permiten reconocerlos por su nombre e imagen. Los filtros permiten mostrar todos los registros o seleccionar los que pertenecen a una de las entregas. Al pulsar una tarjeta se abre un modal con información complementaria, lo que evita tener que mostrar todos los detalles desde el principio y mantiene ordenada la presentación.

### 7.6. Sección de infectados especiales

La sección incluye ocho infectados especiales: Tank, Witch, Hunter, Smoker, Boomer, Charger, Jockey y Spitter. Cada tarjeta resume su identidad y su amenaza dentro del juego. Al seleccionar una ficha se puede consultar información más amplia, como la habilidad o descripción del infectado, además de etiquetas informativas. Visualmente, esta sección puede distinguirse de la de supervivientes mediante tonos rojos u otros recursos gráficos, manteniendo una estructura de tarjetas coherente para facilitar la comparación.

### 7.7. Galería de campañas

El proyecto contiene catorce campañas: No Mercy, Crash Course, Death Toll, Dead Air, Blood Harvest, The Sacrifice, Dead Center, The Passing, Dark Carnival, Swamp Fever, Hard Rain, The Parish, Cold Stream y The Last Stand. El usuario puede aplicar filtros según la entrega del juego, seleccionar una campaña para consultar su información y recorrer los elementos con los botones anterior y siguiente. Las imágenes se encuentran en `assets/campanas/`. Para que la galería se muestre correctamente, las rutas deben coincidir con los nombres reales de las imágenes.

### 7.8. Modos de emergencia y audio

El control de visión nocturna cambia la apariencia de la interfaz entre los modos visuales disponibles, incluidos el modo normal, la visión nocturna y la alerta CEDA. Estos cambios se aplican como parte de la experiencia temática y no representan una función real de visión nocturna del dispositivo. Por otra parte, el control de audio administra la música ambiental desde `audio/intro.mp3`. Algunos navegadores bloquean la reproducción automática, por lo que puede ser necesario que el usuario pulse el control para iniciar el sonido.

## 8. Diseño visual y experiencia de usuario

El diseño utiliza una estética oscura y táctica que recuerda a los ambientes de supervivencia de la saga. Los contrastes ayudan a separar las secciones y las tarjetas organizan el contenido en unidades pequeñas y fáciles de revisar. Los efectos de brillo, las transiciones y las animaciones aportan respuesta visual cuando se interactúa con los elementos. Los modales permiten mostrar información adicional sin llevar al visitante a otra página.

La experiencia también debe considerar aspectos prácticos: los controles necesitan ser fáciles de identificar, el texto debe tener suficiente contraste y las imágenes deben conservar una presentación adecuada en distintas resoluciones. La compatibilidad con la preferencia de movimiento reducido es positiva, ya que limita ciertas animaciones para usuarios que han indicado esa preferencia en su sistema.

## 9. Instalación y ejecución

Para probar el proyecto localmente, primero se debe extraer el archivo ZIP completo. Después, se debe conservar la estructura de carpetas para que las rutas relativas de imágenes, videos, audio, estilos y scripts sigan funcionando. El archivo de entrada es `index.html`, que puede abrirse desde un navegador actualizado. Si alguna función multimedia no funciona al abrirlo directamente, se recomienda utilizar un servidor local sencillo.

Una vez cargada la página, se recomienda comprobar de manera ordenada:

1. La apertura de la pantalla inicial.
2. Los enlaces del menú.
3. Los filtros de personajes.
4. La apertura y cierre de los modales.
5. Los filtros y botones de la galería.
6. Los modos visuales.
7. El control de audio.

También conviene revisar la consola del navegador si algún elemento no aparece, porque puede indicar una ruta incorrecta o un error de JavaScript.

## 10. Pruebas y mantenimiento

Las pruebas deben comprobar tanto la presentación como el comportamiento. En la parte visual se revisan tamaños, alineación, contraste y adaptación a pantallas pequeñas. En la parte funcional se verifica que cada botón realice la acción indicada, que los filtros muestren los elementos esperados y que las ventanas modales puedan abrirse y cerrarse. También se deben revisar las rutas de los archivos multimedia y comprobar que no existan errores en la consola.

Como mantenimiento, se recomienda conservar nombres de archivos coherentes, actualizar las rutas cuando se muevan recursos, mantener organizados los datos de personajes y campañas, y probar la página después de cada modificación. Si se utilizan imágenes enlazadas desde páginas externas, estas pueden cambiar o dejar de estar disponibles; por ello, conviene comprobar periódicamente su carga y usar recursos locales cuando corresponda y se disponga de los permisos necesarios.

## 11. Posibles mejoras

El proyecto puede ampliarse incorporando un buscador por nombre, más información sobre cada personaje, etiquetas de dificultad para las campañas, mejoras de accesibilidad para el teclado y descripciones alternativas en las imágenes. También se podría añadir una página de créditos de recursos, optimizar el tamaño de imágenes y videos y guardar preferencias de visualización cuando resulte apropiado.

Si se desea convertirlo en un sistema con información dinámica, se necesitaría diseñar una fuente de datos adicional; esta capacidad no debe darse por existente en la versión actual sin implementarla.

## 12. Conclusión

Último Refugio integra contenidos de *Left 4 Dead* y *Left 4 Dead 2* en una página web que combina presentación visual y funciones interactivas. La división del trabajo entre HTML, CSS y JavaScript permite que la estructura, el diseño y el comportamiento puedan mantenerse por separado. Las secciones de juegos, supervivientes, infectados y campañas facilitan la exploración del contenido, mientras que los modales, los filtros, la galería y los controles de ambiente enriquecen la experiencia de uso.

Además de cumplir una finalidad temática, el proyecto permite aplicar conceptos de desarrollo web: organización de archivos, diseño de interfaces, manipulación de elementos mediante JavaScript, manejo de eventos y uso de recursos multimedia. Con pruebas periódicas y mejoras de accesibilidad, rendimiento y mantenimiento, la página puede seguir creciendo sin perder la coherencia de su diseño.
