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





