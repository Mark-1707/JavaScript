class Library{

    constructor(books){
        this.books = books;
    }

    getBookList(){
        return this.books
    }

    issueBook(bookName, user){
        if(bookName.includes(bookName)){
            return `${user} has issued ${bookName}`
        }else{
            return `${bookName} is not available`
        }
    }

    returnBook(bookName){
        return `${bookName} is returned`
    }
}

let l1 = new Library(['C', 'C++', 'Java', 'JavaScript', 'Python']);

console.log(l1.getBookList());

let res = l1.issueBook('C', 'mark')
console.log(res)

res = l1.returnBook('C')
console.log(res)

