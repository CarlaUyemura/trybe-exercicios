import Tv from './fixando';
import Estudante from './exercicioDia1';
import * as Exercise from './fixandoDia2';
import { MyClass } from './fixandoDia2';
import * as Fixando3 from './fixandoDia3';

const tv1 = new Tv('aoc', 50, 35, ['HDMI', 'Ethernet', 'Wifi']);

tv1.turnOn();

const estudante1 = new Estudante(123455678, 'Rukia', [10, 9, 7, 8], [10, 9]);

console.log(estudante1);
console.log(`Total das notas: ${estudante1.calculaTotalDasNotas()}`);
console.log(`Média média das notas: ${estudante1.calculaMediaDasNotas()}`);

const supClass = new Exercise.Superclass();
const subClass = new Exercise.Subclass();

Exercise.myFunc(supClass);
Exercise.myFunc(subClass);

const minhaClasse = new MyClass(8);
console.log(minhaClasse.myfunc(10));
console.log(minhaClasse);

const char1 = new Fixando3.MeleeCharacter('Anão');
const char2 = new Fixando3.RangedCharacter('Elfo');

Fixando3.funcCharacter(char1);
Fixando3.funcCharacter(char2);
