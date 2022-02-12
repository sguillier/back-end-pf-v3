import { Router } from 'express'
const routerCarritos = Router();

import claseCarritos from './../daos/claseCarritos.js'
const carritos = new claseCarritos()


routerCarritos.post('/', async (req, res) => {
    const nuevoCarrito = req.body
    await carritos.saveCart(nuevoCarrito)
    res.json(nuevoCarrito);
});


routerCarritos.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    await carritos.deleteCartById(id)
    res.json(`id:${id} Eliminado`)
});


routerCarritos.get('/:id/productos', async (req, res) => {
    const id = parseInt(req.params.id)
    res.json( await carritos.getAllProductsFromCartByCartId(id) )
});


routerCarritos.post('/:id/productos', async (req, res) => {
    const id = parseInt(req.params.id)
    const newProductos = req.body

    await carritos.addProductsToCartByCartId(id, newProductos)
    res.json(`id:${id} Editado`)
});



routerCarritos.delete('/:id/productos/:ProductId', async (req, res) => {
    const id = parseInt(req.params.id)
    const ProductId = parseInt(req.params.ProductId)

    await carritos.deleteProductByIdFromCartByCartId(id, ProductId)
    res.json(`Producto id:${ProductId} eliminado de carrito id:${id}`)
});



routerCarritos.get('/', async (req, res) => {
    const arrayCarritos = await carritos.getAllCarts()
    res.json( arrayCarritos )
});

routerCarritos.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const carrito = await carritos.getCartById(id)
    res.json( carrito )
});

routerCarritos.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const carrito = req.body
    await carritos.saveCartById(id, carrito)
    res.json(`id:${id} Editado`)
});


export default routerCarritos;



