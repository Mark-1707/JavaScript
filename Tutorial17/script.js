console.log('Creating an editable div')


let editDiv = document.getElementById('editable')
editDiv.innerText = localStorage.getItem('text')
let enter = document.getElementById('body')

editDiv.addEventListener('click', toEditable)

enter.addEventListener('click', enterDiv)

function toEditable(){
    editDiv.contentEditable = true
    editDiv.focus()
}

function enterDiv(){
    editDiv.contentEditable = false
    text = editable.innerText
    localStorage.setItem('text', text)

}