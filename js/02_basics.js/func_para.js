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
        // console.log("Please Enter a Username");
        return
    }
    // return `${username} just logged in`
}

console.log(employee("Saini"));

function calculatePrice(...num1){     // rest operator
    return num1 
}

// console.log(calculatePrice(2,3,4,5))


const user = {
    username : "Saini",
    price : 9292
}

function handleObject(anyobject){
    // console.log(`Username : ${anyobject.username}&\n Price: ${anyobject.price}`)
}

handleObject(user)


handling({
    greet : "hello",
    pricing : 200
})

function handling(obj){
    // console.log(obj.greet);
}



const newArray = [200,600,900]

function fetchArray(getarray){
    return getarray[2]
}

console.log(fetchArray(newArray));

