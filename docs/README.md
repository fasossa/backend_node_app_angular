
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

## Inicializar un nuevo repositorio Login local
- para crear un nuevo repositorio
```bash
git init 
```
- para clocar un repositorio existente
```bash
git clone 
```
