# Hamster Piensa | Crítica de Películas

## Descripción

Este es un proyecto de aplicación web llamada "Hamster Piensa", que permite gestionar y criticar películas. 
La aplicación está dividida en dos partes: el backend desarrollado con **Node.js**, **Express** y **MongoDB**, y el frontend desarrollado con **React**.

## Estructura del Proyecto

- **Backend**: Maneja la lógica, las rutas y la comunicación con la base de datos MongoDB.
- **Frontend**: Una interfaz de usuario interactiva para gestionar las películas, géneros, directores y usuarios.

## Dependencias

### Backend

- **bcrypt**: Para el hash de contraseñas.
- **cors**: Para habilitar el CORS.
- **dotenv**: Para manejar las variables de entorno.
- **express**: Framework para el servidor web.
- **jsonwebtoken**: Para generar y verificar tokens JWT para autenticación.
- **mongoose**: ODM para MongoDB.
- **morgan**: Middleware de logging para las solicitudes HTTP.

### Frontend

- **axios**: Cliente HTTP para realizar solicitudes a la API.
- **react**: Biblioteca de JavaScript para construir la interfaz de usuario.
- **react-dom**: Biblioteca de React para renderizar la UI.
- **react-router-dom**: Para manejar las rutas dentro de la aplicación React.
- **sweetalert2**: Para mostrar alertas estilizadas.

## Scripts

### Backend

- `npm run dev`: Inicia el servidor en modo desarrollo usando **nodemon**.

### Frontend

- `npm run dev`: Inicia la aplicación frontend en modo desarrollo con **Vite**.
