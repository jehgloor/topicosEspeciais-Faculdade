




//now();


// const dia = moment("2018-25-02")

// console.log(dia);

// let teste = moment().add(7, 'days').add(1, 'months'); 
// console.log(teste);

// let teste2 = moment().add(360, 'days');
// console.log(teste2);

function addUmMes(){
    let sojaneiro = moment([2010, 0, 31]);  
    console.log(sojaneiro);
    let janeiroMaisUmMes = moment([2010, 0, 31]).add(1, 'months');
    console.log(janeiroMaisUmMes);
}



// let mostraData = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
// console.log(mostraData);

// let teste4 = moment('02/03/2018 00:00:00').format('YYYY-MM-DD HH:mm:ss');
// console.log(teste4);




console.log("=========MOMENT========");
const moment = require('moment');

function now (){
    //para obter a data atual 
    let dataHoje = moment();
    console.log(dataHoje);
    return dataHoje;
}

console.log("=========1° FORMA========");
let dataConvertendo = moment(now(), "DD/MM/YYYY");
console.log("data",dataConvertendo.format("YYYY/MM/DD"));

console.log("=========2° FORMA========");
console.log("data",moment().format("YYYY-MM-DD"));


console.log("=========3° FORMA========");
let dataBrasil = '04/12/1945';
let dataConvertendo2 = moment(dataBrasil, "DD/MM/YYYY");
console.log(dataConvertendo2.format("YYYY/MM/DD"));



console.log("==============LUXON===============");
console.log("=========1° FORMA========");
const { DateTime } = require("luxon");
let xuxu = DateTime.fromFormat('12-16-2017', 'MM-dd-yyyy')
console.log(xuxu.toFormat("yyyy/MM/dd"));

console.log("=========2° FORMA========");
let data = '04-04-1991';
let xuxu2 = DateTime.fromFormat(data, 'MM-dd-yyyy')
console.log(xuxu2.toFormat("yyyy-MM-dd"));
