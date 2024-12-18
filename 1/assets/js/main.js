let num = prompt("عدد را وارد کنید");
let mohit;
// alert("حاصل: " + num * 5);
// console.log("حاصل: " + num * 5);

if (num == 1) {
  let r = prompt("شعاع را وارد کنید");
  mohit = 2 * r * 3.14;
} else if (num == 2) {
  let width = prompt("طول را وارد کنید");
  let height = prompt("عرض را وارد کنید");
  mohit = (width + height) * 2;
} else if (num == 3) {
  let gh = prompt("قاعده را وارد کنید");
  let ert = prompt("ارتفاع را وارد کنید");
  mohit = (gh * ert) / 2;
} else {
  mohit = "error";
}

console.log(mohit);

switch (num) {
  case 1:
    let r = prompt("شعاع را وارد کنید");
    mohit = 2 * r * 3.14;
    break;
  case 2:
    let width = prompt("طول را وارد کنید");
    let height = prompt("عرض را وارد کنید");
    mohit = (width + height) * 2;
    break;
  default:
    mohit = "error";
    break;
}
