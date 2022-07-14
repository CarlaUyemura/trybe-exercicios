import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

// const teste = (item) => {

// return (
// <section>{item}</section>
// )

// };

class Content extends React.Component {
render() {
  return (
    <section>
    {
    conteudos.map(({conteudo, bloco, status}) => 
      <ul key={conteudo}>
      <li>{`O conteúdo é: ${conteudo}`}</li>
          <li>{`Status: ${bloco}`}</li>
            <li>{`Bloco: ${status}`}</li>
        </ul>
      )}
    </section>
  );
};
};

export default Content;