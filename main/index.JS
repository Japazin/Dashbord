
const form = document.querySelector('#form');
const result = document.querySelector('#resultado1');

const patrimonio = document.querySelector('#nun1');
const aporte = document.querySelector('#nun2');
const taxa = document.querySelector('#nun3');
const tempo = document.querySelector('#nun4')
form.addEventListener('submit',function (ev) {
  ev.preventDefault();
let patr1= parseFloat(patrimonio.value);
let aport1 =parseInt(aporte.value);
let tax1 = parseFloat(taxa.value); 
let temp=parseInt(tempo.value);

let resultp = patr1*((1+(tax1/100))**temp) ;//calculo de juros compostos sem aportes
  result.innerHTML =`${resultp.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;

});
