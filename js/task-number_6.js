let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Введіть число:");

  if (input === null) {
    break;
  }

  if (isNaN(input) || input === "") {
    alert("Було введено не число, попробуйте ще раз");
    continue;
  }
  numbers.push(Number(input));
}

for (let number of numbers) {
  total += number;
}

console.log(`Загальна сума чисел дорівнює ${total}`);
