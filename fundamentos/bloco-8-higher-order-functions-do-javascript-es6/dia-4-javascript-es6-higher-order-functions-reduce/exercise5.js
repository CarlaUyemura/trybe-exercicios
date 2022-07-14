//🚀 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = names.reduce((acc, string) => {
  const novoName = string.split('');
  novoName.forEach((valor) => valor === 'A' || valor === 'a' ? acc +=1 : null ) 
  return acc}, 0);

console.log(containsA);
