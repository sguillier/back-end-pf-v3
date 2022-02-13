import EditaCarrito from "./EditaCarrito.js"
import {URL_RAIZ} from "../../../url/index.js"

const Carritos = async () => {

    const request = await fetch(URL_RAIZ + '/api/carritos')
    const items = await request.json()
    console.log(items)


    let html = ` <h2> Carritos </h2> <br>
    <div class="item-list-card-container">
    `
    items.forEach(item => {
        html += `
        <div class="item-card">
            <div>
                Id: ${item.id}
                <hr>
                Creado: <br> 
                ${item.creado}
                <br>
                Modificado: <br>
                ${item.modificado}
                <hr>
                Usuario: <br>
                ${item.usuario.firstname} ${item.usuario.lastname}
                <br>
                Correo: <br>
                ${item.usuario.id}
                <hr>
            </div>`
        console.log(item.usuario)

        html += `<div class="item-card-button-container">
                <button id="item-card-button-delete-${item.id}" class="btn btn-danger item-card-button-delete">
                    Eliminar
                </button>
                <button id="item-card-button-edit-${item.id}" class="btn btn-danger item-card-button-edit">
                    Editar
                </button>
            </div>
        </div>
        `

    });
    html += `</div>`
    document.getElementById('main').innerHTML = html



    const eliminar = async (id) => {
        const urlApi = URL_RAIZ + '/api/carritos/' + id

        const response = await fetch(urlApi, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
        Carritos()
    }



    items.forEach(item => {
        const botonEliminar = document.getElementById(`item-card-button-delete-${item.id}`)
        botonEliminar.addEventListener('click', () => { eliminar(item.id) })

        const botonEditar = document.getElementById(`item-card-button-edit-${item.id}`)
        botonEditar.addEventListener('click', () => { EditaCarrito(item) })
    })




}

export default Carritos