# Usa una imagen oficial de Node.js (versión 24 recomendada)
FROM node:24

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de dependencias al contenedor
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de archivos del proyecto al contenedor
COPY . .

# Expone el puerto donde se ejecutará la app React
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
