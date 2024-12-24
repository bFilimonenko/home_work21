// Дано массив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
//   Знайти суму і кількість додатних (положительных) елементів.
//   Знайти мінімальний (найменший) елемент масива і його індекс.
//   Знайти максимальний (найбільший) елемент масива та його індекс.
//   Визначити кількість від’ємних (отрицательных) елементів масива.
//   Знайти кількість непарних додатних елементів.
//   Знайти кількість парних додатних елементів.
//   Знайти суму парних додатних елементів.
//   Знайти суму непарних додатних елементів.
//   Знайти добуток всіх додатних елементів.
//   Змінити на 0 всі елементи масива окрім найбільшого.

const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log(array);

const result = {
  positiveDigits: [],       //done
  negativeDigits: [],       //done
  positiveDigitsSum: 0,     //done
  maximumDigitIndex: 0,     //done
  maximumDigit: -99999,     //done
  minimumDigit: 99999,      //done
  evenPositiveDigits: [],   //done
  oddPositiveDigits: [],    //done
  evenPositiveDigitsSum: 0, //done
  oddPositiveDigitsSum: 0,  //done
  positiveDigitsProduct: 1  //done
};

for (let i = 0; i < array.length; i++) {
  if (array[i] >= 0) {
    result.positiveDigits.push(array[i]);
    result.positiveDigitsSum += array[i];
    result.positiveDigitsProduct *= array[i];

    if (array[i] % 2 === 0) {
      result.evenPositiveDigits.push(array[i]);
      result.evenPositiveDigitsSum += array[i];
    } else {
      result.oddPositiveDigits.push(array[i]);
      result.oddPositiveDigitsSum += array[i];
    }
  } else {
    result.negativeDigits.push(array[i]);
  }

  if (result.maximumDigit < array[i]) {
    result.maximumDigit = array[i];
    result.maximumDigitIndex = i;
  }

  if (result.minimumDigit > array[i]) {
    result.minimumDigit = array[i];
  }
}

console.log(result);

// Changing the entire array
console.log(array.fill(0, 0, result.maximumDigitIndex).fill(0, result.maximumDigitIndex + 1));

