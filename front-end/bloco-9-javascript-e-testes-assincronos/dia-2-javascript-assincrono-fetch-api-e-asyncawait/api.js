const apiUrl = 'https://api.coincap.io/v2/assets';


const cripto = ({data}) => {
const filter = data.filter(({rank}) => rank <= 10)
.map(({name, symbol, priceUsd}) => ({name, symbol, priceUsd}));
  insereLI(filter);
};

const insereLI = (item) => {
 item.forEach(({name, symbol, priceUsd}) => {
    const cripto = document.querySelector('#list-criptos');
    const li = document.createElement('li');
    li.innerHTML = `${name}(${symbol}): ${priceUsd}`;
    cripto.appendChild(li)
  });
};

const fetchCripto = async () => {
  const resposta = await fetch(apiUrl);
  const data = await resposta.json();
  cripto(data)
};

fetchCripto();