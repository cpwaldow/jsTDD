// Array from

const markup = `
<ul id="list">
  <li>Carlos</li>
  <li>William</li>
  <li>Gabriel</li>
</ul>
`;

document.body.innerHTML = markup;

const list = document.querySelectorAll('li'); // NodeList

const listArray = Array.from(list); // Array

const names = listArray.map((name) => name.textContent); // ['Carlos', 'William', 'Gabriel']

console.log(names);

// Array of
// permite criarmos um array através de certos elementos
const array = Array.of(1, 4, 'Carlos Eduardo', { city: 'São Paulo' });

console.log(array);

// array.find e array.findIndex

const data = [
  {
    name: 'Carlos',
    age: 24,
    city: 'São Paulo',
  },
  {
    name: 'Nathalie',
    age: 22,
    city: 'Cotia',
  },
];

const simpleArray = [4, -5, 0, -1];

const underZero = simpleArray.find((x) => x < 0); // -5 (primeiro valor que a condição é atendida)

const underZeroIndex = simpleArray.findIndex((x) => x < 0); // 1 index do array

console.log(underZero);
console.log(underZeroIndex);

const carlos = data.find((person) => person.name === 'Carlos'); // { name: 'Carlos', age: 24, city: 'São Paulo' }
const nathalieIndex = data.findIndex((person) => person.name === 'Nathalie'); // 1

console.log(carlos);
console.log(nathalieIndex);
