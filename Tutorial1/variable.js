console.log('Tut1')
//Variables in js

//var, let, const

var name = `Omkar`
console.log(name)

var channel
//channel = `Code with Omkar`
console.log(channel)

//Integer
var marks = 34
console.log(marks)

/*
Rules for creating javascript variable
1. Variable name must start with a letter, underscore or $
2. Cannot start with numbers
3. Case sensitive
*/

var city = `Bangalore`
console.log(city)
// _ is used as private variable in object oriented javascript

const myName = 'Omkar Shirote'
console.log(myName)
//myName = 'Omkar'  //cannot change const values

//const fruit  //const variable must be initialized

//var has golbal scope
//let has block level scope

{
    let city = `Sangli`
    city = `Kolakatta`
    console.log(city)
}

console.log(city)



//Arrays

const arr1 = [12,13,31,21,43,14]
arr1.push(15)
console.log(arr1)

