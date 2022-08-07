//Zadanie 1 )))))
//
// function arrayFill(value,length){let puk=[];
//     for(let i= 0;i<length;i++){
//     puk.push(value);}
// return puk;}
// console.log(arrayFill("x",5));

//Zadanie 2))))


/*
function isNumberInRange(){
    let number = prompt("Какое число вы хотите проверить?");
    if (number>0&&number<10){

        return true}
    else if (number<0&&number>10){
        return false}
    else {return false}}
console.log(isNumberInRange());

*/

//Zadanie 3 )))


// function isEven(){
//     let number = prompt("Какое число вы хотите проверить?");
//     if (number% 2===0){
//         return true
//     }
//     else {return false}
// }
// console.log(isEven());


//Zadanie 4))))
// let bobby = [1,2,5,6,10,12,13,525,25,5030,87];
// let billy = [];
//     for(let i = 0;i<bobby.length;i++){
//         if (isEven(i)){
//             billy.push(i);}
//
// }
// console.log(billy);
// function isEven (num){
//     return num %2===0;}


//Zadanie 5 )))


// function dgr(num, numStep) {
//     return num ** numStep;
// }
//
// console.log(dgr(3,15));
// console.log(dgr(4,16));


// Zadanie 6))))))

// function yourAge(){
//     let age=prompt('Введите свой возраст:');
//     if (age>=16){
//         return 'Добро пожаловать';
//     }else if(age<16){
//         return 'Вы еще молоды';
//     }else{
//     return 'Введите свой возраст:'};
// }
//
// console.log(yourAge());


// Zadanie 7))))

// function yourAge(age) {
//     let ageValue
//     ageValue = age || 18;
//     age = 60 - age;
//     return age > 16 ? "Добро пожаловать" :
//         age < 16 ? "Вы еще молоды" :
//               "Введите возраст";
// }
// console.log(yourAge(18));
// console.log(yourAge(12));
// console.log(yourAge());
// console.log(yourAge(undefined));

// Zadanie 8))))

// let str = "hello world!";
// let str1 = [];
//
// function ucFirst(word) {
//     return word[0].toUpperCase() + word.slice(1);
// }
//
// let value = str.split(' ');
// for (let i = 0; i < value.length; i++) {
//     str1.push(ucFirst(value[i]));
// }
//
// let str2 = str1.join(" ");
//
// console.log(str1);
// console.log(str2);

//Zadanie 9)))))
// let str = "var_texthello.";
// let str1 = [];
//
// function ucFirst(word) {
//     return word[0].toUpperCase() + word.slice(1);
// }
//
// let value = str.split('_');
// for (let i = 0; i < value.length; i++) {
//     str1.push(ucFirst(value[i]));
// }
//
// let str2 = str1.join("");
//
// console.log(str1);
// console.log(str2);




// Zadanie 10))))

// let array = [525,"kubus","oppachki","chet ochen vajnoe",666];
//
// function inArray(elements,array){
//     for (let i=0;i<array.length;i++){
//         if (array[i]===elements){
//             return true;
//         }
//     }return false
// }
//
// console.log(inArray("kubus",array));
// console.log(inArray("plak",array));
// console.log(inArray(525,array));
// console.log(inArray("opachki:(",array));
