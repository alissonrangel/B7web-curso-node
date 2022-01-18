/*
let nome: string = "Alisson";
let idade: number = 119;

console.log(nome + " - idade: "+ idade);
*/
import {somar as somar2} from './Matematica2';
import validator from 'validator';

const Matematica = require('./Matematica');

let n1: number = 10;
let n2: number = 2;

console.log(Matematica.somar(n1, n2));
console.log(somar2(n1, n2));

console.log(validator.isEmail('alisson@mail.xxx'));

console.log("Alves Escórcio de Carvalho");
