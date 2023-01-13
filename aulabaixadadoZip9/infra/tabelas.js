class Tabelas{
 
    setConexao(conexao){
        console.log("Banco conectado com sucesso!");
        this.conexao = conexao;
    }

    criaDespesa(){
        sql = 'CREATE TABLE despesa'+'(id_lancamento INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+'valor double NOT NULL,'+
        'descricao VARCHAR(150) NOT NULL,)'
        this.conexao.query(sql)
    }
}

module.exports = new Tabelas