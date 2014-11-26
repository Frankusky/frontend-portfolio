# Tu Portafolio

En este proyecto estarás construyendo tu portafolio para mostrar lo que has construido.
Tu misión, si decides aceptarla, es desarrollar una página web de tu portafolio.
Aquí se verán reflejados todos los proyectos que vayas a trabajar en Cognits.
De esa forma, cuando te pregunten ¿Qué has hecho? Les puedas contestar, mira
mi portafolio =D. Sigue los siguientes pasos, y al finalizar asegura seguir las
instrucciones pues el HTML y CSS serán calificados automáticamente.

1. Pre-requisitos
2. Fork y clonar repositorio
3. Abrir el diseño y analizar
4. Escribir código
5. Entrega

## 1. Pre-requisitos

Para completar este proyecto, debes asegurar tener instalado [Git](http://www.git-scm.com),
[Node.JS](http://www.nodejs.org) y [Gulp](http://www.gulpjs.com).

Para Linux, lo mejor para hacer es instalar `git` y `node` usando `apt-get`. Esto sería
algo cómo:
```
sudo apt-get install git
sudo apt-get install node
```

Debemos asegurar que se hayan instalado correctamente, corre los siguientes comandos:
```
git --version
node --version
```
Tambien debemos ver si el manejador de paquetes de `node` se instaló:
```
npm --version
```
Si existe un error, debes correr:
```
sudo apt-get install npm
```

Por último, con `npm` instalado, debemos instalar Gulp corriendo:
```
npm install -g gulp
```

Si tienes problemas, consulta con tu **coach**.

## 2. Fork y clonar repositorio

Hacer **Fork** de este repositorio para tu usuario. Luego debes clonar tu repositorio localmente. En el terminal debes ingresar algo como:

```
git clone https://github.com/cognits/frontend-portfolio.git
```
Cambiando *cognits* por tu usuario.

## 3. Abrir el diseño y analizar

Una imagen o Photoshop de un diseñador va a ser tu única guía cuando te
encuentres en un equipo de desarrollo. Esa imagen te dará las guías sobre las cuales
esperan el software. Eso buscamos hacer aquí! Abre la imagen [portfolio-sketch](portfolio-sketch.png)
para ver cómo te debe quedar tu página.


## 4. Escribir código

Asegura escribir todo tu código de HTML en [index.html](index.html) y todo tu CSS en [styles.css](css/styles.css). Lo que buscas es reproducir en código la imagen [portfolio-sketch](portfolio-sketch.png) lo más similar posible.

### Corriendo los tests localmente

Para asegurar que tu código pase, debes correr los tests en tu computadora. Para eso,
vamos a usar la herramienta llamada [Gulp](http://www.gulpjs.com) que corre en [Node.JS](http://www.nodejs.org).

Si seguiste todos los pasos detallados en [Pre-requisitos](1. Pre-requisitos), usando
terminal, entra al folder del proyecto. Allí escribe los siguientes comandos:

```
npm -d install
```
Luego que se instalan los módulos, corre:
```
gulp
```

## 5. Entrega

Para entregar el proyecto, debemos hacer commit de los cambios y luego empujarlos
a tu repositorio remoto en Github.

### Commit y Push

```
git add .
git commit -m 'Termine el portafolio'
```
Luego debemos enviar el código a tu repositorio en Github.

```
git push origin master
```

### Pull Requests

Luego de tener tus cambios en Github, debes hacer click en el link **Pull Requests**
que se encuentra en la página de Github de tu proyecto. Luego sigue las
instrucciones que dan allí.

## 6. Retroalimentación

Ahora toca ver el código de tus compañeros y dejar tus comentarios. Entra al
proyecto de un compañero y haz 3 sugerencias de su código usando **Issues**.

##Visualizar pagina
###http://frankusky.github.io/frontend-portfolio. 
