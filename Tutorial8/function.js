console.log('Functions and Scope')

function greet(name1, thank='Thank you'){

    console.log(`Happy Birthday ${name1} ${thank}`)

    return name1
}

let name1 = 'Omkar'
let name2 = 'Shreyas'

let val = greet(name1, 'Thank you')

console.log(val)

let a = 10
let b = 20

const mySum = function(a,b){
    return a+b
}

console.log(mySum(a,b))


let arr = ['Omkar', 'Shreyas', 'Sachin']
arr.forEach(function(name){
    console.log(name)
})