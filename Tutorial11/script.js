console.log('HTML Element selector in Javascript')

/*
    1. Single Element Selector
    2. Multiple Element Selector
*/


// Single Element Selector
let element = document.getElementById('myfirst')
//element = element.className
//element = element.childNodes
//element = element.parentNode
element.style.color = 'red'
element.innerText = 'Hey Omkar'
element.innerHTML = '<b>Hey Omkar</b>'
//console.log(element)
//console.log(element.innerHTML)


//get first element with tag or id or class name
let sel = document.querySelector('#myfirst')
sel = document.querySelector('.child')
sel = document.querySelector('b')
sel.style.color = 'green'
console.log(sel)


//Multiple Element Selector
let elems = document.getElementsByClassName('container')
elems = document.getElementsByTagName('div')
console.log(elems[0].getElementsByClassName('child'))

Array.from(elems).forEach(element => {
    console.log(element)
    element.style.color = 'red'
})