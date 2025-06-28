function myName(){
    console.log("Daksh Saini");
}

// myName()

// function addTwoNumber(number1,number2){
//     console.log(number1 + number2);          can be written correctlyor differently
// }
// addTwoNumber(3,5)


function addTwoNumber01(number1,number2){
    let result = number1 + number2
    // console.log("The Result is :")
    return result;                        // we can also return the result doing "return number1 + number2" wihtout declaring any variable
}

// const result = addTwoNumber01(8,9)
// console.log("Result :",addTwoNumber01(9,8));


// function login(username) {
//     return `${username} just logged in`
// }

// console.log(login("Daksh Saini"));

function employee(username){
    if(!username){
        console.log("Please Enter a Username");
        return
    }
    return `${username} just logged in`
}

console.log(employee("Saini"));
