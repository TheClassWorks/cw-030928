let a = prompt("a را وارد کنید");
let b = prompt("b را وارد کنید");
let c = prompt("c را وارد کنید");

let max = a;
if (b > max) {
  if (b > c) max = b;
  else max = c;
}

console.log(max);
