// const myNum = 20;

// let myArr = [1, 2, 3, "example text", true, false, null, undefined, myNum];
// console.log(myArr);

// let joinedArr = myArr3.join("+");
// console.log(joinedArr);

// let firstEI = myArr[0];
// let secondEI = myArr[1];
// let myArrLenght = myArr.length;
// let lastEI = myArr[myArrLenght - 1];

// // console.log(firstEI);
// // console.log(secondEI);
// // console.log(myArrLenght);
// // console.log(lastEI);

// let myArr2 = [20, 30, ["my name", "my email", 100]];
// console.log(myArr2);
// let innerArr2 = myArr2[2][0];
// console.log(innerArr2);
// console.log(innerArr2[0]);

// let myArr3 = [2, 6, 27, 20, 35];
// console.log(myArr3);

// myArr3.pop();
// myArr3.push(14);
// myArr3[2] = 18;

let myArr5 = [12, 7, 11, 5, 10];
let numAdd = 12 + 7 + 11 + 5 + 10;
let numAverage = numAdd / myArr5.length;

console.log(numAverage);

let myarr4 = [
  { name: "Nika", age: 35 },
  { name: "Giga", age: 17 },
  { name: "Sally", age: 28 },
  { name: "Tina", age: 16 },
  { name: "Nina", age: 22 },
];
console.log(myarr4);

let person = {
  firstName: "Tina",
  lastName: "Kakhberidze",
  address: "Tbilisi, Aghmashenebeli street",
  age: 25,
  phoneNumber: {
    home: 598745621,
    work: 254125423,
  },
};

// console.log(Object.keys(person));
// console.log(Object.values(person));

console.log(person);

let myString = ` My name is  ${person.firstName}, My age is   ${person.age}, My addres is ${person.address}.`;
console.log(myString);
