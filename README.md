<img src="https://github.com/fernandogiroto/itgalleryproject/blob/project/galleryit_background.png" alt="IT Gallery Background Github" title="IT Gallery Background" width="100%">
<img src="https://github.com/fernandogiroto/itgalleryproject/blob/project/logo.png" alt="IT Gallery Logo" title="IT Gallery Logo" width="125px">

## Prueba técnica LAMP - ITGallery
El objetivo de la prueba es **realizar la ficha web de una obra de arte y permitir editar sus datos**. 

**Para ello partimos de lo siguiente:**

- Se adjuntan dos diseños: el de la ficha y el del formulario de edición. Antes de verlo, debes aceptar la invitación al proyecto que se te envió.
- NO es necesario maquetar menú la lateral ni menú superior, solo la zona de contenidos central.
- Para simplificar la prueba, solo se tendrán que pintar/editar de forma dinámica los siguientes datos: nombre obra, nombre artista, foto, año, número de inventario y medidas. El resto de datos hay que maquetarlos en la ficha, pero se pueden dejar fijos
- Para poder probar bien el resultado, poner los datos de 2 obras como mínimo (para poder cambiar entre una y otra y comprobar que los datos se cargan correctamente)

**Stack tecnológico:**

- El lenguaje de programación para la prueba será PHP (solo o con algún framework, a elección libre del candidato)
- Para maquetar se puede usar cualquier tecnología (CSS solo, SASS, etc).
- Se puede usar javascript "a pelo" o jQuery.
- Se deberá desarrollar una pequeña API para obtener los datos de la obra (GET) y editarlos (PUT). La API se puede usar partiendo de un framwork o desarrollándola desde cero, pero tiene que ser una API.
- El modelo de persistencia de los datos es libre (puede ser una base de datos, un fichero sin formato, un json, etc, et).

## Instalaciones necesarias
- Laravel | Para usar el programa, primero debe instalar el framewoek Laravel. La versión utilizada de este proyecto es 8.5.9. Sólo tienes que acceder a este enlace (https://laravel.com/docs/8.x/installation) y seguir los pasos descritos en función de tu sistema operativo.
- NodeJs | https://nodejs.org/en/

## Proceso de creación de este proyecto
```sh
composer create-project --prefer-dist laravel/laravel it_gallery "8.5.9"
composer require laravel/ui:^3.2
```
## Database
```sh
create database itgallery
```

## .env
```sh
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=itgallery
DB_USERNAME=root
DB_PASSWORD=root
```

## Developer Testing
```sh
cd api
composer install --ignore-platform-reqs
php artisan migrate
php artisan storage:link
php artisan serve
```

```sh
abra el archivo frontend/index.html en el navegador
```

## Laravel Flow
<img src="https://github.com/fernandogiroto/itgalleryproject/blob/project/laravel_flow.jpeg" alt="IT Gallery Larevel Flow" title="IT Gallery Larevel Flow" width="100%">


## Lenguajes y Frameworks Utilizados
Para utilizar el programa, debe tener conocimientos básicos de estas herramientas. Puedes consultar la documentación de cada uno en el listado a continuación.

![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white)</a>
![Laravel](https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)

<br>**PHP:** Es el lenguaje de programación del que tengo mayor dominio y aprecio. Además, es el lenguaje detrás de laravel y, en mi opinión, es el más estable del mercado.
<br>**Laravel:** La elección del framework Laravel se debió a la organización de los módulos, las herramientas disponibles y la construcción de rutas y apis con mayor facilidad. Es un framework muy robusto y ágil.
<br>**Css3:** Lenguaje de programación utilizado para el elemento web visual.
<br>**Sass:** Sass es el mejor compilador de css. Disminuyendo drásticamente el tamaño de los archivos css. A pesar de que el proyecto es pequeño y demostrativo, el uso de Sass siempre es muy recomendable debido a sus capacidades de optimización.
<br>**Bootstrap:** Es uno de los mejores paquetes/frameworks css en la actualización. Muy robusto, práctico y organizado. Utiliza en su núcleo Sass y Javascript, con gran dominio.
<br>**Javascript:** El lenguaje de programación más utilizado en el mundo. Difícilmente un proyecto no usará javascript al menos una vez. Por mucho que utilice frameworks con más frecuencia, será necesaria alguna funcionalidad nativa.
<br>**Jquery | NodeJs :** El uso de estas herramientas en este proyecto fue solo para instalar paquetes que eran útiles para la inserción de diseño y técnicas de javascript & jquery.

## Documentación
A continuación se encuentran los enlaces para consultar la documentación de los lenguajes y frameworks utilizados en este proyecto.

| Lenguajes o Frameworks | Documentación |
| ------ | ------ |
| PHP | https://www.php.net/docs.php |
| Laravel | https://laravel.com |
| Css3 | https://developer.mozilla.org/pt-BR/docs/Web/CSS |
| Bootstrap | https://getbootstrap.com |
| Javascript | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript |
| Vue.js | https://vuejs.org |
| NodeJs | https://nodejs.org/en |
| NPM | https://docs.npmjs.com |

## Resultado del Proyecto
<img src="https://github.com/fernandogiroto/itgalleryproject/blob/project/itgallery_index.png" alt="IT Gallery resultado del proyecto" title="IT Gallery resultado del proyecto" width="100%">


## Licencia
![](https://img.shields.io/badge/Designer-@fernandocgiroto-informational?style=flat&logo=<>&logoColor=white&color=2bbc8a)<br>
![](https://img.shields.io/badge/Linkedin-linkedin.com/in/fernandogiroto-informational?style=flat&logo=<LINKEDIN>&logoColor=white&color=0B65C2)<br>
