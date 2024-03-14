var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var paciente = document.querySelector('#primeiro-paciente');

var tdpeso = paciente.querySelector('.info-peso');
var peso = tdpeso.textContent;

var tdaltura = paciente.querySelector('.info-altura');
var altura = tdaltura.textContent;

//Calcular o imc
var imc = peso / (altura * altura);
var tdimc = document.querySelector('.info-imc');
tdimc.textContent = imc;

