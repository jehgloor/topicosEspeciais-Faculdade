function bucarP(){
    //getElementsByTagName procura todas as tags na pagina inteira pelo nome da tag
    var paragrafo = document.getElementsByTagName("p");
    console.log(paragrafo); // vai em console e mostra todos os atributos e array da variavel ( q no caso aqui é um array tag)
    alert(paragrafo[1].textContent); // função para mostrar na tela  
    
}

function setBodyAttr(attr,value){
    if(document.body) eval ('document.body.' + attr + ' = " '+value+' " ' ); // document.body.{qualquer atributi do body} = "qualquer valor do select"

    else notSupported();

}

