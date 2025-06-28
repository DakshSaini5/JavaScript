//const tinder = {};  single ton object 
const tinder = new object()  //singleton object
// both gives the same output

tinder.id ="456"
tinder.name = "Daksh"
tinder.isLoggedIn = true

console.log(tinder);

