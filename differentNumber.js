function randomNumber() {
  return Math.floor(Math.random() * 100);
}

function differentNumber(first_array, second_array) {
  let count =
    first_array.length > second_array.length
      ? first_array.length
      : second_array.length;
  let sum_one = 0;
  let sum_two = 0;
  for (let i = 0; i < count; i++) {
    sum_one += first_array[i] ? first_array[i] : 0;
    sum_two += second_array[i] ? second_array[i] : 0;
  }
  let result = Math.abs(sum_one - sum_two);
  console.log("Different number: " + result);
  console.log("First array: " + first_array.join(", "));
  console.log("Second array: " + second_array.join(", "));
}

let array_one = [];
let array_two = [];
let rand_point = Math.floor(Math.random() * 15);
for (let i = 0; i < 15; i++) {
  let num = randomNumber();
  array_one.push(num);
  if (i !== rand_point) {
    array_two.push(num);
  }
}

differentNumber(array_one, array_two);