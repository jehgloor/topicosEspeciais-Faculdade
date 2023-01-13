const customExpress = require("./config/customExpress");

const app = customExpress();

app.listen(3000, () => console.log('Servidor rodando na porta 3000') )

// nosso site barra despesa , res e usar um atribuição de enviar
// quantas vezes a pessoa deu um get



//let cont =0;
//app.get('/text' ,(vem toda a informação de quem acessou a Pagina, response vai usar pra mandar um resultado para quem fe a requisição) )
//app.get('/despesa', ( req , res) => {
  //cont++;
  //res.send('Você está Rico! <br><br>Foi acessado a pagina ' + cont + ' vezes')
//})
        // outro exemplo
        // app.get('/xuxu' , function(request, response){
        //   cont++
        //   response.send('xuxu não esta disponivel <br><br>Foi acessado a pagina ' + cont + ' vezes')
        // })
     

      
       
    


 