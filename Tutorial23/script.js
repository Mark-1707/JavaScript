console.log('ES6 classes and inheritance')


class Employee {

    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName
        this.experience = givenExperience
        this.division = givenDivision
    }

    slogan(){
        return `I am ${this.name} and I have ${this.experience} years experience in ${this.division} division`
    }

    joiningYear(){
        return 2020 - this.experience
    }

    //Static Methods : Can call without creating an object

    static add(a, b){
        return a + b
    }
}


class Programmer extends Employee{
    constructor(givenName, givenExperience, givenDivision, language){
        super(givenName, givenExperience, givenDivision)
        this.language = language
    }

    favLang(){
        if (this.language == 'python'){
            return 'Python is a very popular language'
        }
        else{
            return "Java is a very popular language"
        }
    }

    static multi(a, b){
        return a * b
    }
}

let mark = new Employee('Mark', 5, 'IT')
console.log(mark.slogan())
console.log(mark.joiningYear())

console.log(Employee.add(10, 20))

let omkar = new Programmer('Omkar', 10, 'IT', 'Java')
////console.log(omkar)
//console.log(omkar.favLang())
console.log(Programmer.multi(10, 20))