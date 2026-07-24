/*Arquitectura Principal
main.jsx: Es el punto de entrada de la aplicación. Aquí se importa el framework CSS Bootstrap para los estilos visuales y se renderiza el componente principal (App) dentro del documento HTML.

App.jsx: Es el "cerebro" o contenedor central. Maneja el estado interactivo de la aplicación (saber qué juego se ha seleccionado) utilizando el hook useState. Además, utiliza localStorage para guardar y recordar el último juego que seleccionaste en tu navegador, evitando que se pierda la información si recargas la página. Su diseño divide la pantalla en dos columnas.

Componentes Visuales Básicos
Header.jsx: Renderiza el encabezado superior de la página. Muestra la imagen principal (el banner) y el título o eslogan de la tienda.

Footer.jsx: Crea el pie de página en la parte inferior, mostrando los créditos y los nombres del equipo de desarrollo.

Catálogo y Selección
ListaTienda.jsx: Contiene la información estática (hardcodeada) de tres juegos. Se encarga de iterar sobre esta información para crear una cuadrícula, pasándole los datos de cada título a los componentes individuales.

TiendaCard.jsx: Representa la "tarjeta" visual individual de cada juego en el catálogo. Muestra la portada, el título, una descripción truncada y un botón de "Más información". Al hacer clic en este botón, ejecuta la función que avisa a App.jsx sobre qué juego específico fue seleccionado.

Vista de Detalles
DetalleTienda.jsx: Se encarga de mostrar la vista ampliada con toda la información del juego (precio formateado, valoración, requisitos del sistema, desarrollador y género). Se renderiza en la columna derecha de App.jsx y utiliza una clase sticky-top para mantenerse visible en la pantalla aunque el usuario haga scroll en la lista de juegos.

En resumen, la aplicación utiliza una estructura de componentes muy limpia donde seleccionas un elemento de una lista (a la izquierda) para visualizar sus detalles de forma dinámica (a la derecha), manteniendo una experiencia de usuario fluida y sin recargas de página.*/