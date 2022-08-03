// // Task 1
// const letters = ["a", "b", "c"];
// const numbers = [1, 2, 3];
//
// const alphaNumeric = letters.concat(numbers);
// console.log(alphaNumeric);
//Task 2

// push method

// const letters = ["a", "b", "c"];
// letters.push("1", "2", "3");
// console.log(letters);

//splice method

// const letters = ["a", "b", "c", "d", "e", "f"];
// letters.splice(3, 3, 1, 2, 3);
// console.log(letters);

//Task 3

// const numbers = [1, 2, 3, 4, 5];
// numbers.splice(1,2);
// console.log(numbers);

//Task 4

// const numbers = [1, 2, 3, 4, 5];
// numbers.splice(3,0,"a","b","c");
// console.log(numbers);

//Task 5

// const arr = [1, 2, 3, 4, 5];
// const arr1 = [];
// for (let i = 0; i<arr.length; i++){
//     console.log(arr1.push(arr[i]*10));
// }
// console.log(arr);
// console.log(arr1);

//Task 6

// let i = 4;
// while (i <= 400) {
//     console.log(i);
//     i++;
// }

// Task 7
// let i = 1
// do {
//     i = i+3;
//     console.log(i);
// } while (i < 13);


//Task 8

// let i = 654;
//  while (i>-1) {
//      console.log(i);
//      i--;
//  }

//Task 9

// let i = 1983;
// while (i <= 2017) {
//     console.log(i);
//     i++;
// }

//Task 10

// for (i=-4; i<=100;i+=2){
//     console.log(i);
// }

//Task 11

// let sum = 0;
// for(let i =0;i <= 100; i++){
//     sum+=i;
// }
// console.log(sum);

//Task 12
// let s =prompt('Сколько эллементов?');
// let arr = [];
// let str = '';
//
// for (let i=0;i<s;i++){
//     str+='x';
//     arr.push(str);
// }
// console.log(arr);

//Task 13

// let s = prompt('Сколько элементов?');
// let arr = [];
// let str;
// for (var i = 0; i < s; i++) {
//     str = '';
//     for (var j = 0; j <= i; j++) {
//         str += i+1;
//     }
//     arr.push(str);
// }
// console.log(arr);


//Task 14

// let arr = [];
//
// for (let i = 0; i < 11; i++) {
//     let firstArr = [];
//
//     for (let j = 0; j < 11; j++) {
//         let el = j === i - i || j === j - i || i === j - j + 10 || i === i - j + 10 ? "x" : 0;
//         firstArr.push(el);
//     }
//     arr.push(firstArr);
// }
// console.log(arr);

//Task 15

// let arr = [];
//
// for (let i = 1; i <= 10; i++) {
//     let firstArr = [];
//
//     for (let j = 1; j <= 10; j++) {
//         let el = j * i;
//         firstArr.push(el);
//     }
//     arr.push(firstArr);
// }
// console.log(arr);


//Task 16

// function declination() {
//     let num = +prompt("Введите число товаров");
//     let word = ['товар', 'товара', 'товаров'];
//     if (num % 100 > 4 && num % 100 < 20) {
//         return word[2];
//     } else if (num % 10 > 1 && num % 10 < 5) {
//         return word[1];
//     } else if (num % 10 > 0 && num % 10 < 2) {
//         return word[0];
//     } else if (num % 10 >= 0 && num % 10 <= 0) {
//         return word[2];
//     }
// }
//
// console.log(declination());

