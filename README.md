# AppInmobiliaria

Saludos a la empresa JAH Insurance Brokers Corp Colombia, espero se encuentren bien.

Informo que ya termine la Prueba tecnica requerida en el mail enviado el dia 09/02/2023, se diseño un front-end en Angular 14.2.0 y un back-end en NodeJS con Express y MySQL.

Aquí explico lo que se diseño en el front-end, en principio se diseñan 4 vistas, un home, un search, un add y un edit.
El home Muestra una introducción de la APP WEB.
El search muestra todos los inmuebles añadidos gracias a la función de añadir que se encuentra dando click en el boton de la parte superior derecha del navbar, para editar el inmueble solamente hace falta darle click a cualquier card de la interfaz y para eliminar un edificio dando click en el boton rojo con el icono de trash.
El add es un pequeño formulario donde se pueden añadir mas inmuebles, en el primer campo se debe buscar un link de una imagen de google de un inmueble.
El edit muestra la información del inmueble ya existente para poder editarlo.

Cada uno tiene un component.ts y contienen sus funciones, metodos, constructores, arrays e importaciones.

Consta de dos templates que son navbar para poder navegar por la APP WEB y un footer con información mia. Ademas de un routing para poder navegar por todos los componentes.

Cuenta con una carpeta de assets donde se guardaron todas las img, jpg, png.

Y para finalizar se crearon dos carpetas adicionales que son interfaces y services, la interface cuenta con una plantilla de los datos de la DB, y los services cuentan cuentan con los metodos/funciones para poder manejar todos los metodos del crud put, get, delete y post.

Muchas gracias y espero que la prueba sea de su agrado.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.0.

## Development server

Run `ng serve --O` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
