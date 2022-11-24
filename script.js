const inputCep = document.getElementById('inputCep');
const btnCep = document.querySelector('.btnCep');

btnCep.addEventListener('click', handleClick);

function handleClick(event){
  event.preventDefault();

  const cep = inputCep.value;
  buscaCep(cep);
}

const logradouro = document.querySelector('.logradouro');
const bairro = document.querySelector('.bairro');
const localidade = document.querySelector('.localidade');
const uf = document.querySelector('.uf');
const cepDado = document.querySelector('.cep');

function buscaCep(cep){
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(response => response.json())
  .then(body => {
    logradouro.innerText = body.logradouro;
    bairro.innerText = body.bairro;
    localidade.innerText = body.localidade;
    uf.innerText = body.uf;
    cepDado.innerText = body.cep;
  });
}