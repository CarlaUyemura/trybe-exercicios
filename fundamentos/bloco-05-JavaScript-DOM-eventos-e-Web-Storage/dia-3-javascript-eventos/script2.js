function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();
//Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function addDias(dezDaysList){
  let ul = document.getElementById('days')
for(let i of dezDaysList){
  let li = document.createElement('li');
  li.classList.add('days');

  if(i == 24 || i == 25 || i == 31){
    li.classList.add('holiday');
  }
  if (i == 4 || i == 11 || i == 18 || i == 25){
    li.classList.add('friday')
  }
  li.innerText = i;
  ul.appendChild(li);

}
}addDias(dezDaysList);

// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
let botao = document.createElement('button');
function criarFeriado(feriados){
  
  botao.id = 'btn-holiday';
  botao.innerText = 'Feriados';
  document.querySelector('.buttons-container').appendChild(botao)
}criarFeriado();

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
botao.addEventListener('click', addFeriados);

function addFeriados(event){
  let array = document.querySelectorAll('.holiday')
  for(let i of array){
    if(i.style.backgroundColor == "black"){
      i.style.backgroundColor = "rgb(238,238,238";
    }else{
      i.style.backgroundColor = "black"
    }
    
  }
}

// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

let botao2 = document.createElement('button');

function criarSexta(){
  
  botao2.id = 'btn-fryday';
  botao2.innerText = 'Sexta-feira';
  document.querySelector('.buttons-container').appendChild(botao2)
}criarSexta();

// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

botao2.addEventListener('click', alteraTexto);

function alteraTexto(event){
  let array = document.querySelectorAll('.friday');
  for(let i of array){
    if(i.innerText == 'SEXTOU'){
      i.innerText = Number(i.previousElementSibling.innerText) +1;
    } else{
      i.innerText = 'SEXTOU'
    }
  }
}

// Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

let dias = document.querySelectorAll('.days')

for(let i of dias){
  i.addEventListener('mouseover', mouseOverZoom);
}
for(let i of dias){
  i.addEventListener('mouseout', mouseOutZoom)
}

function mouseOverZoom(event){
  event.target.style.fontSize = '40px'
}
function mouseOutZoom(event){
  event.target.style.fontSize = '20px'
}

// Exercício 7:
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function addTarefa(string){
  let span = document.createElement('span');
  span.innerText = string;
  document.getElementsByClassName('my-tasks')[0].appendChild(span);
}
addTarefa('Cozinhar');

// Exercício 8:
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function alteraCor(cor){
  div = document.createElement('div')
  div.style.backgroundColor = cor;
  div.className = 'task';
  document.getElementsByClassName('my-tasks')[0].appendChild(div);
}
alteraCor('blue');

// Exercício 9:
// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

let taskQuery = document.querySelector('.task');
taskQuery.addEventListener('click', atribuiClass);

function atribuiClass(event){
  if(taskQuery.className == 'task'){
    event.target.className = 'task-selected'
  } else{
    event.target.className = 'task'
  }

}

// Exercício 10:
// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .

taskSelected = document.getElementsByClassName('task-selected')
days = document.querySelectorAll('.days')

for (let i of days){
i.addEventListener('click',adicionaEventoCor)
}
function adicionaEventoCor(event){

if(event.target.style.color == 'blue'){
event.target.style.color = '#777'
}
else{
event.target.style.color = 'blue'
}

} 