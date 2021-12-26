const data = {
  name: 'Carlos',
  surname: 'Eduardo',
  age: 24,
  social: {
    twitter: '@cewaldow',
    instagram: '/cpwaldow',
  },
};

// utlizando destructing

const { name, surname } = data;
const { twitter, instagram } = data.social;

console.log(name);
console.log(surname);
console.log(twitter);
console.log(instagram);

// mudando o nome da variável

const { instagram: ig } = data.social;

console.log(ig);

// adicionando um valor default para uma variável caso não tenha no objeto

// const { city } = data; // undefined

const { city = 'São Paulo' } = data;

console.log(city);
console.log('');

// redeclarar um valor de um item do objeto por um valor default

// const { name = 'André' } = data; Identifier 'name' has already been declared

// destructing em array

const arr = ['Ivan', 'Gabriel', 25, 'Piraporinha'];

const [nome, sobrenome, idade, cidade] = arr;

console.log(nome);
console.log(sobrenome);
console.log(idade);
console.log(cidade);
console.log('');

// Swap de variáveis com destructing

let a = 42;
let b = 21;

console.log(`a: ${a}`);
console.log(`b: ${b}`);

[a, b] = [b, a];

console.log(`a: ${a}`);
console.log(`b: ${b}`);
