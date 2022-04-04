console.log('Prototype Inheritance in Javascript')

const proto = {
    slogan: function(){
        return `This company is best`
    },
    changeName: function(newName){
        this.name = newName
    }
}

const mark = Object.create(proto)
mark.name = 'Mark'
mark.changeName("Omkar")
console.log(mark)


//Employee Constructor

function Employee(name, salary, experience){
    this.name = name
    this.salary = salary
    this.experience = experience
}

//Slogan

Employee.prototype.slogan = function(){
    return `This company is best regars this ${this.name}`
}

let markObj = new Employee('Mark', 100000, 5)
console.log(markObj.slogan())

//Programmer

function Programmer(name, salary, experience, language){
    Employee.call(this, name, salary, experience)
    this.language = language
}

//Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype)

//Manually set the constructors
Programmer.prototype.constructor = Programmer


let omkar = new Programmer("Omkar", 100000, 5, "JavaScript")
console.log(omkar)