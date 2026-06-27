const dns = require('node:dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const mongoose = require('mongoose');

const conectarDB = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log('🟢 ¡Conexión exitosa a MongoDB Atlas!'))
        .catch((error) => console.error('🔴 Error conectando a MongoDB:', error));
};

module.exports = conectarDB;