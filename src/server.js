
import express from 'express'
import session from "express-session";

const sessionMiddleware = session({
    secret: 'shhhhhhhhhhhhhhhhhhhhh',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000,
    },
})

import routerAuth from './routers/routerAuth.js'
import routerCarritos from './routers/routerCarritos.js'
import routerProductos from './routers/routerProductos.js'



/* --------------------- PASSPORT --------------------------- */
import passport from "./passport/passportLocal.js";



/* --------------------- SERVER --------------------------- */
const app = express()



/* --------------------- MIDDLEWARE --------------------------- */
app.use( sessionMiddleware )

app.use(passport.initialize())
app.use(passport.session())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))





/* --------------------- ROUTERS --------------------------- */

app.use('/api/auth', routerAuth(passport))
app.use('/api/productos', routerProductos)
app.use('/api/carritos', routerCarritos)





/* --------- LISTEN ---------- */
const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))

