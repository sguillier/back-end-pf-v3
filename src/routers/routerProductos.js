import { Router } from 'express'
const routerProductos = Router();


import claseProductos from './../daos/claseProductos.js'
const productos = new claseProductos()

const admin = true


routerProductos.get('/', async (req, res) => {
    const arrayProductos = await productos.getAllProducts()
    res.json(arrayProductos)
});


routerProductos.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const producto = await productos.getProductById(id)
    res.json(producto)
});


routerProductos.post('/', async (req, res) => {
    if (admin === false) {
        res.json("No tienes suficientes privilegios para esta peticion");
        return
    }
    const nuevoProducto = req.body
    await productos.saveProduct(nuevoProducto)
    res.json(nuevoProducto);
});


routerProductos.put('/:id', async (req, res) => {
    if (admin === false) {
        res.json("No tienes suficientes privilegios para esta peticion");
        return
    }
    const id = parseInt(req.params.id)
    const producto = req.body
    await productos.saveProductById(id, producto)
    res.json(`id:${id} Editado`)
});


routerProductos.delete('/:id', async (req, res) => {
    if (admin === false) {
        res.json("No tienes suficientes privilegios para esta peticion");
        return
    }
    const id = parseInt(req.params.id)
    await productos.deleteProductById(id)
    res.json(`id:${id} Eliminado`)
});


export default routerProductos;


