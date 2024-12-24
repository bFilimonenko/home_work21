// Створити масив, довжину та елементи якого задає користувач. Після цього, відсортувати масив за зростанням.
// Далі, видалити з масиву елементи з 2-го по 4-й елемент. В міру змін масиву - виводити його вміст на сторінку.

let arr = [];
const arrLength = parseInt(prompt("Enter the number of the length you want to create an array"));

for (let i = 0; i < arrLength; i++) {
  let digit = parseInt(prompt("Enter digit #" + (i + 1)));
  arr.push(digit);
}

document.write(arr + "<br/>");

const compareFun = function compareFun(a, b) {
  return a - b;
};

document.write(arr.sort(compareFun) + "<br/>");

const deletingElem = arr.splice(1, 2);// Not including

document.write(arr);