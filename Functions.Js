// 1) Looping through an array.
const numbers = [10, 20, 30, 40];
// for-loop.
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
// for-Each.
numbers.forEach(num => console.log(num));
// for-of.
for (let num of numbers) {
  console.log(num);
}
// for-in.
for (let index in numbers) {
  console.log(numbers[index]);
}

// 2) Looping through an object.
const student = {
  name: "kittan",
  age: 21,
  grade: "A"
};

for (let key in student) {
  console.log(key, student[key]);
}

// 3) Using Map.
const marks = [50, 60, 70, 80];

const updatedMarks = marks.map(mark => mark - 10);

console.log(updatedMarks); // [40, 50, 60, 70]

// 4) Using Filter.
const values = [5, 12, 8, 25, 3, 15];

const result = values.filter(num => num > 10);

console.log(result); // [12, 25, 15]

// 5) Using Reduce.
const nums = [5, 10, 15, 20];

const total = nums.reduce((sum, num) => sum + num, 0);

console.log(total); // 50