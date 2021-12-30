// Rest Params

// método antigo

function multiply(mult, arg1, arg2, arg3) {
  const arr = [];
  arr.push(mult * arg1);
  arr.push(mult * arg2);
  arr.push(mult * arg3);
  return arr;
}

console.log(multiply(2, 1, 2, 3));

// com o rest params

function multiply2(mult, ...args) {
  return args.map((arg) => arg * mult);
}

console.log(multiply2(2, 1, 2, 3, 4, 5, 6));
