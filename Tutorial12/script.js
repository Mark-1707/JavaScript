console.log('Childern, Parent and Traversing the DOM')

let cont = document.querySelector('.no')
cont = document.querySelector('.container')
console.log(cont.childNodes)
console.log(cont.children)

let nodeType = cont.childNodes[0].nodeType
console.log(nodeType)
// 1 - Element
// 2 - Attribute
// 3 - Text
// 8 - Comment
// 9 - Document
// 10 - Doctype

console.log('-----------------------------------------------------------')
let container = document.querySelector('div.container')
//console.log(container)
console.log(container.firstElementChild.parentNode)
console.log(container.firstElementChild.nextSibling)