/* const text = 'Carlos';

console.log(Array.from(text)); */

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
