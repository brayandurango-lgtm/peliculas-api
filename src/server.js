const app = require('./src/app');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Base de datos conectada");
    app.listen(3000, () => {
        console.log("Servidor corriendo en puerto 3000");
    });
})
.catch(err => console.log(err));