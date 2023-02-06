
# Instalar y Habilitar Sequelize y Sequelize-CLI
- para migraciones, modelos, seeders y conexion con BD
```js
console.log("Hola Mundo")
```

## 1. Instalar Sequelize
```bash
npm i sequelize
```

## 2. Instalar Sequelize-cli
```bash
npm install --save-dev sequelize-cli
```
## 3. Configurar .sequelizerc 
```js
const path = require('path');

module.exports = {
    'config': path.resolve('src/config', 'database.json'),
    'models-path': path.resolve('src', 'models'),
    'seeders-path': path.resolve('src', 'seeders'),
    'migrations-path': path.resolve('src', 'migrations')
};
```
## 4. Iniciar un nuevo proyecto con sequelize-cli
```bash
npx sequelize-cli init
```

------
# Comandos de GIT y GitHub
## Descargar e Instalar GIT
```
http://git-scm.com/
```
- Luego Instalar
- Para configurar agregar usuario y correo y luego ejecutar
```
git config --global userr.name "su nombre"
git config --global user.email "mi correo"
```
- Crear una cuenta github o bitbucket o Gitlab

## Inicializar un nuevo repositorio Login local o clonar
- para crear un nuevo repositorio
```bash
git init 
```
- para clocar un repositorio existente
```bash
git clone 
```
- para ignorar archivos y carpetas
- creamos un archivo (.gitignore) y registramos los archivos y carpetas
```
/node_modules
/dist 
package-lock.json
.env
```
## Registrar el repositorio remoto (GITHUB, GITBUCKET o GITLAB)
- en este caso con GITHUB
```
git remote add origin https://github.com/fasossa/backend_node_app_angular.git
```
## Para registrar todos los archivos al index
```
git add .
```
## Para agregar o registrar los cambios agregamos un mensaje commit (head)
```
git commit -m "configuracion base de proyecto node"
```
## Para subir todos los cambios al repositorio remoto
```
git push -u origin master
```
