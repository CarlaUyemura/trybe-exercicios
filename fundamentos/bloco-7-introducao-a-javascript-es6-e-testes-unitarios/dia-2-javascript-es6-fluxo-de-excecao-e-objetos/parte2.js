const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const array = Object.values(order);
const pessoa = array[3].delivery.deliveryPerson;
const dados = `${array[0]}, Telefone: ${array[1]}, `;
const end = Object.values(array[2])
const endConct = `R. ${end[0]}, Nº. ${end[2]}, AP: ${end[2]}`

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  return `Olá ${pessoa} entrega para: ${dados} ${endConct}`;
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.

}

orderModifier(order);
