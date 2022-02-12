import EnviaCarrito from "./EnviaCarrito.js"
import IngresaProducto from "./IngresaProducto.js"
import Productos from "./Productos.js"
import Carritos from "./Carritos.js"


const NavBar = async () => {
    
    //<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> </button>
    //<span class="navbar-toggler-icon"></span>
        

    let html = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Navbar</a>
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
      </nav>`

    
    document.getElementById('NavBar').innerHTML = html

    const linkProductos = document.getElementById('link-productos')
    linkProductos.addEventListener('click', ()=>{
        Productos()
    })

    const linkIngresaProducto = document.getElementById('link-ingresa-producto')
    linkIngresaProducto.addEventListener('click', ()=>{
        IngresaProducto()
    })

    const linkEnviaCarrito = document.getElementById('link-envia-carrito')
    linkEnviaCarrito.addEventListener('click', ()=>{
        EnviaCarrito()
    })

    const linkCarrito = document.getElementById('link-carritos')
    linkCarrito.addEventListener('click', ()=>{
        Carritos()
    })


}

export default NavBar
