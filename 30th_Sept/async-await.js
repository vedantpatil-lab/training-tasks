// async function getUserData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//     const user = await response.json();
//     console.log("User name:", user.name);
//   } catch (error) {
//     console.log("Failed to fetch user:", error);
//   }
// }

// getUserData();


// async function fetchAll() {
//   const [user, posts] = await Promise.all([
//     fetch("https://jsonplaceholder.typicode.com/users/2").then(r => r.json()),
//     fetch("https://jsonplaceholder.typicode.com/posts?userId=6").then(r => r.json())
//   ]);

//   console.log(user.name, "has", posts.length, "posts");
// }

// fetchAll();

// async function fetchData(num){
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users/${num}`);
//         const data = await response.json();
//         console.log(data.email)
//     } catch (error) {
//         console.log("Error ocurred !", error)
//     }
// }

// fetchData(4)


// --- Simulate ordering a burger → making fries → drinking soda using setTimeout and await. ----

// function wait(ms){
//     return new Promise((resolve)=> setTimeout(resolve, ms))
// }

// async function orderMeal() {
//   try {
//     console.log("Ordering burger...");
//     await wait(1500);
//     console.log("Burger is ready!");

//     await wait(1000);
//     console.log("Fries are ready!");

//     await wait(1000);
//     console.log("Soda is ready!");

//     console.log("All meal items are ready!");
//   } catch (error) {
//     console.log("Error occurred !!", error);
//   }
// }
// orderMeal()



// ------ Error handling in async-await ---------

// async function fetchData(){
//     try {
//         const response = await fetch("https://jsonplacelder.typicode.com/users/1")  // ho is missing in url
//         if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//         const data = await response.json();
//         console.log(data.name)
//     } catch (error) {
//         console.error("Url is invalid", error)
//     }
// }

// fetchData();


// ------ Parallel Requests in async await --------

// async function fetchPost() {
//   try {
//     const [userResponse, postsResponse] = await Promise.all([
//       fetch("https://jsonplaceholder.typicode.com/users/4"),
//       fetch("https://jsonplaceholder.typicode.com/posts?userId=4")
//     ]);

//     const user = await userResponse.json();
//     const posts = await postsResponse.json();

//     console.log(`${user.name} has ${posts.length} posts`);
//   } catch (error) {
//     console.error("Error in fetching the data", error);
//   }
// }

// fetchPost();


// ------- Await in Loops ----
// Use a loop to print numbers from 1 to 5, waiting 1 second between each using an async delay(ms) function.

function delay(ms){
    return new Promise((resolve)=> setTimeout(resolve, ms))
}

for(let i=1; i<=5; i++){
    await delay(1000);
    console.log(i)
}

async function printNumbers() {
  for (let i = 1; i <= 5; i++) {
    await delay(1000);
    console.log(i);
  }
}

printNumbers();