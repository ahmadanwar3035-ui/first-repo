// alert("aray");

// sum of array all value
// let l = [12, 34, 56, 78, 90];
// let sum = 0;
// for (let v of l) {
//   sum += v;
//   console.log(v);
// }
// console.log(sum);

// array even number
// let even = [22, 34, 55, 66, 77, 88, 99, 44, 33, 22];
// for (let v of even) {
//   if (v % 2 == 0) {
//     console.log(v);
//   }
// }

// array value update -->
// let update = [1, 2, 3, 4, 5, 6, 7, 8];
// update[2] = 30;
// console.log(update);

// pop method in array
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (v of array) {
//   console.log(v);
//   array.pop(  )
// }
// console.log(array);

//  task array method
// let a = [1, 2, 3, 4];
// let b = [3, 4, 5, 6];
// console.log(a.concat(b));
// for(let v of a){
//     if(b.includes(v)){
//         console.log(v);

//     }
// }

// task 3 array method  remove duplicate

// let a = [1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9, 9, 10];
// console.log(a);
// let finnalArray = [];
// for (let v of a) {
//   if (!finnalArray.includes(v))
//     finnalArray.push(v)
//     console.log(v);
// }
// console.log(finnalArray);

// task4 find maxvalue
// let array = [ 1,2,3,4,5,6,77]
// let maxValue = array[0]
// for( let v of array){
//     if(v>maxValue){
//         maxValue = v
//     }
// }
// console.log(maxValue);

// tasks reverse method
//  let a = [1,2,3,4,5,6,7,8,9]
//  for(let i = a.length ; i >= 0 ; i--){
//     console.log(i);
//  }
//  console.log(a);

// slice method in array prolems
// fruits array me se sirf Mango aur Banana ko naya array me store karo.
// let fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];
// let newArray = fruits.slice(1, 3);
//  console.log(newArray);
// console.log(fruits);

// slice method in array prolems
// numbers array me se 30 se last tak naya array banao.

// let numbers = [10, 20, 30, 40, 50, 60];
// let newNumber = numbers.slice(0,3)
// console.log(newNumber);
// console.log(numbers);

// slice method in array prolems
// animals array ke last 3 animals ko naya array me copy karo using negative index

// let animals = ["Cat", "Dog", "Rabbit", "Horse", "Elephant"];
// let newAnimals = animals.slice(-4,-1)
// console.log(newAnimals);
// console.log(animals);

// slice method in array prolems
// colors array me se Green aur Blue ko naya array me store karo using negative start and end

// let colors = ["Red", "Green", "Blue", "Yellow", "Pink"];
// let newColors =  colors.slice(-4,-2)
// console.log(newColors);
// console.log(colors);

// slice method in array prolems
// nestedArray me se middle two arrays ko slice karke naya array banao

// let nestedArray = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
//   [7, 8],
// ];
// let newArray = nestedArray.slice(1, 3);
// console.log(newArray);
// console.log(nestedArray);

// slice method in array prolems
// Slice karke naya array banao jisme first 3 fruits ho.

// let fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];
// let newFruit = fruits.slice(0,3)
// console.log(newFruit);
// console.log(fruits);

// slice method in array prolems
// Slice karke naya array banao jisme 15, 20, 25 ho.

// let numbers = [5, 10, 15, 20, 25, 30];
// let newNumber = numbers.slice(2)
// console.log(newNumber);
// console.log(numbers);

// Problem 3 — Slice Last Elements
// Slice karke naya array banao jisme last 2 animals ho.

// let animals = ["Cat", "Dog", "Rabbit", "Horse", "Elephant"];
// let newAnimals = animals.slice(0,3)
// console.log(newAnimals);
// console.log(animals);

// 🔹 Problem 4 — Negative Index
// Slice karke naya array banao jisme Green aur Blue ho using negative index.

// let colors1 = ["Red", "Green", "Blue", "Yellow", "Pink"];
// let negativeSlice = colors1.slice(-4,-2)
// console.log(negativeSlice);
// console.log(colors1);

// 🔹 Problem 5 — From Middle to End
// Slice karke naya array banao jisme elements 4 se 7 tak ho.

// let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8];
// let newNumber = numbers3.slice(3,7)
// console.log(newNumber);
// console.log(numbers3);

// 🔹 Problem 6 — Nested Arrays
// Slice karke naya array banao jisme middle three arrays ho.

// let nestedArray = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
//   [7, 8],
//   [9, 10],
// ];
// let newNested = nestedArray.slice(1, 4);
// console.log(newNested);
// console.log(nestedArray);

// 🔹 Problem 7 — Copy Full Array
// Slice ka use karke poora array copy karo, taake original array safe rahe.

// let letters = ["A", "B", "C", "D", "E"];
// let newLetters = letters.slice(0);
// console.log(newLetters);
// console.log(letters);

// Example 1 — Remove Elements --> splice
// let fruits6 = ["Apple", "Mango", "Banana", "Orange"];
// fruits6.splice(1, 2);
// console.log(fruits6);

// 4️⃣ Example 2 — Add Elements
// let fruits5 = ["Apple", "Mango", "Banana"];
// fruits5.splice(2, 0, "Orange", "Kiwi");
// console.log(fruits5);

// 5️⃣ Example 3 — Replace Elements
// let fruits4 = ["Apple", "Mango", "Banana"];
// fruits4.splice(1, 2, "Orange", "Kiwi");
// console.log(fruits4);

// 🟢 LEVEL 1 — BASIC (Remove)
// Index 1 se 1 element delete karo.
// let fruits3 = ["Apple", "Mango", "Banana", "Orange"];
// fruits3.splice(1, 1);
// console.log(fruits3);

// ✅ Problem 2
// 👉 Index 2 se 2 elements remove karo.
// let numbers2 = [10, 20, 30, 40, 50];
// numbers2.splice(1, 2);
// console.log(numbers2);

// ✅ Problem 3
// 👉 Last element delete karo using splice.
// let colors = ["Red", "Green", "Blue", "Yellow"];
// colors.splice(3, 1);
// console.log(colors);

// 🟡 LEVEL 2 — ADD ELEMENTS
// ✅ Problem 4
// Index 1 par "Mango" add karo
// 👉 Kuch delete nahi karna.
// let fruits1 = ["Apple", "Banana"];
// fruits1.splice(1, 0, "mango");
// console.log(fruits1);

// ✅ Problem 5
// 👉 Beech me 3 aur 4 add karo.
// let numbers1 = [1, 2, 5, 6];
// numbers1.splice(2, 0, 3, 4);
// console.log(numbers1);

// ✅ Problem 6
// 👉 Start me "Lion" add karo.
// let animals = ["Cat", "Dog"];
// animals.splice(0, 0, "lion");
// console.log(animals);

// 🟠 LEVEL 3 — REPLACE ELEMENTS
// 👉 "Mango" ko "Orange" se replace karo.
// let fruits = ["Apple", "Mango", "Banana"];
// fruits.splice(1, 1, "orange");
// console.log(fruits);

// ✅ Problem 8
// 👉 Index 1 se 2 elements replace karo 25 aur 35 se.
// let numbers = [10, 20, 30, 40];
// numbers.splice(1, 2, 25, 35);
// console.log(numbers);

// let numbers = [23, 45, 56, 67, 78,23,45,56];
// numbers.forEach(function (abc) {
//   console.log(abc);
// });

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArray = array.map(test);
// console.log(newArray);
// function test(x) {
//   return x * 10;
// }
