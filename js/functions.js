//What are functions and what do they do
//function greetings(name = 'Guest') {
   // console.log(`Good Afternoon, ${name} ?`);
//}
//greetings('Buba')

//unction sumOfNumbers (num1, num2) {
   // return num1 + num2;
//}

//console.log(sumOfNumbers(10, 40));

//let sum = sumOfNumbers(5, 8)// you can work with another set of numbers so call the function and assign it another set of numbers
//console.log (sum);

function multiplicationOfNumbers (num1, num2) {
    return num1 * num2;
}
console.log(multiplicationOfNumbers(5, 7))

//let multiplication = multiplicationOfNumbers(6, 8)

function areaOfCircle(r){
    return Math.PI * r*r;
}
console.log(areaOfCircle(7).toFixed (2))//to fixed in order to contain the decimal point
//console.log(Math.PI);
//let series = [1, 2, 3, 4, 5]
//function generateFibonacci(num1, num2, num3, num4, num5){

//}

function sumOfEvenNumbers (start, end){
 if (start % 2 !== 0) start += 1;

  let total = 0;
  for (let i = start; i <= end; i += 2) {
    total += i;
  }
  return total;
}
console.log(sum)

//write a function that checks if someone can vote
