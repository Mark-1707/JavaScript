console.log('Creating, Removing and Replacing Elements')

let element = document.createElement('li')

let text = document.createTextNode(`Hey there, I'm a new element`)

element.appendChild(text)

element.className = 'childul'
element.id = 'childLi'
element.setAttribute('title', 'my title')
// element.innerText = 'Hello, I am Omkar Shirote'

let ul = document.querySelector('ul.this')
ul.appendChild(element)
console.log('ul', ul)

console.log('element:', element)

let elem2 = document.createElement('h3')

elem2.id = 'elem2'
elem2.className = 'elem2'
let tnode = document.createTextNode('I am a elem2 node')
elem2.appendChild(tnode)

element.replaceWith(elem2)

let myul = document.getElementById('myul')
myul.replaceChild(element, document.getElementById('fui'))
myul.removeChild(document.getElementById('lui'))