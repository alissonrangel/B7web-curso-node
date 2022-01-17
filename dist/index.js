"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
let nome: string = "Alisson";
let idade: number = 119;

console.log(nome + " - idade: "+ idade);
*/
const Matematica2_1 = require("./Matematica2");
const validator_1 = __importDefault(require("validator"));
const Matematica = require('./Matematica');
let n1 = 10;
let n2 = 2;
console.log(Matematica.somar(n1, n2));
console.log((0, Matematica2_1.somar)(n1, n2));
console.log(validator_1.default.isEmail('alisson@mail.xxx'));
console.log("Alisson Rangel");
