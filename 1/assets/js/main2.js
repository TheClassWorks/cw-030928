let a = prompt("a را وارد کنید");
let b = prompt("b را وارد کنید");
let c = prompt("c را وارد کنید");

delta = Math.pow(b, 2) - 4 * a * c;

// console.log(delta);
if (delta < 0) {
  console.log("ریشه حقیقی ندارد");
} else {
  x1 = (-b + Math.sqrt(delta)) / (2 * a);
  x2 = (-b - Math.sqrt(delta)) / (2 * a);
  if (x1==x2) {
    console.log(x1);    
  }
  else{
    console.log("rishe 1: "+x1);
    console.log("rishe 2: "+x2);    
  }
}
