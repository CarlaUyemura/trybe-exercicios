const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

//1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
//Dica: use a função find.

const authorBornIn1947 = (element) => {
  return element.author.birthYear === 1947;
};
console.log(books.find((authorBornIn1947)).author.name);

// 2 - Retorne o nome do livro de menor nome.
// Dica: use a função forEach.

function smallerName() {
  // escreva aqui o seu código
  let birthYear = books[0].name;
  books.forEach (element => {
    if(element.name.length < birthYear.length){
        birthYear = element.name;
    } 
  });
  // Variável birthYear que receberá o valor do menor nome;
  return birthYear;
}
console.log(smallerName());

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

function getNamedBook(element) {
  // escreva seu código aqui
  return element.name.length === 26;
}

console.table(books.find(getNamedBook));

// 4 - Ordene os livros por data de lançamento em ordem decrescente.

function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código 
  return books.sort((a, b) => b.releaseYear - a.releaseYear)
}


console.table(booksOrderedByReleaseYearDesc());

//🚀 5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.


//Século XX: ano 1901 ao ano 2000
function everyoneWasBornOnSecXX(array) {
  // escreva seu código aqui
  const expectedResult = array.every((book) => book.author.birthYear > 1901);
  return `Todas as pessoas autoras nasceram no século XX: ${expectedResult}`;
}

console.log(everyoneWasBornOnSecXX(books));

//🚀 6 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.



function someBookWasReleaseOnThe80s(array) {
  // escreva seu código aqui
  const expectedResult = array.some((book) => book.releaseYear > 1980 && book.releaseYear < 1989);
  return `Algum livro lançado na década de 80: ${expectedResult}`;
}
console.table(someBookWasReleaseOnThe80s(books));

// 7 - Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário

const expectedResult = false;

function authorUnique() {
  // escreva seu código aqui
  return books.every((element) => {
   return !books.some((element2) => 
     element.author.name !== element2.author.name && element.author.birthYear === element2.author.birthYear)}
  )};


console.log(authorUnique());
