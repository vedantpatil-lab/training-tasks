// const orderPizza = new Promise((resolve, reject) => {
//   console.log("Pizza order placed...");
//   setTimeout(() => {
//     const isAvailable = false;
//     if (isAvailable) {
//       resolve("Pizza Delivered !!");
//     } else {
//       reject("Sorry, pizza is not available...");
//     }
//   }, 1000);
// });

import { resolve } from "path"

// console.log(orderPizza);

// setTimeout(() => console.log(orderPizza), 2000);


// console.log("Start");

// const promise = new Promise((resolve) => {
//   console.log("Promise created");
//   setTimeout(() => {
//     resolve("Done!");
//   }, 2000);
// });

// promise.then((result) => console.log(result));

// console.log("End");



// -------- project using promise chaining ----------

function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
};

function orderPizza(){
    return new Promise((resolve, reject)=>{
        console.log("Ordering pizza....");
        delay(1000).then(()=>{
            const available = true;
            if(available){
                console.log("Pizza order confirmed !!");
                resolve("Order ID: 12345")
            }else{
                reject("Pizza not available")
            }
        })
        
    })
}

function preparePizza(orderId){
    return new Promise((resolve)=>{
        console.log(`Preparing order of order ID: ${orderId}`);
        delay(1500).then(()=>{
            console.log("Pizza is prepared !!")
            resolve("Pizza prepared !!!")
        })
    })
}

function bakePizza(pizza){
    return new Promise((resolve)=>{
        console.log("Pizza is ready to baked....");
        delay(2000).then(()=>{
            console.log("Pizza is baked !!");
            resolve("Pizza baked !!")
        })
    })
};

function deliverPizza(baked){
    return new Promise((resolve)=>{
        console.log("Pizza is ready to deliver...");
        delay(3000).then(()=>{
            console.log("Pizza delivered !!")
            resolve("Pizza delivered !!")
        })
    })
}


orderPizza()
.then(orderId => preparePizza(orderId))
.then(pizza => bakePizza(pizza))
.then(baked => deliverPizza(baked))
.then(finalMsg => console.log("Final message", finalMsg))
.catch(error => console.log("Error occurred !", error))
.finally(()=>console.log("Order cycle complete.."))