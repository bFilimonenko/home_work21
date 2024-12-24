// Створити масив, довжину та елементи якого задає користувач. Після цього, відсортувати масив за зростанням.
// Далі, видалити з масиву елементи з 2-го по 4-й елемент. В міру змін масиву - виводити його вміст на сторінку.

let arr = [];
const arrLength = parseInt(prompt("Enter the number of the length you want to create an array"));

for (let i = 0; i < arrLength; i++) {
  let digit = parseInt(prompt("Enter digit #" + (i + 1)));
  arr.push(digit);
}

console.log(arr);

console.log(arr.sort((a, b) => a - b));

arr.splice(1, 2);// Not including

console.log(arr);