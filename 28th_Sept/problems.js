// ----- palindrome string --------
// let str = "none";
// let rev = "";

// for(let i=str.length - 1; i>=0; i--){
//     rev = rev + str[i]
// };

// if(str == rev){
//     console.log("Palindrome")
// }else{
//     console.log("Not a Palindrome")
// }



// ---------- Fibonacci series with recursion ----------------

// function fiboSeries(n){
//     if(n<2){
//         return n;
//     };
//     return fiboSeries(n-1) + fiboSeries(n-2);
// };
// let n = 10;
// for(let i = 0; i<=10; i++){
//     console.log(fiboSeries(i));
    
// }

// ---------- Fibonacci series without recursion -------------
// let num = 10;
// let a = 0;
// let b = 1;
// let sum = 0;
// console.log(a);
// console.log(b);

// for(let i = 3; i<=num;i++){
//     sum =  a + b;
//     console.log(sum)
//     a = b;
//     b = sum;
    
// }

// //  ---- second largest element in an array -----
// let arr = [12, 35, 1, 10, 34, 1, 35];
// let max = Number.MIN_VALUE;
// let sec_max = Number.MIN_VALUE;

// for(let i=0; i<arr.length; i++){
//     if(arr[i] > max){
//         sec_max = max;
//         max = arr[i]
//     }else if(arr[i] > sec_max && arr[i] != max){
//         sec_max = arr[i]
//     }
// };

// console.log("Max Number ", max)
// console.log("Second Max Number", sec_max);


// --- reveres an integer without converting into string ---
// let num = 400;
// let rev = 0;
// let count = 0;

// while(num > 0){
//     let digit = num % 10;
//     if(rev == 0 && digit == 0){
//         count++;
//     }
//     rev = rev * 10 + digit;
//     num = Math.floor(num / 10)
// };

// if(count){
//     console.log("0".repeat(count) + rev)
// }else{
//     console.log(rev)
// }


// ------ Swap two values without using third variable -----

// let a = 10;
// let b = 20;

// a =  a + b;
// b = a - b;
// a = a - b;
// console.log("a:" + a + " " + "b:" + b)


// // ----- Reverse a string -----
// let str = "nimap";
// let rev = "";

// for(let i = str.length - 1; i>=0; i--){
//     rev = rev + str[i]
// };

// console.log(rev)


// // ---- Anagram Program ------
// let str1 = "listen";
// let str2 = "silent";
// let isAnagram = true;
// let map = new Map();

// for(let i=0; i<str1.length; i++){
//     map.set(str1[i], (map.get(str1[i]) || 0) + 1)
// };

// for(let i=0; i<str2.length; i++){
//     if(!map.has(str2[i])){
//         isAnagram = false;
//         break;
//     }
//     map.set(str2[i], (map.get(str2[i])) - 1)
// };

// for(let value of map.values()){
//     if(value != 0){
//         isAnagram = false;
//         break;
//     }
// };

// if(isAnagram){
//     console.log("Anagram")
// }else{
//     console.log("Not Anagram")
// }


// ------- Find missing element from an array  ---------
// let arr = [1,2,3,4,6,7,8,9]
// let sum = arr.reduce((acc, curr)=> acc + curr, 0)
// let max = Math.max(...arr)
// let finalSum = (max * (max + 1)) / 2;
// console.log(finalSum - sum)

