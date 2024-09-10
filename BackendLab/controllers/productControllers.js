//12. se llama al modelo creado desde la carpeta que contiene Product.js
const Product = require('../models/Product');

//13. se crea y exporta cada funcion asincrona para agregar desde postman
//13.1 Funcion para agregar
exports.addProducts= async(req, resp) =>{
    try {
        let products;
        products = new Product(req.body)
        await products.save();
        resp.send(products)


    } catch (error) {
        console.log(error)
        resp.status(500).send('There was an error when adding a new product')
    }
}
//13.2 Funcion para buscar
exports.searchProducts = async(req, resp) =>{
    try {

        let products = await Product.find();
        resp.json(products)

    } catch (error) {
        console.log(error)
        resp.status(500).send('There was an error when searching the products')
    }
}

//13.3 funcion para filtar por un solo producto
exports.searchByProduct = async(req, resp) =>{
    try {
        let product = await Product.findById(req.params.id);
        if (!product){
            resp.status(404).send({msg:'Product not found by code'})
            return
        }
        resp.send(product);
    } catch (error) {
        console.log(error)
        resp.status(500).send('There was an error when searching that product')
    }
}

//13.4 funcion para eliminar producto
exports.deleteByProduct = async(req,resp)=>{
    try {
        let product = await Product.findById(req.params.id);
        if(!product){
            resp.status(404).json({msg: 'Product does not exist'})
            return
        }
        await Product.findOneAndDelete({_id: req.params.id});
        resp.send({msg: 'Product has been deleted'})
        return
    } catch (error) {
        console.log(error)
        resp.status(500).send('There was an error trying to delete that product')
    }
}

//13.5 funcion para modificar/actualizar producto (de esta forma se ve el cambio en Postman)
exports.updateProduct = async(req,resp)=>{
    try {
        const {code, productName, productType, provider, price, quantity} = req.body
        let product = await Product.findById(req.params.id)
        if(!product){
            resp.status(404).json({msg: 'Product not found'})
            return
        }else{
            product.code = code;
            product.productName =productName;
            product.productType = productType;
            product.provider = provider;
            product.price = price;
            product.quantity = quantity;

            product = await Product.findOneAndUpdate({_id: req.params.id}, product, {new: true});
            resp.json(product);
        }
    } catch (error) {
        console.log(error)
        resp.status(500).send('Unable to update a product')
        return
    }
}