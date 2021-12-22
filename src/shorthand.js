// Shorthand Properties
const firstName = 'Carlos';
const surname = 'Eduardo';
const age = 24;

// se a propriedade e a variável tiver o mesmo nome,
// basta deixar só a variável que reconhece como um objeto atribuindo propriedade e valor

const person = {
  firstName,
  surname,
  age,

  // com o shorthand podemos declarar funções sem a necessidade de escrever a palavra "function",
  // apenas o nome da função com os parênteses e chaves

  hello(name) {
    return `Olá, ${name}!`;
  },
};

// person.hello(firstName);
console.log(person);
