class Tabelas{

    init(conexao){
        console.log("Banco conectado com sucesso!");
    }
//despsa é de outro exercicio:
    criaDespesa(){
        sql = 'CREATE TABLE despesa'+'(id INT NOT NULL'
        'AUTO_INCREMENT PRIMARY KEY,'+'valor double NOT NULL,'+
        'descricao VARCHAR(150) NOT NULL,)'
        this.conexao.query(sql)
    }
    criaCarteira(){
        sql = 'create table Carteira'+'('
            'id integer not null auto_increment,'+
            'descricao varchar(100),'+
            'saldo double not null ,'+
            'limite double not null ,'+ 
            'nome varchar(100),'+
            'primary key (id))'
        this.conexao.query(sql)
    }
    criaCategoria(){
        sql = 'create table Categoria'+'('
            'nome varchar(100),'+
            'id integer not null auto_increment,'+
            'descricao varchar(100),'+
            'primary key (id))'
          this.conexao.query(sql)
    }

    criaLogin(){
        sql = 'create table Login'+'('
            'email varchar(100),'+
            'id integer not null auto_increment,'+
            'senha varchar(20),'+
            'primary key (id))'
         this.conexao.query(sql)
    }

    criaLancamento(){
        sql = 'create table Lancamento'+'('
            'id integer not null auto_increment,'+
            'idCarteira integer not null,'+
            'idCategoria integer not null,'+
            'descricao varchar(100),'+
            'valor double not null,'+
            'datal date,'+
            'tipo integer not null,'+
            'primary key (id),'+
            'foreign key (idCarteira) references carteira (id),'+
            'foreign key (idCategoria) references categoria (id))'
            this.conexao.query(sql)
    }

}

module.exports = new Tabelas