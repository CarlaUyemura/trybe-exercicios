
// const btnEnviar = document.querySelector("#btn-enviar");

// btnEnviar.addEventListener('click', function(event){
//   event.preventDefault();
// })


const validate = new JustValidate('#form');

validate.addField( '#name' ,  [ 
    { 
      rule : 'minLength' , 
      value : 10 , 
      errorMessage: 'Mínimo 10 caracteres!'
    } , 
    { 
      rule : 'maxLength' , 
      value : 40 , 
    } , 
    {
      rule : 'required' , 
      errorMessage: 'Campo Obrigatório!'
    }
  ] ) 
  .addField ( '#email' ,  [ 
    { 
      rule : 'required' , 
      errorMessage: 'Email obrigatório' , 
    } , 
    { 
      rule : 'email' , 
      errorMessage : 'Email inválido!' , 
    } , 
  ] ) ;

