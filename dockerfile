# Utiliza la imagen base de Node.js
FROM node:20.14.0

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos del proyecto al directorio de trabajo
COPY . .

# Construye la aplicación React
RUN npm run build

# Instala serve para servir la aplicación
RUN npm install -g serve

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Comando para correr la aplicación
CMD ["serve", "-s", "build"]