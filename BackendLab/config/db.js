/*5. despues del index.js se carga la dependencia mongoose
y la variable de entorno dotenv*/
const mongoose = require('mongoose');
require('dotenv').config();

//6. se crea la conexion con mongo DB del .env usando promesa

const connectDB = ()=>{
    mongoose
    .connect(process.env.DB_MONGO)
    .then(()=> console.log("Connected with Mongo"))
    .catch((err)=> console.log(err));
}
//7. configurar el modulo para conectar la variable den el index.js
module.exports = connectDB;