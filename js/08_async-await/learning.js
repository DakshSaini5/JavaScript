// async function getData() {
//     setTimeout(function (){
//         console.log("Daksh Saini");
//     },3000);
// }

// let output = getData();



// //using await

// async function Result() {
//     let response = await fetch ('https://jsonplaceholder.typicode.com/albums/1');

//     let data = await  response.json();
//     console.log(data);

// }

// // Result();

// //asynchronous code
// async function getResult() {
//     let response1 = fetch('https://jsonplaceholder.typicode.com/posts/1');
//     console.log( response1);
// }
// // getResult();


//EXAMPLES 

const url = 'https://jsonplaceholder.typicode.com/posts';

const myheaders = { "Content-Type": "application/json" };

const options = {
    method : "POST",
    body : JSON.stringify({username: "Daksh Saini"}),
    headers : myheaders,
};

async function getData(){
    const response = await fetch(url);
    const data = await response.json();
    console.log("Get data response :" + data);
}

async function postData() {
    const response =await fetch(url,options);
    const data = await response.json();
    console.log("Post data response :" + data)
}

async function Outputs(){
    await postData();
    await getData();
}

Outputs();