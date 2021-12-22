// Default Parameters

// colocando um valor  default nos parâmetros,
// caso nada seja enviado na ativação da função

const hello = (name = 'Carlos', surname = 'Eduardo') => {
  console.log(`Hello ${name} ${surname}! How are you?`);
};

hello(); // Hello Carlos Eduardo! How are you?

hello('Ivan', 'Gabriel'); // Hello Ivan Gabriel! How are you?

// quando é passado apenas um parâmetro
hello('Gabriela'); // Hello Gabriela Eduardo! How are you?
