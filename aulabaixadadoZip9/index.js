// npm install express 
// npm --save-dev install nodemon 
// npm install consign
//npm install body-parser
// Comando para iniciar a aplicação: npm start
// npm install mysql
// importa o custum express
// prompt : curl -d "id_lancamento=1&valor=29.90&descricao=teste" http://localhost:3000/despesa
//despesa q na vdd é lancamento 


//id2
//tabela cliente id prima
//tabela professor id_lacamento 
//


const customExpress = require('./config/customExpress') // chama o arquivo



const conexao = require('./infra/connection') 
const tabelas = require('./infra/tabelas')





conexao.connect(erro =>{
    if(erro){
        console.log('Erro na conexão com o banco'+erro)
    }else{
        console.log("conectado ao banco com sucesso");
       
        tabelas.setConexao(conexao);
       

        const app = customExpress();
        app.listen(3000, () => console.log('Servidor ativo na porta 3000'))
       
      
    }
})



// app.listen(3000, () => console.log('Servidor ativo na porta 3000'))





// get - listar 
// post add despesa 

// {
// "id":"1"
// "descricao":"farmacia"
// "valor":"30"
// "data":"2022/04/25"
// "id_carteira_fk":"1"
// }






// "lancamento 
// Id
// desc 
// valor
// data 
// id_carteira_fk"  ----- carteira   --------   login 
//                     id                  
//                     nome 
//                     desc

                        
                    //}


//mandar o json esse cara de cima estar pronto e batendo junto com o banco de dados.



