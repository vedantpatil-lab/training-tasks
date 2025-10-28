// const fs = require('fs');

// fs.readFile('file.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return; // Important to return or handle the error and stop further execution
//     }
//     console.log('File content:', data);
// });

// console.log(0.1*3 == 0.3);
// console.log(5 == 5)
// console.log(0.3 == 0.3);
// console.log(0.1*3)


// for(var i=0; i<10; i++) {
//      setTimeout(()=>{ console.log(i); },1000) 
// } 

// for(let j=0; j<20; j++){
//     setTimeout(()=>{
//         console.log(j)
//     }, 1000)
// }

// function outer(){ 
//     var b = 2 
//     function inner(){ 
//         b++; 
//         console.log(b) 
//         // var b = 3; 
//         console.log(b);
        
//     } 
//     inner(); 
// } 
// outer();

 (function () 
 { try { throw new Error(); } 
 catch (x) { var x = 1, y = 2; console.log(x); }
  console.log(x); 
  console.log(y); })();

  (function (){
    try {
        throw new Error();
    } catch (error) {
        
    }
  })