//function checkVotingEligibility(){
 let age = 20
 let idCard = 'present'
 let votersCard = 'present'
if (age <= 18){
    console.log('Cannot vote')
}else if (idCard != 'present'){
    console.log('Lack proper documents')
}else if (votersCard != 'present'){
    console.log('Lack of proper documents')
}else{
    console.log('Eligible Voter')
}
//}