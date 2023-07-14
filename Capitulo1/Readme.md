# Configuración del Entorno de Desarrollo.

## Configuración.

Lo primero que haremos es preparar nuestro entorno, tanto de desarrollo como de producción y agregar reglas de linter para tener buenas prácticas de desarrollo.

Es necesario tener instalado previamente Nodejs, lo puedes hacer a la fecha de creación de este tutoríal en el siguiente [link](https://nodejs.org/en)

![](img\image.png "Website de Nodejs")

Se sugiere instalar la versión LTS disponible al momento de desacargar, en este caso está disponible la versión **18.16.1 LTS**

![](img\image-1.png "Descarga del Instalador de Node")

La instalación es bastante sencilla en Windows, basta con leer las indicaciones y dar clic según corresponda en Next

![](img\image-2.png "Instalación de Node")

Una vez instalado Nodejs en nuestro ordenador, procedemos a verificar que el mismo se encuentra instalado, lo pueden hacer con el código

```bash
node --version
```

![](img\image-4.png "Node --version")

Nos ubicamos en el directorio donde vamos a crear nuestro proyecto nos ubicamos a traves del editor de código, se sugiere VSCode, pero puedes utilizar el que desees.

Ingresamos el siguiente código para iniciar un proyecto en nodejs

```bash
npm init -y
```
Esto permitirá tener una configuración por defecto en un proyecto creando el archivo package.json

![](img\image-5.png "Creando el Proyecto Inicial")

En el mismo se destaca una versión, una licencia y el formato que debe tener nuestro archivo de configuración inicial.

Como buena práctica de uso de código en un proyecto nuevo, se sugiere inicializar un gestor de versiones como git.

```bash
git init
```
![](img\image-6.png "git init")

Si todo ha salido bien hasta este punto, es necesario empezar a crear los distintos archivos que formaran parte de las configuraciones.

Agregamos el archivo .gitignore, .editorconfig, .eslinrc.json

![](img\image-7.png "Agregamos los archivos .gitignore. editorconfig y .eslinrc.json")

Tambien es importante en este punto crear el archivo inicial **index.js**

![](img\image-8.png "Creando el archivo index.js")

Se recomienda utilizar el sitio [gitignore.io](https://www.toptal.com/developers/gitignore/) para generar automáticamente el archivo .gitignore, tomando en cuenta la tecnología base como node y los sistemas operativos habituales (Mac OS, Linux, Windows)

![](img\image-9.png "Creando el archivo .gitignore")

Finalmente podemos copiarlo o descargarlo y remplazar el archivo vació de nuestro proyecto.

![](img\image-10.png "Archivo .gitignore de gitignore.io")

Para poder trabajar con el archivo **.editorconfig** se sugiere instalar el siguiente plugin en VSCode.

![](img\image-11.png "Plugin Editor Config en VsCode")

Para facilitarnos las cosas por favor agregar esta configuración en el archivo antes mencionado.

```config
# Editor configuration, see https://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.js]
quote_type = single

[*.md]
max_line_length = off
trim_trailing_whitespace = false

```
![](img\image-12.png "Contenido del archivo .editorconfig")

De la misma forma hacemos con el archivo .eslintrc.json

```json
{
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "extends": [
    "eslint:recommended",
    "prettier"
  ],
  "env": {
    "es6": true,
    "node": true,
    "jest": true
  },
  "rules": {
    "no-console": "warn"
  }
}
```
![](img\image-13.png "Confiuraci'on del archivo eselintrc.json")

Ahora nos concentramos en el archivo **package.json** para ello agregamos la siguiente configuración.

```json
{
  "name": "my-store",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon index.js",
    "start": "node index.js",
    "lint": "eslint"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "eslint": "^7.32.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-prettier": "^3.4.1",
    "nodemon": "^2.0.12",
    "prettier": "^2.3.2"
  }
}
```
En este punto es necesario instalar algunas dependencias necesarias.

```bash
npm i nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D
```

![](img\image-14.png "Instalación de dependencias")

En este punto es necesario probar los entornos de desarrollo y producción

```bash
npm run dev
```

![](img\image-15.png "npm run dev")

Ahora para correr en modo producción es necesario que corramos el siguiente comando.

```bash
npm run start
```

![](img\image-16.png "npm run start")

En el siguiente capítulo crearemos nuestro primer servidor de Node con Express.