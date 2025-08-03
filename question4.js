function next_permutation(num) {
    const swapElements = (arr, index1, index2) => {
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    };
    let temp;
    for (let i = 5; i >= 0; i--) {
        if (num[i] < num[i + 1]) {
            temp = i;
        }
    }
    let arr = num.slice(temp+2, num.length);
    let minNum = Math.min(...arr);
    let secondmin = 9;
    for(let i=0; i<arr.size; i++){
        if(arr[i]<secondmin && minNum!=arr[i]){
            secondmin = arr[i];
        }
    }
    let minIndex = num.indexOf(secondmin);
    console.log(minIndex);
    swapElements(arr, temp,secondmin);
    console.log(arr);
    let partToSort = num.slice(temp + 1, 7);
    partToSort.sort((a, b) => a - b);
    num.splice(temp + 1, partToSort.length, ...partToSort);
}
function ArrToNum(num) {
    let n = 0;
    for (let i = 0; i < num.length; i++) {
        n = n * 10 + num[i];
    }
    return n;
}
function Isprime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
let num = [1, 3, 2, 4, 5, 6, 7];
// let maxPrime = 0;
// for (let i = 1; i <= 5040; i++) {
//     let number = ArrToNum(num);
//     if (Isprime(number)) {
//         maxPrime = Math.max(maxPrime, number);
//     }
//     console.log(num);
    next_permutation(num);
// }
// console.log(maxPrime);