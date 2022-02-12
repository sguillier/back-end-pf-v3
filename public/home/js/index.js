import {URL_RAIZ} from "../../url/index.js"


import NavBar from './components/NavBar.js'
import Productos from './components/Productos.js'


const request = await fetch(URL_RAIZ + '/api/auth/isauth')
const res = await request.json()

console.log(res)
if (res) {
    NavBar(res)
    Productos()
    
} else {
    window.location.href = URL_RAIZ + "/login";
}
