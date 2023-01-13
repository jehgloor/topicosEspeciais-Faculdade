
module.exports = app => {
   app.get('/despesa', (req, res) => res.send(`Você acessou GET`))


   app.post('/despesa', (req, res) => {
     console.log(req.body)
   res.send('Você esta na rota despesa via POST')},


   app.post('/carteira', (req, res) => {
    console.log(req.body)
  res.send('Você esta na rota cateira via POST')}



   
   

   )
   )}
// testar POST 
// no terminal 
//curl -d "nome=juliana" http://localhost:3000/despesa


