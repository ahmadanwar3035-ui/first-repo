// question number 1
// for (let i = 1; i <= 20; i++) {
//   console.log(i, "print 20 ");
// }

// question number 2
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 !== 0) console.log(i, "old number");
// }

// question number 3
// for (let i = 1; i <= 10; i++) {
//   console.log(i, "sum");
// }

// question number 4
// let sum = 0;
// for (let i = 1; i <= 20; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// question number 5
// let number = 5;

// for (let i = 1; i <= 10; i++) {
//   console.log(number + " x " + i + " = " + (number * i));
// }

// question number 6
// let number = Number(prompt("enter the value "));
// console.log(number);
// for (let i = 1; i <= 10; i++) {
//   console.log(number + "x" + i + "= " + number * i);
// }
// console.log("java`");

// taske loops
// for (let i = 1; i <= 50; i++) {
//   if (i % 2 == 0) {
//     console.log(i, "print even all number ");
//   }

// }

// tasks loop  reverse number
// for (let i = 20; i >= 1; i--) {
//   console.log(i);
// }

//task   for loop
// let userIput = Number(prompt("Enter The Value "));

// let midValue = parseInt(userIput / 2);
// console.log(midValue);

// for (let i = 2; i <= midValue; i++) {
//   console.log(i, userIput);
// }

// if (userIput % 2 !== 0) {
//   console.log("prime number ");
// } else {
//   console.log("Not a number ");
// }

//task   for loop divided number

// let userIput = Number(prompt("Enter The Value --->"));
// let midValue = parseInt(userIput / 2);

// for (let i = 1; i <= midValue; i++) {
//   if (userIput % i == 0) {
//   }
//   console.log(i);
// }

//  bhai sameer task ...

// let userName = 5;
// for (let i = 1; i <= 10; i++) {
//   console.log(userName + " x " + i + " = " + userName * i);
// }

//  make a pattern with help of

// for (let i = 1; i <= 5; i++) {
//   document.write("*");
// }

// make a pattern  with help of  nasted  loops

// for (let r = 5; r >= 1; r--) {
//   for (let j = 1; j <= 5 - r; j++) {
//     document.write("&nbsp;");
//   }
//   for (let i = 1; i <= r; i++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }

// let output = "";

// for (let r = 5; r >= 1; r--) {

//   for (let j = 1; j <= 5 - r; j++) {
//     output += " ";
//   }

//   for (let i = 1; i <= r; i++) {
//     output += "*";
//   }

//   output += "\n";
// }

// document.body.innerHTML = "<pre>" + output + "</pre>";

// make pattern in loops
// for (let r = 5; r >= 1; r--) {
//   for (let j = 1 ; j <= 5 - r; j++) {
//     document.write("&nbsp;");
//   }
//   for (let i = 1; i <= r; i++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }

// for (let r = 1; r <= 5; r++) {
//   for (let j = 1 ; j <= 5 - r; j++) {
//     document.write("&nbsp;");
//   }
//   for (let i = 1; i <= r; i++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }

// bhai sameer task

// let store = [];

// for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0) {
//     store.push(i);
//     console.log(store);
//   }
// }

// bhai sameer task --->

// let count = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     count = count + 1;
//   }
//   console.log(count);
// }

// for in loops
// let person = { name: "bhai sameer ", age: 26, country: "pakistan " };
// for (let key in person) {
//   console.log(key, ":", person[key]);
// }

// let car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2020,
//   color: "Red"
// };

// for (let key in car) {
//   console.log(key + ": " + car[key]);
// }

// let phone = { brand: "Apple", model: "iPhone 13", price: 1000 };

// for (let key in phone) {
//   console.log(key, ":", phone[key]);
// }

// let phone1 = { brand: "Apple", model: "iPhone 13", price: 1000 };

// for (let key in phone1) {
//   console.log(phone1[key]);
// }

// let colors = ["Red", "Green", "Blue", "sammer "];

// for (let key in colors) {
//   console.log(key);
// }

// let student = { name: "Ali", grade: "A", age: 16 };

// for (let prop in student) {
//   console.log(prop, ": ", student[prop]);
// }

// let str = "HELLO";

// for (let i of str) {
//   console.log(i);
// }

// for of loops in javascript

// let str = "javascript";
// for (let char of str) {
//   console.log(char);
// }

// let marks = [45, 55, 60, 40, 50];

// let total = 0;

// for (let i in marks) {
//   total = total + marks[i];
// }

// console.log("Total Sum:", total);


