// Challenge coding 2024
// 3/366
// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript

function maps(x) {
  return x.map((n) => n * 2);
}
console.log(maps([1, 2, 3]));

function mapsForEach(x) {
  let result = [];
  x.forEach((n) => {
    result.push(n * 2);
  });
  return result;
}
console.log(mapsForEach([1, 2, 3, 4]));

function mapsFor(x) {
  const result = [];
  for (let i = 0; i < x.length; i++) {
    result.push(x[i] * 2);
  }
  return result;
}

console.log(mapsFor([1, 2, 3, 4]));

function mapsForIn(x) {
  const result = [];
  for (let index in x) {
    result.push(x[index] * 2);
  }

  return result;
}

console.log(mapsForIn([1, 2, 3, 4]));

function mapsForOf(x) {
  const result = [];
  for (let index of x) {
    result.push(index * 2);
  }
  return result;
}

console.log(mapsForOf([1, 2, 3, 4]));

function mapsDoWhile(x) {
  let result = [];
  let i = 0;

  do {
    result.push(x[i] * 2);
    i += 1;
  } while (i < x.length);

  return result;
}

console.log(mapsDoWhile([1, 2, 3, 4]));

function mapsWhile(x) {
  let result = [];
  let i = 0;

  while (i < x.length) {
    result.push(x[i] * 2);
    i++;
  }

  return result;
}

console.log(mapsWhile([1, 2, 3, 4, 5]));
