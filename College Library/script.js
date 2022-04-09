console.log('Library Management System');

//Constructor
function Book(name, author, type){
    this.name = name;
    this.author = author;
    this.type = type;
}

//Display Constructor
function Display(){

}

//Add Methods to display prototype
Display.prototype.add = function(book){
    console.log('Adding UI')
    tableBody = document.getElementById('tableBody')
    let uiString  = `
    <tr>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
    </tr>
  `
  tableBody.innerHTML += uiString 

}
Display.prototype.clear = function(){
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset()
}

Display.prototype.validate = function(book){
    if(book.name == '' || book.author == '' || book.type == ''){
        return false
    }else{
        return true
    }
}

Display.prototype.show = function(text){
    let message = document.getElementById('message')
    message.innerText = `
    <div class="alert alert-${text} alert-dismissible fade show" role="alert">
        <strong>Ohhh !</strong> You should check in on some of those fields below.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `
}


//Add submit event listener to form libraryForm
let libraryForm = document.getElementById('libraryForm')
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e){
    console.log('Submitted');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    let type
    

    if(fiction.checked){
        type = fiction.value
    }else if( programming.checked){
        type = programming.value
    }else if(cooking.checked){
        type =cooking.value
    }

    let book = new Book(name, author, type)
    console.log(book);

    let display = new Display()

    if(display.validate(book)){
        display.add(book)
        display.clear()
        display.show("Success")
    }else{
        display.show("Error")
    }
    display.clear()

    e.preventDefault();
}


