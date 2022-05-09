const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};


function criandoObjeto (objeto, key, valor) { 
  objeto[key] = valor;
  return objeto;
    } 
    console.log(criandoObjeto(customer, "lastName:", 'Fernandes'));

    const student1 = {
      Html: 'Muito Bom',
      Css: 'Bom',
      JavaScript: 'Ótimo',
      SoftSkills: 'Ótimo',
    };
    
    const student2 = {
      Html: 'Bom',
      Css: 'Ótimo',
      JavaScript: 'Ruim',
      SoftSkills: 'Ótimo',
      Git: 'Bom', // chave adicionada
    };

    const list = (student) => {
       const array = Object.keys(student);

       for (const key in array) {
         console.log(`${array[key]}, Nivel: ${student[array[key]]}`);
       }
      } 
      console.log(student1);
      list(student1);