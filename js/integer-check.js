//let number =23;
//if (number% 2===0){
    //console.log(';Even Number')
//}else {
    //console.log("Odd Number")
//}

//let number = -5;
//if (number>0){
   // console.log('Positive Nmuber')
//}else if(number<0) {
    //console.log('Negative Number')
//}else {
   // console.log('Number is 0')
//}

let amount = 500;
let withdrawableAmount = 800

if(amount<0){
    console.log('Invalid Withdrawal Amount')
}else if (withdrawableAmount>amount){
    console.log('Insufficient Funds')
} else{
    amount-=withdrawableAmount;
    console.log('Withdrawal successful')
    console.log(`Remaining balance:`,amount)
}