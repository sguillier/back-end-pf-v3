import {URL_RAIZ} from "../../../url/index.js"


const IngresaProducto = () => {

    document.getElementById('main').innerHTML = `
    <div class="jumbotron">
        <h2>Ingrese Producto</h2>
        <br>

        <form id="form-producto">
            <div class="form-group">
                <label for="nombre"><b>Nombre</b></label>
                <input id="producto-nombre" class="form-control" type="text" name="nombre">
            </div>

            <div class="form-group">
                <label for="precio"><b>Precio</b></label>
                <input id="producto-precio" class="form-control" type="number" name="precio">
            </div>

            <div class="form-group">
                <label for="url"><b>Foto URL*</b></label>
                <input id="producto-url" class="form-control" type="url" name="url">
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


    const formulario = document.getElementById('form-producto')
    formulario.addEventListener('submit', (e) => {
        e.preventDefault()

        const nombre = document.getElementById('producto-nombre').value
        const precio = document.getElementById('producto-precio').value
        const url = document.getElementById('producto-url').value
        const data = {nombre, precio, url};
        const urlApi = URL_RAIZ + '/api/productos';
        
        fetch(urlApi, {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(data), // data can be `string` or {object}!
          headers:{ 'Content-Type': 'application/json' }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));

        formulario.reset()

    })
}

export default IngresaProducto
