// 1 დავალება

const age = 9;
if (age < 13) {
  console.log("ბილეთის ფასია 8 ლარი");
} else if (age < 18) {
  console.log("ბილეთის ფასია 12 ლარი");
} else {
  console.log("ბილეთის ფასია 18 ლარი");
}

// 2 დავალება

let Name = "Niki";
console.log(`Hello ${Name}`);
// ან
console.log("Hello " + Name);

// 3 დავალება

let num = 5;

if (num > 0) {
  console.log("დადებითია");
} else if (num === 0) {
  console.log("ნულია");
} else {
  console.log("უარყოფითია");
}

// 4 დავალება

let weekday = "სამშაბათი";

if (weekday === "შაბათი" || weekday === "კვირა") {
  console.log("დასვენების დღე");
} else {
  console.log("სამუშაო დღე");
}

// 5 დავალება

let arr = [1, 2, 3, 4, 5, 6];

if (arr.length > 5) {
  console.log("მეტია ხუთზე");
} else if (arr.length === 5) {
  console.log("ტოლია ხუთის");
} else {
  console.log("ნაკლებია ხუთზე");
}

// 6 დავალება

let amILazy = false;

if (amILazy === true) {
  console.log("ზარმაცი ვარ");
} else {
  console.log("არ ვარ ზარმაცი");
}

// 7 დავალება

let num1 = 2;
let num2 = 5;

let sum = num1 + num2;
let result = sum * sum;

console.log(result);

// 8 დავალება

let temperature = 60;

if (temperature < 15) {
  console.log("გრილა");
} else if (temperature === 20) {
  console.log("თბილა");
} else if (temperature === 25) {
  console.log("თითქმის ცხელა");
} else if (temperature === 30) {
  console.log("ცხელა");
} else if (temperature > 30) {
  console.log("ძალიან ცხელა");
}
