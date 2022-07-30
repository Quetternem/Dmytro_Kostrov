
// let und = undefined;
// let bol = true;
// let num = 123321;
// let str = "qwerty";
// let bit = 123321n;
// let sym = Symbol(id);
// let nul = null;
// let obj = {
//     name:"Vasya"
// };

// Task2

// var num1 = 322;
// num1 = 500;
// let num2 = 500;
// num2 = 322;
// const str1="sheesh"

//Task3
// let und1;
// let und2 = +und1;
// let und3 = String(und2) === "und2";
// console.log(und3);
//
// let bol1 = true;
// let bol2 = +true;
// let bol3 = !!true;
// console.log(bol3);
//
// let num3 = 100;
// console.log(num3);
// let num4 = +num3;
// console.log(num4);
// let num5 = String(num4) === "num4";
// console.log(num5);
//
// let str1 = "jopka";
// let str2 = +"jopka";
// let str3 = !!"jopka";
//
// let bit1 = 123n;
// let bit2 = +123n;
// let bit3 = !!123n;
//
// let sym1 = Symbol(1);
// let sym2 = !!sym1;
// let sym3 = String(sym2);
//
// let nul1 = null;
// let nul2 = +null;
// let nul3 = !!null;
//
// let obj1 = {b:14};
// let obj2 = !!obj1;
// let obj3 = String(obj1);

//Task 4
//String
let str5 = "poka";
let und4;
let strund = str5+und4;


let str6 = "piv";
let bol4 = false;
let strbol = str6+bol4;


let str4 = "privet";
let num6 = 24;
let strnum = str4+num6;
console.log(strnum);


let str7 = "pov";
let str8 = "torchik";
let strstr = str7+str8;
console.log(strstr);


let str9 = "pun";
let bit4 = 522n;
let strbit = str9+bit4;


// let str10 = "pako";
// let sym4 = Symbol(22);
// let strsym = str10 + sym4;
// console.log(strsym); // НЕЛЬЗЯ //


let str11 = "juias";
let nul4 = +null;
;let strnul = str11+nul4;
console.log(strnul);

// let str12 = "pasksk";
// let obj4 = {a:kashtan};
// let strobj = str12+obj4;
// console.log(strobj);

//Number

let num7= 5;
let und5;
let numund = num7+und5;


let num8 = 6;
let bol5 = false;
let numbol = num8+bol5;


let num9 = 7;
let num10 = 24;
let numnum = num9+num10;
console.log(numnum);


let num11 = 8;
let str13 = "torchik";
let numstr = num11+str13;
console.log(numstr);


// let num12 = 9;
// let bit5 = 524n;
// let numbit = num12+bit5; // Не сочитаются


// let num13 = 10;
// let sym5 = Symbol(21);
// let numsym = num13 + sym5;
// console.log(numsym); // НЕЛЬЗЯ //


let num14 = 11;
let nul5 = +null;
;let numnul = num14+nul5;
console.log(strnul);

// let num15 = 12;
// let obj5 = {c:kashan};
// let numobj = num15+obj5;
// console.log(numobj);

//Task5

//String
let mstr5 = "poka";
let mund4;
let mstrund = mstr5-mund4;


let mstr6 = "piv";
let mbol4 = false;
let mstrbol = mstr6-mbol4;


let mstr4 = "privet";
let mnum6 = 24;
let mstrnum = mstr4-mnum6;
console.log(mstrnum);


let mstr7 = "pov";
let mstr8 = "torchik";
let mstrstr = mstr7-mstr8;
console.log(mstrstr);


// let mstr9 = "pun";
// let mbit4 = 522n;
// let mstrbit = mstr9-mbit4;


// let mstr10 = "pako";
// let msym4 = Symbol(22);
// let mstrsym = mstr10-msym4;
// console.log(mstrsym); // НЕЛЬЗЯ //


let mstr11 = "juias";
let mnul4 = +null;
;let mstrnul = mstr11-mnul4;
console.log(mstrnul);

// let mstr12 = "pasksk";
// let mobj4 = {a:kashtan};
// let mstrobj = mstr12-mobj4;
// console.log(mstrobj);

//Number

let mnum7= 5;
let mund5;
let mnumund = mnum7-mund5;


let mnum8 = 6;
let mbol5 = false;
let mnumbol = mnum8-mbol5;


let mnum9 = 7;
let mnum10 = 24;
let mnumnum = mnum9-mnum10;
console.log(mnumnum);


let mnum11 = 8;
let mstr13 = "torchik";
let mnumstr = mnum11-mstr13;
console.log(mnumstr);


// let mnum12 = 9;
// let mbit5 = 524n;
// let mnumbit = mnum12-mbit5;


// let mnum13 = 10;
// let msym5 = Symbol(21);
// let mnumsym = mnum13-msym5;
// console.log(mnumsym); // НЕЛЬЗЯ //


let mnum14 = 11;
let mnul5 = +null;
;let mnumnul = mnum14-mnul5;
console.log(mstrnul);

// let mnum15 = 12;
// let mobj5 = {c:kashan};
// let mnumobj = mnum15-mobj5;
// console.log(mnumobj);

//Task 6
// let login =prompt("Write login");
// let password =prompt ("Write password");
// if (login === "kykold",password === "1234asdQQ")
// alert('Добро пожаловать')
// else(alert("Ошибка входа"));

//Task 7

// let birthyear =+prompt('Введите год рождения');
// let age = 1997 - birthyear;
// if (age >=16) {console.log(age, "добро пожаловать")}
// else{console.log(age, "вход воспрещён")}

//Task 8

let staj = +prompt('Стаж работы');
if(staj >0&& staj <5){
    console.log("Ваша надбавка - 0%")

}else if (staj >=5&& staj <10){
    console.log("Ваша надбавка - 5%")}
else if (staj >=10&& staj <20){
    console.log("Ваша надбавка - 10%")}
    else if (staj >=20&& staj <60){
        console.log("Уволен даунич")
    }else{
        console.log("Не получаешь надбавку, сачок")
}

















