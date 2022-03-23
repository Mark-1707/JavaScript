console.log("Arrays and Objects")

let marks = [23, 31, 43, 65, 19]
const fruits = ["Orange", "Apple", "Banana", "Mango"]
const mixed = ['str', 89, [2, 4]]

const arr = new Array(23, 31, 43, 65, "Oragen", "Apple", "Banana", "Mango")
console.log(arr)
console.log(fruits)
console.log(mixed)

console.log(marks.length)
console.log(Array.isArray(arr))


console.log(marks)
console.log(marks.indexOf(43))

//Mutating Arrays
marks.push(100)
marks.unshift(0)
marks.pop()
marks.shift()
marks.splice(1, 3)
marks.reverse()
marks = marks.concat(["Orange", "Apple", "Banana", "Mango"])
console.log(marks)


//Objects
let myObj = {
    name: 'Omkar',
    channel: 'mark',
    isActive: true,
    marks: [1, 3, 5, 7]
}

console.log(myObj)
console.log(myObj.marks)