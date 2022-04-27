const myName = "Carla Uyemura";
const birthCity = "Votuporanga";
let birthYear = 1991;
birthYear = 2030;

console.log(myName);
console.log(birthCity);
console.log(birthYear);

/////////////////////////////////////////

let patientId = '50';
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof patientAge);

//////////////////////////////////////////////

const base = 5;
let height = 8;
const area = base * height;
console.log(area);
const perimeter = 2*(base + height);
console.log(perimeter);

/////////////////////////////////////////////

const nota = 50;

if(nota >= 80){
  console.log("Parabens, voce foi aprovado!");

}else if(nota < 80 && nota >= 60){
  console.log("Você está na nossa lista de espera");
}
else{
  console.log("Você foi reprovada(o)");
}
//////////////////////////////////////////////////


const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo);

/////////////////////////////////////////////////

const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;

console.log(listaDeCompras);

/////////////////////////////////////////////////////

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
//////////////////////////////////////////////////

const currentHour = 20;
let message ="";

if(currentHour >= 22){
  message = "Não deveríamos comer nada, é hora de dormir";
  console.log(message);
}else if(currentHour >= 18 && currentHour < 22){
  message = "Rango da noite, vamos jantar :D";
  console.log(message);
}else if(currentHour >= 14 && currentHour < 18){
  message = "Vamos fazer um bolo pro café da tarde?" 
  console.log(message);
}else if(currentHour >= 11 && currentHour < 14){
  message = "Hora do almoço!!!";
  console.log(message);
 } else{
    message = "Hmmm, cheiro de café recém passado";
    console.log(message);
  }
  console.log(message);

  ///////////////////////////////////////////////////

  console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
////////////////////////////////////////////

let weekDay = "domingo";

if(weekDay === "segunnada-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira"){
  console.log("Oba, mais um dia de aprendizado na Trybe >:D")
}else {
  console.log("FINALMENTE, descanso merecido UwU");
}

///////////////////
console.log(!(2 + 2) === 4);

//////////////////////////

const squirtle = "melhor pokemon inicial";

console.log(!squirtle); // false

///////////////////////////////

console.log(!42); // false

console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.


console.log(!null); // true

///////////////////////
console.log(!undefined); // true

/////////////////////////////

let status = "Aprovada";

switch (status) {
  case "Aprovada":
    console.log("Parabéns você foi aprovada!");
    break;
  case "Reprovada":
    console.log("Desculpe não foi dessa vez!");
    break;
  case "lista":
    console.log("Parabéns você esta na lista de espera!");
    break;  
}

