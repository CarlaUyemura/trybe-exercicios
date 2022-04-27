// exerecicio 1
const a = 10;
const b = 30 ;

let adicao = (a + b);
let subtracao = (a - b);
let multiplicacao = (a * b);
let divisao = (a / b);
let modulo = (a % b);
 
console.log(adicao)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)
console.log(modulo)
////////////////////////////////////

// exercicio 2
function exerecicio2(resultado){
const num1 = 15;
const num2 = 18;

if(num1 > num2){
 
  return num1;
} 
else{
  return num2;
}
console.log(resultado);
}

console.log(exerecicio2());

// exerecicio 3

const number1 = 35;
const number2 = 18;
const number3 = 17;

if(number1 > number2 && number1 > number3){
  console.log(number1);

}else if(number2 > number1 && number2 > number3){
  console.log(number2);

}else{
  console.log(number3);
}
////////////////////////////////////////

// exerecicio 4

const number= 0;

if(number < 0){
  console.log("negative");

} else if(number > 0){
  console.log("positive");

}else {
  console.log(0)
}
/////////////////////////////////////////

// exercicio 5

const ang1 = 50;
const ang2 = 80;
const ang3 = 50;

if(ang1 + ang2 + ang3 === 180 ){
  console.log(true);
}else if(ang1 + ang2 + ang3 < 0){
  console.log("Error");
}else{
  console.log(false);
}
// exerecicio 6
let pecaXadrez = "Rainha";
let lower = pecaXadrez.toLowerCase();

if(lower === "rainha" ){
  console.log(pecaXadrez + "-> Todos os lados e quantas casas quiser!");

}else if(lower === "rei"){
  console.log(pecaXadrez + "-> Todos os lados e anda uma casa por vez!");
}