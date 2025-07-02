let a = 10
const b = 20 
var c = 30


{}  // scope , usually used everywhere 

/* there are two types of scopes
1. Global = decalared outside the scope 
2. Block = declared inside the scope 

in programming var should be avoided as it is available outside and inside and can lead to problems */

if (true) {
    let a = 10    // this will not be printed 
    const b = 20  // this will not be printed 
    var c = 30  // this will BE Printed
}


 
