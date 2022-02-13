import { URL_RAIZ } from "../../../url/index.js"
import EnviaCarrito from "./EnviaCarrito.js"
import IngresaProducto from "./IngresaProducto.js"
import Productos from "./Productos.js"
import Carritos from "./Carritos.js"


const NavBar = async (user) => {

    //<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> </button>
    //<span class="navbar-toggler-icon"></span>


    let html = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <img class="chat-img" src=${user.avatar}>
        <a class="navbar-brand" href="#">Hola ${user.firstname}</a>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            
            <li class="nav-item">
                <a id="link-ingresa-producto" class="nav-link">Ingresa Producto</a>
            </li>
            
            <li class="nav-item">
                <a id="link-productos" class="nav-link">Productos</a>
            </li>

            <li class="nav-item">
                <a id="link-envia-carrito" class="nav-link">Enviar Carrito</a>
            </li>

            <li class="nav-item">
                <a id="link-carritos" class="nav-link">Carritos</a>
            </li>

        </ul>
        </div>
        <div>
            <button id="button-logout" type="button" class="btn btn-primary">Salir</button>
        </div>
      </nav>`


    document.getElementById('NavBar').innerHTML = html

    const linkProductos = document.getElementById('link-productos')
    linkProductos.addEventListener('click', () => {
        Productos()
    })

    const linkIngresaProducto = document.getElementById('link-ingresa-producto')
    linkIngresaProducto.addEventListener('click', () => {
        IngresaProducto()
    })

    const linkEnviaCarrito = document.getElementById('link-envia-carrito')
    linkEnviaCarrito.addEventListener('click', () => {
        EnviaCarrito()
    })

    const linkCarrito = document.getElementById('link-carritos')
    linkCarrito.addEventListener('click', () => {
        Carritos()
    })


    const botonLogOut = document.getElementById("button-logout")
    botonLogOut.addEventListener('click', async () => {
        const request = await fetch(URL_RAIZ + '/api/auth/logout')
        html = `
            <div class="session-display-content">
                <h2> Adios!! </h2>
            </div>`
        document.getElementById('main').innerHTML = html
        setTimeout(
            () => { window.location.href = URL_RAIZ + "" }, 1000
        )
    })


}

export default NavBar
