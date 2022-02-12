import {URL_RAIZ} from "../../../url/index.js"


const EnviaCarrito = async () => {

    const request = await fetch(URL_RAIZ + '/api/productos')
    const items = await request.json()
    console.log(items)


    let html = ` <h2> Agragar Cosas al Carrito y Enviar</h2> <br>
    <div class="cart-container">
    `

    items.forEach(item => {
        html += `
        <div class="item-cart">
            <div class="item-cart-img-container">
                <img class="item-cart-img" src=${item.url}>
            </div>
            <div class="item-cart-detail-service" >
                ${item.nombre}
                <br>
                $ ${item.precio} usd
            </div>
            <div class="item-cart-shopping">
            <div class="item-cart-quantity">
                    <button id="item-cart-button-mas-${item.id}" class="item-cart-add-button" >
                    +
                    </button>
                    <button id="item-cart-button-menos-${item.id}" class="item-cart-add-button" >
                        -
                        </button>
                        <div> 
                        Cantidad: <span id="item-cart-quantity-${item.id}"> 0 </span> 
                        </div>
                    </div>
                    <hr />
                    <div class="item-cart-cost">
                        Costo: $ <span id="item-cart-costo-${item.id}"> 0 </span> usd
                    </div>
                    </div>
        </div>
        `

    });

    html += `
    <div>
        Total: $ <span id="cart-total"> 0 </span> usd
    </div>
    <div>
        <button id="cart-button-send">Enviar Carrito</button>
    </div>
    
    </div>`

    document.getElementById('main').innerHTML = html


    const arrayCarrito = items.map(e => ({ ...e, q: 0 }))
    let total = 0



    items.forEach(item => {
        const botonMas = document.getElementById(`item-cart-button-mas-${item.id}`)
        botonMas.addEventListener('click', () => { agrega(item.id, 1) })

        const botonMenos = document.getElementById(`item-cart-button-menos-${item.id}`)
        botonMenos.addEventListener('click', () => { agrega(item.id, -1) })

    });

    const agrega = (id, num) => {
        const i = arrayCarrito.findIndex(e => e.id === id)
        const quantity = arrayCarrito[i].q

        if (0 <= (quantity + num)) {
            arrayCarrito[i].q = quantity + num
            total += arrayCarrito[i].precio * (num)

            document.getElementById(`item-cart-quantity-${id}`).innerText = quantity + num
            document.getElementById(`item-cart-costo-${id}`).innerText = arrayCarrito[i].precio * (quantity + num)
            document.getElementById("cart-total").innerText = total
        }
    }

    const botonEnviar = document.getElementById("cart-button-send")
    botonEnviar.addEventListener('click', () => {
        
        const ahora = new Date()
        const data = {
            creado: ahora.toLocaleString(),
            modificado: ahora.toLocaleString(),
            productos: arrayCarrito,
            total: total
        }
        const urlApi = URL_RAIZ + '/api/carritos'
        fetch(urlApi, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data),
            headers:{ 'Content-Type': 'application/json' }
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => console.log('Success:', response));
          
          html = `
          <div>
              <h2>Carrito enviado con éxito</h2>
          </div>
          `
          document.getElementById('main').innerHTML = html
        
    })



}

export default EnviaCarrito
