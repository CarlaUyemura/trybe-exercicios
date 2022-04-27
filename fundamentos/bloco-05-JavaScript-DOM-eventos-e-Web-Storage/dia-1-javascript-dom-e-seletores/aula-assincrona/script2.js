   // 1- Acesse o elemento elementoOndeVoceEsta .
   const elemento = document.getElementById('elementoOndeVoceEsta');
  // 2- Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
 elemento.parentElement.style.backgroundColor = 'red'; 
// 3- Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
 elemento.firstElementChild.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic placeat explicabo, mollitia eligendi corporis et reiciendis dolor doloribus deleniti amet vel est totam, enim accusantium? Enim beatae commodi officiis eveniet.'
// 4- Acesse o primeiroFilho a partir de pai .
const elemento2 = document.getElementById('pai');
console.log(elemento2.firstElementChild);
// 5- Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
console.log(elemento.previousElementSibling)
// 6- Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
console.log(elemento.nextSibling)
// 7- Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
console.log(elemento.nextElementSibling)
// 8- Agora acesse o terceiroFilho a partir de pai .
console.log(elemento2.children[2])

// 1-Crie um irmão para elementoOndeVoceEsta .
let irmao = document.createElement('section')
elemento2.appendChild(irmao);
irmao.id = 'novoIrmao';

// 2-Crie um filho para elementoOndeVoceEsta .
let filho = document.createElement('div');
elemento.appendChild(filho);
filho.id = 'novoFilho'
// 3-Crie um filho para primeiroFilhoDoFilho .
let filho2 = document.createElement('section');
elemento.firstElementChild.appendChild(filho2)
filho2.id = 'novoFilhoDoFilho'
// 4-A partir desse filho criado, acesse terceiroFilho .
console.log(filho2.parentElement.parentElement.nextElementSibling)

// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
// console.log(paiDoPai)

// let teste = document.querySelectorAll('section');
// console.log(teste);
// for(i = 0; i < teste.length; i +=1){
//   let element = teste[i];
// console.log(element);

//   if(element !== id('pai') && element !== id('elementoOndeVoceEsta') && element !== id('primeiroFilhoDoFilho')){
//     teste.removeChild(element)
//   }
// }

const primeiroFilho = elemento2.firstElementChild;

elemento2.removeChild(primeiroFilho)

const segFilhoDoFilho = elemento.firstElementChild.nextElementSibling;
elemento.removeChild(segFilhoDoFilho);


const tercFilho = elemento2.children[1];

elemento2.removeChild(tercFilho)

const quartoFilho = elemento2.children[1];
const ultimoFilho = elemento2.lastElementChild;
elemento2.removeChild(quartoFilho)
elemento2.removeChild (ultimoFilho)

