console.log('Conditional Statements and Switch Statements')

let age = 19
let doesDrive = true

if (age > 18){
    console.log('Eligible for Voting')
}else if(age > 13){
    console.log('You are a teenager')
}else if(age === 0){
    console.log('You are a child')
}
{
    console.log('You are a child')
}

if (doesDrive){
    console.log('You can drive')
}else{
    console.log('You cannot drive')
}

//Ternary Operator

console.log(age>=19? 'Eligible for Voting': 'Not Eligible for Voting')

//Switch  case

switch (age){
    case 18:
        console.log('You are 18')
        break
    case 19:
        console.log('You are 19')
        break
    default:
        console.log('You are not 18 or 19')
}