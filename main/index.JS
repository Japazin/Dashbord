
const form = document.querySelector('#form');
const patrimonio = document.querySelector('#nun1');

form.addEventListener('submit',function (ev) {
  ev.preventDefault();
let result = document.querySelector('#resultado1');
let patrimoni1= patrimonio.value;

  result.innerHTML +=`${patrimoni1}`;

});
