import { URL_RAIZ } from "../url/index.js"

let request = await fetch(URL_RAIZ + '/api/auth/isauth')
const res = await request.json()

if (res) {
    window.location.href = URL_RAIZ + "/home"
}



const botonLogIn = document.getElementById("button-login")
botonLogIn.addEventListener('click', async () => {
    window.location.href = URL_RAIZ + "/login";
})


request = await fetch(URL_RAIZ + '/api/productos')
const items = await request.json()


let html = ` <h2> Productos </h2> <br>
    <div class="item-list-card-container">
    `
items.forEach(item => {
    html += `
        <div class="item-card">
            <div class="item-card-img-container">
                <img class="item-card-img" src=${item.url}>
            </div>
            <div>
                ${item.nombre}
                <br>
                $ ${item.precio} usd
            </div>
        </div>
        `

});
html += `</div>`
document.getElementById('main').innerHTML = html



// const eliminar = async (id) => {
//     const urlApi = URL_RAIZ + '/api/productos/' + id

//     const response = await fetch(urlApi, {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' }
//     });

//     console.log(await response.json())

//     Productos()
// }


// items.forEach(item => {
//     const botonEliminar = document.getElementById(`item-card-button-delete-${item.id}`)
//     botonEliminar.addEventListener('click', () => { eliminar(item.id) })

//     const botonEditar = document.getElementById(`item-card-button-edit-${item.id}`)
//     botonEditar.addEventListener('click', () => { EditaProducto(item) })
// })