// Find prime numbers from 1 ....n 

// const n = 23;

// for(let i=2; i<=n; i++){
//     let isPrime = true;

//     for(let j=2; j<i; j++){
//         if(i%j == 0){
//             isPrime = false;
//             break;
//         }
//     }

//     if(isPrime){
//         console.log(i)
//     }
// }

// -----  WAP for getting a square root of a given number. ------

// const num = 54;

// function getSquareRoot(n){
//     return Math.sqrt(n)

// }

// console.log(getSquareRoot(2).toFixed(2))


// ------ WAP to find all duplicate numbers in an array. -------

// Using Set
// let arr = [1,2,3,4,5,4,3,5,2];
// let seen = new Set();
// let duplicate = new Set();

// for(let i=0; i<arr.length; i++){
//     if(seen.has(arr[i])){
//         duplicate.add(arr[i])
//     }
//     seen.add(arr[i])
// };

// console.log(...duplicate);


// Using Map
// let arr = [1,2,3,4,5,4,3,5,2];
// let map = new Map();

// for(let i=0; i<arr.length; i++){
//     map.set(arr[i], (map.get(arr[i]) || 0) + 1)
// }

// for(let [key, value] of map){
//     if(value > 1){
//         console.log(key)
//     }
// }