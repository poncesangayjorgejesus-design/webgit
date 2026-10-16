# DOCUMENTACIÓN TÉCNICA DE LA PÁGINA WEB
## LEFT 4 DEAD – DASHBOARD INTERACTIVO

## 1. Introducción

El presente proyecto consiste en el desarrollo de una página web interactiva basada en los videojuegos *Left 4 Dead* y *Left 4 Dead 2*. Su finalidad es presentar información sobre los supervivientes y los infectados especiales mediante una interfaz visual organizada y atractiva.

La página incorpora tarjetas con imágenes, filtros de personajes y ventanas modales que permiten consultar información adicional. Además, utiliza un diseño oscuro inspirado en la ambientación de los videojuegos, ofreciendo una experiencia de navegación sencilla para los usuarios.

## 2. Objetivos del proyecto

El objetivo principal es desarrollar una página web que permita visualizar y consultar información de los personajes de *Left 4 Dead* de manera dinámica y ordenada.

Entre los objetivos específicos se encuentran:

- Aplicar HTML para estructurar el contenido de la página.
- Utilizar CSS para mejorar la presentación visual y la distribución de los elementos.
- Implementar JavaScript para añadir interactividad y controlar las funciones del sitio.
- Organizar los personajes en categorías que faciliten su identificación.
- Crear una interfaz intuitiva que permita acceder a la información de manera rápida.

## 3. Tecnologías utilizadas

Para el desarrollo del proyecto se utilizaron tres tecnologías principales que trabajan conjuntamente para construir la página web.

- **HTML5:** permite crear la estructura del sitio, definir las secciones principales y organizar los elementos que se muestran en pantalla.
- **CSS3:** se encarga del diseño visual, los colores, las tarjetas, los efectos de transición, las animaciones y la adaptación de los elementos de la interfaz.
- **JavaScript:** proporciona la funcionalidad interactiva, como la generación de tarjetas, el filtrado de personajes y la apertura y cierre de ventanas modales.

La combinación de estas tecnologías permite desarrollar una página web dinámica sin necesidad de utilizar herramientas complejas para sus funciones principales.

## 4. Estructura de archivos

El proyecto se organiza en diferentes archivos para separar el contenido, el diseño y la programación. Esta distribución facilita el mantenimiento del código y permite realizar modificaciones de manera ordenada.

```text
webgit/
├── index.html
├── css/
│   └── estilos.css
├── js/
│   └── main.js
└── README.MD
```

Cada archivo cumple una función específica dentro del proyecto. El documento HTML constituye la base de la página, la carpeta CSS contiene los estilos visuales y la carpeta JavaScript reúne las funciones encargadas de la interactividad.

## 5. Descripción de los archivos principales

**index.html:** contiene la estructura principal de la página, incluyendo el encabezado, la navegación, el dashboard y las secciones destinadas a mostrar los personajes. También enlaza los archivos de estilos y JavaScript.

**estilos.css:** define la apariencia visual del proyecto mediante colores, tamaños, espacios, fondos, tarjetas y efectos de animación. Su propósito es mantener una presentación coherente con la temática de supervivencia del videojuego.

**main.js:** contiene la lógica que permite generar las tarjetas de los personajes, aplicar filtros y mostrar ventanas modales con información adicional. Este archivo permite que diferentes elementos de la página respondan a las acciones del usuario.

**README.MD:** sirve como archivo de referencia para describir el proyecto, sus características principales y las indicaciones necesarias para comprender su estructura.

## 6. Funcionamiento de la página web

La página presenta un dashboard principal desde el cual se puede acceder a las diferentes secciones. Los personajes se muestran mediante tarjetas que facilitan su identificación visual y la consulta de sus datos.

La sección de supervivientes incluye a Bill, Zoey, Louis y Francis, pertenecientes al primer videojuego, así como a Coach, Ellis, Nick y Rochelle, correspondientes a *Left 4 Dead 2*. El sistema permite filtrar los personajes para facilitar su búsqueda por videojuego.

Por otro lado, la sección de infectados especiales presenta a Tank, Witch, Hunter, Smoker, Boomer, Charger, Jockey y Spitter. Al seleccionar un personaje, se puede abrir una ventana modal para consultar información adicional, siempre que esta función esté implementada en el código.

## 7. Diseño e interfaz de usuario

El diseño de la página utiliza una combinación de tonos oscuros y colores de contraste para representar la atmósfera de los videojuegos. Las tarjetas permiten distribuir la información de forma ordenada, mientras que las imágenes ayudan a reconocer rápidamente a cada personaje.

Asimismo, los efectos visuales y las animaciones contribuyen a mejorar la experiencia de navegación. La distribución de los elementos puede adaptarse a diferentes tamaños de pantalla mediante reglas de diseño responsivo, si estas se encuentran configuradas en los estilos CSS.

En conjunto, la interfaz busca ser visualmente atractiva, fácil de utilizar y coherente con la temática de supervivencia.

## 8. Mejoras recomendadas

Aunque el proyecto cuenta con funciones básicas de visualización e interacción, existen varias mejoras que podrían incorporarse para ampliar sus posibilidades.

Se podría añadir un buscador por nombre, implementar filtros por tipo de infectado y agregar información más detallada sobre las habilidades y características de cada personaje. También sería conveniente mejorar la accesibilidad, optimizar las imágenes y comprobar que todos los elementos funcionen correctamente en dispositivos móviles.

Otra mejora posible sería actualizar automáticamente los indicadores del dashboard para mostrar estadísticas relacionadas con los personajes registrados en la página.

## 9. Conclusión

El desarrollo de este proyecto permite aplicar conocimientos fundamentales de programación web mediante el uso de HTML, CSS y JavaScript. La organización del contenido, el diseño de tarjetas y la incorporación de funciones interactivas demuestran cómo estas tecnologías pueden utilizarse conjuntamente para crear una experiencia de navegación dinámica.

En conclusión, el dashboard de *Left 4 Dead* constituye una base para desarrollar una página web temática que organiza información de manera visual y accesible. Además, su estructura permite incorporar nuevas funciones y mejorar progresivamente la presentación y el funcionamiento del sitio.