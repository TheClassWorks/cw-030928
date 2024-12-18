let count = 0;
for (let index = 0; index <= 10; index++) {
  let num = prompt("enter number: ");
  if (num % 4 == 0) {
    count++;
  }
}

alert(`Tedad mazrab 4 ${count} ta ast.`);
