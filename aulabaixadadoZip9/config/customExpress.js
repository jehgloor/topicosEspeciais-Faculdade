const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')


// ta aplicando middle 
module.exports = () => {
    const app = express()
    
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json())
    consign().include('controller').into(app)
    
    return app
}

// inicializar as coisas que precisa pra funcionar
//nome da pasta inicializar
// customizandoExpress.js
//