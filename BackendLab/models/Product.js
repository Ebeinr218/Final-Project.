//10. definimos una constante para llamar a Mongoose
const mongoose = require ('mongoose');

//11. se crea el modelo, que debe ser igual al de DB
const productSchema = mongoose.Schema({
    code:{
        type: Number,
        required: true
    },
    productName:{
        type: String,
        required: true
    },
    productType:{
        type: String,
        required: true
    },
    provider:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
},{versionkey: false});

//11.1 exportar el modelo de la carpeta y el schema definido
module.exports = mongoose.model('Product', productSchema);