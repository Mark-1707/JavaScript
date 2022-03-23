//Type Conversion and type coercion

console.log('Type Conversion and type coercion')
let myVar
myVar = String(34)
console.log(myVar, (typeof myVar))

let booleanVar = true
console.log(booleanVar, (typeof booleanVar))

let date = new Date()
console.log(date, (typeof date))

let arr = String([1, 2, 3, 4, 5])
console.log(arr.length, (typeof arr))

let i = 9
console.log(i.toString(), (typeof i))

let str = Number("22121")
console.log(str, (typeof str))

let number = parseFloat('34.1212')
console.log(number.toFixed(2), (typeof number))