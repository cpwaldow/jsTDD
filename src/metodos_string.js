const text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit';

text.startsWith('Lorem'); // true
text.startsWith('rem'); // false
text.startsWith('rem', 2); // true porque começa a partir do caractere 3 (começa do 0)

text.endsWith('elit'); // true
text.endsWith('eli', 55); // true

'lol'.repeat(10); // repete a string por 10 vezes

text.includes('ipsum'); // verifica se na string possui o valor passado no parâmetro
