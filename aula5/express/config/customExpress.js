// console.log('alguma coisa altera e salva');

// aqui ta carregando a biblioteca do express 
const express = require('express');

const consign = require('consign')



module.exports = () =>{
    const app = express();

    consign().include('controller').into(app)
    // consign()
    //   .include('controller')
    //   .into(app)
    return app
}
