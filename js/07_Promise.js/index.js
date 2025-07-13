// const Coding = new Promise((resolve, reject) => {
//     console.log("daksh saini");                           // this will give a pending result
// });


// let Coding1 = new Promise ((resolve, reject) => {
//     console.log("Fullfilled");                          // this will give a fullfilled result
//     resolve(121);
// })


// let coding2 = new Promise((resolve, reject) => {
//     console.log("Rejected!");                           //this will give a rejected result        
//     reject(new Error("Server Crashed"));
// })



// // now we will look a asynchronass code
// function SayMyname() {
//     console.log("Daksh Saini");
// }

// setTimeout(SayMyname,1000);


// // 2 way to write this code is 
// setTimeout(function SayMyname() {
//     console.log("Daksh Saini");
// }, 1000)


// //3 way
// let ThirdWay = new Promise((resolve, reject) => {
//     setTimeout(function SayMyname() {
//     console.log("Daksh Saini");
// }, 1000)
// })

///
let wada = new Promise((resolve, reject) => {
    let success = false;
    if(success){
        resolve("Waah");
    }
    else{
        reject(" NOT Waaah")
    }
});

wada.then((message) => {
    console.log("THIS IS REALLY WAAH" + message);
}).catch((error) => {
    console.log("Sad hogaya" + error)
})