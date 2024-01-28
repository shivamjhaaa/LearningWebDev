//Callback : Passing function as an arguments
// used mainly in asynchronous function

function sq(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function solve(a, b, fn) {
  let x = fn(a);
  let y = fn(b);
  return x + y;
}

console.log(solve(2, 3, cube));
