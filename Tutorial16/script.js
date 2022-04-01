console.log('Local and Session storage in Javascript')


//Add key-value pairs inside local storage
localStorage.setItem('Name1', 'Omkar')
localStorage.setItem('Name2', 'Shreyas')


//retrieve item from local storage
let name = localStorage.getItem('Name1')
console.log(name)

//CLears local storage
//localStorage.clear()

//Clear particular item from local storage
//localStorage.removeItem('Name1')

//cant add array directly

let arr = ['Omkar', 'Shreyas', 'Raju']
// localStorage.setItem('arr', arr)
// console.log(localStorage.getItem('arr'))

localStorage.setItem('arr',JSON.stringify(arr))
name = JSON.parse(localStorage.getItem('arr'))
console.log(name)


//Session is same as localStorage but it is cleared when browser is closed
