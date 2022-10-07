const fs = require('fs').promises;

async function readSimpsons () {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8')
  const simpsons = JSON.parse(fileContent);
  const simpsonsMap = simpsons.map(({id, name}) => `Personagem: ${id} - ${name}`).forEach(element => {
    console.log(element);
  });
  return simpsonsMap;
}

function main() {
  readSimpsons();
}

main();