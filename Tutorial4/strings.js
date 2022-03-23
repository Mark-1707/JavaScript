console.log('Strings : Properties, Methods and Template Literals')

const name = 'Omkar'
const greetings = 'Good Morning'

console.log(`${greetings} ${name}`)

let html = '<h1> this is heading </h1>'+
            '<p> this is paragraph </p>'

html = html.concat('this', 'str2')
console.log(html)

console.log(html.length)
console.log(html.toLowerCase())
console.log(html.toUpperCase())
console.log(html[0])
console.log(html.indexOf('p'))
console.log(html.lastIndexOf('p'))
console.log(html.charAt(3))
console.log(html.endsWith('r2'))
console.log(html.includes('is'))
console.log(html.substring(0,6))
console.log(html.slice(-4,-3))
console.log(html.split(' '))
console.log(html.replace('p','h'))


//Template Literals

let fruite1 = 'Orange'
let fruite2 = 'Apple'
let myHtml = `Hello ${name}
                <h1>This is heading</h1>
                <p>You like ${fruite1} and ${fruite2}</p>
            `;

document.body.innerHTML =  myHtml;