//hoisting enables you to call before declaring
//functions are fully hoisted
// console.log(name);
// var name = "John";

// greetings('Jane');

// function greetings(name = 'Guest') {
//     console.log(`Good Afternon, ${name}`)
// }
//global variables are declared outside a function code
//local variables are declared inside a funtion 
//scoping

//let name ='Del'//global scope
function greet(){
    var name = "Jane"
    console.log(name);
}

greet()
console.log(name);// if it is global you can call it twice an dyou can access it from everywhere