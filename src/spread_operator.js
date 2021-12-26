const front = ['react', 'vue', 'angular'];
const back = ['python', 'ruby', 'nodejs'];

/* console.log([...'will']); // ['w', 'i', 'l', 'l']
console.log(...front); // react vue angular */

// jeito antigo de concatenar
// let fullstack = front.concat(back);

// ES6

const fullstack = [...front, ...back]; // ['react', 'vue', 'angular', 'python', 'ruby', 'nodejs']
console.log(fullstack);
console.log('');

// spread operators dentro de função
const makeSandwich = (bread, cheese, sauce) => {
  console.log(
    `Your sandwish with  ${bread} bread, ${cheese} cheese and ${sauce} is done!`,
  );
};

const igredientes = ['white', 'cheddar', 'barbecue'];

makeSandwich(...igredientes);

const sum = (x, y, z) => x + y + z;

const arrNumber = [10, 5, 19];

console.log(sum(...arrNumber));
