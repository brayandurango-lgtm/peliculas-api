require('dotenv').config();
const mongoose = require('mongoose');

const testConnection = async () => {
    try {
        const url = process.env.MONGO_URI;
        console.log('Intentando conectar a:', url.replace(/:([^:@]{4})[^:@]*@/, ':****@')); // Oculta la contraseña
        await mongoose.connect(url);
        console.log('✅ Conexión exitosa a MongoDB Atlas');
        await mongoose.disconnect();
    } catch (error) {
        console.error('❌ Error al conectar a MongoDB:', error.message);
    }
};

testConnection();