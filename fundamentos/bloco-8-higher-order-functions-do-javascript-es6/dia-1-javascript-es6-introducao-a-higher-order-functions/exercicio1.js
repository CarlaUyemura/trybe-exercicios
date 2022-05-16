// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

const newEmployees = () => {
  const employees = {
    id1: criaObj('Pedro Guerra'), 
    id2: criaObj('Luiza Drumond'), 
    id3: criaObj('Carla Paiva'),
  }
  return employees;
};

const criaEmail = (nome) => `${nome.replace(' ', '_').toLowerCase()}@trybe.com`;

const criaObj = (nomeCompleto) => ({Nome: nomeCompleto, Email:criaEmail(nomeCompleto),});

console.table(newEmployees());