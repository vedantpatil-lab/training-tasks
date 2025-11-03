// ==== reverse a string =====
// function reverseString(str){
//     if(str.length < 2){
//         return str
//     };
//     let rev = ""
//     for(let i=str.length - 1 ; i>=0; i--){
//         rev = rev + str[i]
//     }

//     return rev;
// }
// console.log(reverseString("hello"))

// ===== Palindrome ======
// function isPalindrome(str){
//     if(str.length < 2 ){
//         return "Enter valid string"
//     }

//     let rev = ""
//     for(let i=str.length - 1 ; i>=0; i--){
//         rev = rev + str[i]
//     }

//     if(str === rev){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(isPalindrome("dad"))



// ======= Largest Element in an array ========
// function findLargest(arr){
//     if(arr.length < 2){
//         return arr;
//     }

//     let max = 0;

//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>max){
//             max = arr[i]
//         }
//     }

//     return max
// }

// console.log(findLargest([1,2,3,4,6,8]))

// ======= Second largest element in an array ============

// function secondLargest(arr){
//     if(arr.length < 2){
//         return arr;
//     }

//     let max = Number.MIN_VALUE;
//     let sec_max = Number.MIN_VALUE;

//     for(let i=0; i<arr.length; i++){
//         if(arr[i] > max){
//             sec_max = max
//             max = arr[i]
//         }else if(arr[i] > sec_max && arr[i] != max){
//             sec_max = arr[i]
//         }
//     }
//     return sec_max;
// }

// console.log(secondLargest([1,2,3,4,5,6,10]))

// ========== Count Occurrence =============

// function countOccurrence(str){
//     if(str.length < 2){
//         return str
//     }

//     let map = new Map();

//     for(let i=0; i<str.length; i++){
//         map.set(str[i], (map.get(str[i]) || 0) + 1)
//     }

//     for(let [key, value] of map){
//         console.log(`Character ${key} -> ${value}`)
//     }
// }

// countOccurrence("apple")