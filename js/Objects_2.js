const daksh = new Object()

daksh.id = "1234"
daksh.name = "Saini"
daksh.yaya = "yayayya"

// console.log(daksh);

// console.log();
// console.log();

const Tinder = {
    email:"some@gmail.com",
    username : {
        First: "Daksh",
        Last: "Saini"
    }
}

const ob2 = {1: "a", 3:"hatbhadwe"}
const ob3 = {2: "r", 5:"he"}
const ob4 = {...ob2,...ob3}
console.log(ob4);


//destructing

const course = {
    name : "daksh saini",
    surname : "saini",
    Brand : "Nike"
}

const {Brand : shop} = course

// console.log(Brand)
 console.log(shop);

//  {
//     "name" : "daksh",
//     "coursename" : "Js"   JSON
//  }