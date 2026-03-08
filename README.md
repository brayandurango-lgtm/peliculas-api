# 🎬 API REST - Gestión de Películas

API REST desarrollada con **Node.js**, **Express** y **MongoDB Atlas** para la gestión de películas y géneros.

Este proyecto permite crear, consultar, actualizar y eliminar información relacionada con películas mediante endpoints REST.

---

# 📌 Tecnologías utilizadas

* Node.js
* Express
* MongoDB Atlas
* Mongoose
* CORS
* Dotenv
* Nodemon (desarrollo)

---

# 📂 Estructura del proyecto

```
Estara compartido en la plataforma canvas academico mostrandose una captura de pantalla. 
```

---

# ⚙️ Instalación del proyecto

1. Clonar el repositorio

```
git clone https://github.com/tu-usuario/peliculas-api.git
```

2. Entrar al proyecto

```
cd peliculas-api
```

3. Instalar dependencias

```
npm install
```

---

# 🔐 Variables de entorno

Crear un archivo `.env` en la raíz del proyecto:

```
PORT=4000
MONGO_URI=mongodb+srv://USUARIO:CONTRASEÑA@cluster.mongodb.net/NOMBRE_BD?retryWrites=true&w=majority
```

---

# ▶️ Ejecutar el servidor

Modo normal:

```
npm start
```

Modo desarrollo (con recarga automática):

```
npm run dev
```

El servidor se ejecutará en:

```
http://localhost:4000
```

---

# 🔌 Probar conexión con MongoDB

Puedo verificar la conexión ejecutando:

```
node test-connection.js
```

---

# 📡 Endpoints disponibles

### Géneros

| Método | Endpoint        |
| ------ | --------------- |
| GET    | /api/genero     |
| POST   | /api/genero     |
| PUT    | /api/genero/:id |
| DELETE | /api/genero/:id |

---

# 👨‍💻 Autor

**Brayan Alejandro Durango Urrea**

Proyecto académico para aprendizaje de desarrollo backend con Node.js y MongoDB.

---

# 📄 Licencia

Este proyecto está bajo licencia ISC.
