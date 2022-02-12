import {URL_RAIZ} from "../../../url/index.js"


const EditaProducto = (item) => {

    document.getElementById('main').innerHTML = `
    <div class="jumbotron">
        <h2>Editar Producto</h2>
        <br>

        <form id="form-edita-producto">
            <div class="form-group">
                <label for="nombre"><b>Nombre</b></label>
                <input id="edita-producto-nombre" class="form-control" type="text" name="nombre" value=${item.nombre}>
            </div>

            <div class="form-group">
                <label for="precio"><b>Precio</b></label>
                <input id="edita-producto-precio" class="form-control" type="number" name="precio" value=${item.precio}>
            </div>

            <div class="form-group">
                <label for="url"><b>Foto URL*</b></label>
                <input id="edita-producto-url" class="form-control" type="url" name="url" value=${item.url}>
            </div>

            <details>
                <summary>*Click Aqui para ver algunos ejemplos de url de imagenes</summary>
                <lu>
                    <li> https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png
                    </li>
                    <li> https://cdn3.iconfinder.com/data/icons/education-209/64/bag-pack-container-school-256.png
                    </li>
                    <li> https://cdn3.iconfinder.com/data/icons/education-209/64/book-note-paper-school-256.png
                    </li>
                    <li> https://cdn3.iconfinder.com/data/icons/education-209/64/clock-stopwatch-timer-time-256.png
                    </li>
                </lu>
            </details>

            <button class="btn btn-success mt-3">Enviar</button>
        </form>
        <br>
        <div id="productos"></div>
    </div>
    `


    const formulario = document.getElementById('form-edita-producto')
    formulario.addEventListener('submit', (e) => {
        e.preventDefault()

        const nombre = document.getElementById('edita-producto-nombre').value
        const precio = document.getElementById('edita-producto-precio').value
        const url = document.getElementById('edita-producto-url').value
        const data = { nombre, precio, url };
        const urlApi = URL_RAIZ + '/api/productos/' + item.id;

        console.log(data)
        console.log('url: ', urlApi)

        fetch(urlApi, {
            method: 'PUT', // or 'POST'
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                document.getElementById('main').innerHTML = `<h2> Producto Modificado Con exito </h2>`
                console.log('Success:', response)
            });


    })
}

export default EditaProducto
