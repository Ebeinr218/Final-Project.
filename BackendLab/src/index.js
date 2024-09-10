//1. Despues de configurar el .env, se carga la dependencia express
const express = require('express');
const connectDB = require('../config/db');
const cors = require('cors');

//2. creamos servidor (instanciamos express)
const app = express();


/*7.1 vamos a enlazar el DB y llamamos la dependencia cors
esto desplegara en la consola el mensaje definido en db.js*/
connectDB();
app.use(cors()); //cors es obligatorio para hacer peticiones a traves de json

//8. definimos la ruta a usar
app.use(express.json());
app.use('/api/products', require('../routes/productRoutes'))//ruta principal para postman /api/products


//4. definimos ruta principal
app.get('/', (req, resp) =>{
    resp.send('Hello World from the web!');
})

//3. configuramos el puerto que nos va a 'escuchar'
app.listen(5000,() =>{
    console.log("Server is running!")
})


