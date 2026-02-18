
//number variable in this case age/students/anything quantifiable is a number type
//a floating point number often known as a float is used to store real numbers they are not always accurate because they are stored in binary
// integers are whole numbers
//let age = 24
//console.log(`You are ${age} years old`)
//basic arithmetic
let num1 = 10;
let num2 = 20;
console.log(num1 + num2);
console.log(num2 - num1);
console.log(num1 * num2);
console.log(num2 / num1);
console.log(num2 % num1);// modulus remainder
console.log(num1**num2);//Exponential

//Number Methods
let pi = 3.14
console.log(pi.toFixed(1))
let pi2 = pi.toString();

// string variable a series of characters you can use double quotes or single quotes or backticks
//let firstName = "Del";
//console.log(typeof firstName);
//console.log(`Her name is ${firstName}`);
//STRING CONCATINATION and learn different methods
let firstName ='Del';
let lastName = 'Arum';
let fullName = firstName + " " + lastName;
console.log(fullName);

//booleans are either true or false it is normally used with if statement
//let online = true;
//let forSale =true;
//console.log (typeof online);
//console.log(`Del is online: ${online}`);
//console.log(`Is this car for sale: ${forSale}`);
let isStudent = true;
let inAttendance = false;

if (isStudent && !inAttendance){
    console.log(`Welcome to the new module`);
} else {
    console.log(`Access denied.`);
}
//fasle values
  //0
  //null
  //undefined
  //NaN

//truth values
   //everything else is not false
   //'0'
   //'false'
   //[] empty array
   //{} empty object

// logical operators
    // && (AND) - returns true if both sides are true
    // || (OR) - returns true if atleast one of them is true 


//null = no value it exists but currently holds nothing it acts as a placeholder
//let userEmail = null;
//userEmail = "delaarum@gmail.com";
//console.log(`My User Email is ${userEmail}`);

// undefined variable means a variable exists but it hasn't been assigned a value not enven a null
// for example below we can see an error that delaarumgmail is not defined , it is set by javascript while null is set by the programmer to assign at a later date
//let nameInput = prompt('Enter you name');
//let yearInput = prompt('Enter you year of birth');

//let resultName = nameInput.trim()

//let currentYear = 2026;
//let age = currentYear - Number(yearInput);

//let employee ={
  //  name: resultName,
    //birthYear: Number(yearInput),
    //age: age
//};

//console.log(employee);
//alert(`Employeee: ${employee.name}, Age: ${employee.age}`);

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
readline.question("Enter your name:",name =>{
    readline.question("Enter your birth year:",birthYear =>{
    let cleanName = name.trim();
    let age = 2026 - Number(birthYear);

    let employee = {
      name: cleanName,
      birthYear: Number(birthYear),
      age: age
    };

    console.log(employee);
    readline.close();
    })
})



