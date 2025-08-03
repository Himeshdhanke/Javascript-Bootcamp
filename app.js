//Day -1

/*const cowsay = require("cowsay");
console.log(cowsay.say({
    text: "I'm a moodule",
    e: "><",
    T: "U"
}));
*/

// const a = 45;
//in this method we can use variables in string itself. for this we have to use `` and inbetween to shoow variable use ${varName}
//console.log(`The value of a is ${a}`);
// console.log('The value of a is '+a);

/* function greet(name,age){
    let maessage = `Hello! ${name}, you are ${age} years old`;
    return maessage;
}
let greeting = greet("Alice",18);
console.log(greeting);
*/

// let counter = 0;
// while(counter<3){
//     console.log(`Loop iteration: ${counter}`);
//     counter++;
// }
// console.log(`While loop ended!`);

/*const fruits = ["Apple","banana","Mango"];
for(let i=0; i<fruits.length; i++){
    console.log(`The ${i} fruit is ${fruits[i]}`);
}*/

// let temp = 25;
// if(temp>30){
//     console.log("Its a hot day!!");
// }else if(temp>20){
//     console.log("Its a pleasent day!!");
// }else{
//     console.log("Its a chill day!!");
// }

/*function calArea(len,width=1){
    return len*width;
}
console.log(`Area of Rectangle is: ${calArea(10,5)}`);
const sqArea = calArea(8);
console.log(`Area of square with side 8 is: ${sqArea}`);*/

//types of function-1
// const getSum = function(a,b){return a+b;};
// const sum = getsum(20,36);
// console.log(`The sum of 20 and 36 is ${sum}`);

//modern arrow function //more consice way to define functions
// const multiply =  (x, y) => x*y;
// console.log(`The product of 10 and 20 is ${multiply(10,20)}`);

/*let sum = 0;
for(let i=1; i<1000; i++){
    if(i%3===0 || i%5===0)
        sum += i;
}
console.log(`The sum of number below 1000 and divisible by 3 or 5 is ${sum}`);*/

//Find the sum of all even Fibonacci numbers under 4000000
// let a = 1;
// let b = 1;
// let sum = 0;
// while(b<4000000){
//     let temp = b;
//     b = b + a;
//     a = temp;
//     if(b%2===0){
//         sum += b;
//     }
// }
// console.log(`The sum is ${sum}`);

/*what is the largest prime factor of 600851475143
let num = 600851475143;
let i=2;
while(i<=num){
    if(num%i===0){
        num/=i;
    }else{
        i++;
    }
}
console.log(i);*/

//sum of digits of 100! is ?
// function fact(n){
//     if(n==1n) return 1n;
//     return n*fact(n-1n);
// }
// let num = 100n;
// let Fnum = BigInt(fact(num));
// let sum = 0n;
// let a = 10n;
// while(Fnum>0){
//     sum += Fnum % a;
//     Fnum = Fnum/a;
// }
// console.log(Number(sum));

