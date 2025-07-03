// truthy values 
// function() {}, "false", "0", [], {}, " "

/* falsy Values 

Nan, undefined, null, 0, false , -0, Bigint 0n, ""*/

emptyobj = {};
if(Object.keys(emptyobj).length === 0){
    console.log("kuch nhi hai");
    
}