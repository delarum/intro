// console.log ("Starting asynchronous code...");
// // 
// setTimeout(function() {
//     console.log ("This is asynchronous code.");
// }, 2000);
// console.log ("This is synchronous code.");
// call back

// getData(function(a) {
//     console.log("Data received: ", a);
//     getmoreData(function(b) {
//         console.log("More data received: ", b);
//         getEvenMoreData(function(c) {
//             console.log("Even more data received: ", c);
//            getFinalData(function(d) {
//                 console.log("Final data received: ", d);
//             });
//         });
//         });

// });
// let myPromise = new Promise(function(resolve, reject) {
//     let success = false; // Simulate success or failure
//     if (success) {
//         resolve("Data received successfully!");
//     } else {
//         reject("Failed to receive data.");
//     }
// });

// myPromise.then(function(data) {
//     console.log(data);
// }).catch(function(error) {
//     console.error(error);
// });

//data handling with async/await
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error fetching data: ", error));
    //apis, doms you fetch data and display them
    //animations hover and ajax
    //go thorough