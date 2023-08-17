const form = document.querySelector("#form");
const result = document.querySelector("#resultado1");
const patrimonio = document.querySelector("#nun1");
const aporte = document.querySelector("#nun2");
const taxa = document.querySelector("#nun3");
const tempo = document.querySelector("#nun4");

form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  let patr1 = parseFloat(patrimonio.value);
  let aport1 = parseInt(aporte.value);
  let tax1 = parseFloat(taxa.value);
  let temp = parseInt(tempo.value);
console.log( patr1,aport1,tax1,temp);

function calculajuros(PMT, i, n, PV) {

  var i = i / 100 //converter porcentagem

  return ((PV * (Math.pow(1+i, n)))) + ((PMT * (Math.pow(1 + i, n) - 1))/i)
}
let resultp = calculajuros(patr1,tax1,temp,aport1)
  result.innerHTML = `${resultp.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })}`;
});
