console.log("Loops in javascript")


//for, while, do-while
console.log("For")
for(let i = 0; i < 10; i++){
    console.log(i)
}

console.log("while")
console.log()
let j =0
while(j < 10){
    console.log(j)
    j++
}

let k = 0

console.log("do-while")
do{

    //Continue Statement
    // if(k===5){
    //     continue
    // }
    //Break Statement
    if(k===9){
        break
    }
    console.log(k)
    k += 1
} while(k < 10)


let arr = [1,2,3,4,5,6,7,8,9,10]
arr.forEach(function(element, index, array) {
    console.log(element, index, array)
})

let obj = {
    name: "John",
    age: 30,
    type: "Admin",
    os: "Linux"
}

for(let key in obj){
    console.log(`${key} of object is ${obj[key]}`)
}