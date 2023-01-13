const mysql = require('mysql'); // chamando um arquivo js 

const conexao = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    port:3310,
    database:"aulanode"
})
// é pra torna visivel 
module.exports = conexao
