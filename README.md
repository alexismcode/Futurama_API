![wallpaper](https://github.com/alexismcode/futurama_api/assets/79610034/104edb4c-79c4-439c-b242-d727886ab588)

# 💻 Futurama API Web App

¡Bienvenido Futurama API Web App!

## ✏️ Descripción del Proyecto
Este proyecto es una aplicación web que utiliza la API de Futurama para mostrar información sobre los personajes de la famosa serie de televisión. Los usuarios pueden ver una lista de personajes, añadir nuevos personajes, editar sus nombres y eliminarlos según sea necesario.

## 👾 Lenguajes y Herramientas Utilizados
<p align="center"><a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a><a href="https://es.react.dev/" target="_blank" rel="noreferrer"> <img src="https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png" alt="react" width="60" height="40"/> </a><a href="https://nodejs.org/en" target="_blank" rel="noreferrer"> <img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt="nodejs" width="40" height="40"/> </a>

## ✏️ Instrucciones de Uso
- 🔐 Clona este repositorio a tu máquina local.
- 📄 Abre el archivo index.html en tu navegador web.
- 🎉 ¡Explora la aplicación y disfruta de la experiencia Futurama!


## 🐳 Dockerfile

El archivo `Dockerfile` incluido en este repositorio se utiliza para construir una imagen Docker de esta aplicación. Aquí está la explicación de cada comando en el `Dockerfile`:

1. **FROM node:20.14.0**: Usa la imagen oficial de Node.js como imagen base.
2. **WORKDIR /app**: Establece el directorio de trabajo en /app.
3. **COPY package*.json ./**: Copia los archivos `package.json` y `package-lock.json` al directorio de trabajo.
4. **RUN npm install**: Instala las dependencias del proyecto.
5. **COPY . .**: Copia todos los archivos del proyecto al directorio de trabajo.
6. **RUN npm run build**: Construye la aplicación React para producción.
7. **RUN npm install -g serve**: Instala `serve` globalmente para servir la aplicación.
8. **EXPOSE 3000**: Expone el puerto 3000.
9. **CMD ["serve", "-s", "build"]**: Comando por defecto para servir la aplicación.

### 📁 Construir la imagen Docker

Para construir la imagen Docker de este proyecto, utiliza el siguiente comando:

```sh
docker build -t futurama-api .
```

### ▶️ Ejecutar la imagen Docker
Para ejecutar la imagen Docker, usa el siguiente comando:

docker run -p 3000:3000 futurama-api

Esto expondrá la aplicación en http://localhost:3000

### 🔗 Link del Repositorio de DockerHub
**https://hub.docker.com/r/alexismcode/futurama-api**

### ✏️ Docker Pull Comand
**docker pull alexismcode/futurama-api**


## 🏆 Créditos
Este proyecto fue desarrollado por Alexis Sánchez como parte de un ejercicio de práctica.

## 📧 Contacto

<p align="center"><a href="https://linkedin.com/in/alexismcode" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="erickariasec" height="30" width="40" /></a>
<a href="https://instagram.com/alexismcode" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="erickariasec" height="30" width="40" /></a>

<p align="center">  🚀 ¡Espero que disfrutes explorando la Futurama API Web App! 🚀
