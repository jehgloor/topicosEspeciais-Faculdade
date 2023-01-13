module.exports = app =>{
    app.post('/movimento',(req,res) => {
        res.send(valorTotal(2,6)+'<br><br>'+ arrowValorTotal(6,8)+'<br><br><br>'+cambio('dolar',5)
    +'<br><br>'+arrowCambio('euro',9.52))
    });
    //app.post('/movimento',(req,res) => res.send('Você está em movimento com um POST'));
    app.get('/gastos',(req,res) => {
       //res.send('Você está em GASTOS com um GET<br>blala');
        res.send(valorTotal(2,6)+'<br><br>'+ arrowValorTotal(6,8)+'<br><br><br>'+cambio('peso argentino',9.52)
        +'<br><br>'+arrowCambio('euro',9.52));
    });
}

function valorTotal(valor, quantidade){
    let msg = "Cálculo:  Preço: R$ "+valor+ "x"+ quantidade+".O total é: "+(valor*quantidade)
    console.log(msg);
    return msg;
}

let arrowValorTotal = (valor, quantidade)=>{
    let msg = "Cálculo: Preço: R$ "+valor+ "x"+ quantidade+".O total é: "+(valor*quantidade)
    console.log(msg);
    return msg;
}

// 3. Desenvolva uma função chamada cambio, que receba um
// parâmetro chamado moeda e um parâmetro chamado valor.
// Dentro da função, retorne o resultado do valor em Reais.

function cambio(moeda,valor){
    let calculo
    
    if (moeda=='dolar'){
        calculo = valor/4.76;   
    }
    if (moeda=='euro'){
       calculo = valor/5.26;
    }
    if(moeda=='peso argentino'){
        calculo = valor/0.04;
    }
    if(moeda=='libra'){
        calculo = valor/6.25;
    }
    if(moeda=='iene'){
        calculo = valor/0.04;
    }
    let mensag = "valor em reais da moeda " +moeda+ " é de: "+calculo; 
    console.log(mensag);
    return mensag;
}
let arrowCambio = (moeda,valor) =>{
    let calculo
    
    if (moeda=='dolar'){
        calculo = valor/4.76;   
    }
    if (moeda=='euro'){
       calculo = valor/5.26;
    }
    if(moeda=='peso argentino'){
        calculo = valor/0.04;
    }
    if(moeda=='libra'){
        calculo = valor/6.25;
    }
    if(moeda=='iene'){
        calculo = valor/0.04;
    }
    let mensag = "valor em reais da moeda " +moeda+ " é de: "+calculo; 
    console.log(mensag);
    return mensag;
}