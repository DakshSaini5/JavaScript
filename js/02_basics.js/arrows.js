
const user = {
    username : "Daksh",
    surname : "Saini",

    welcomeMessage : function(){
        console.log(`${this.username} ,Sawagat hai `);
        // console.log(this)                               this prints the whole object 
    }
}

user.welcomeMessage()
user.username = "Advik"
console.log(this)    // this context has only empty
user.welcomeMessage()
 
//++++++++++++++++++++++++++++++++++++++++++++++-------+++++++++++++++++++++++++++++++++++++++++++++++++++++
// we cant use this in a function as it returns UNDEFINED value, example below 

const undefined = function daksh(){
    let username = "daksh"
    console.log(this)
}

undefined()
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++====4444


//using ARROW function

const arrow = () => {
    // console.log("Hello");
}

const arrow1 = (num1,num2) => {
    return num1 + num2
}