// iife = IMMEDIATELY INVOKED FUNCTION EXPRESSIONS

(function chai() {
    console.log("hello BY CODE 1");
    
} )();   //  this is a iife & a iife should be closed by a semi colon


(() => {
    console.log("CODE 2");    
}) ();                                       // this is a arrow iife

/*Now we will write a code in which there would be a varible name daksh in a arrow function 
code below */

((name) => {
    console.log(`${name} Saini BY CODE 3`);
    
})('Daksh');