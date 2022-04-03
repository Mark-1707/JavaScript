console.log('Object Literals, Constructors and Object oriented Javascript')

//Object literals for creating objects
let car = {
    name: 'Maruti 800',
    topSpeed: 100,
    run: function run(){
        consol.log('running')
    }
}

//Creating constructors for cars

function generalCar(givenName, givenSpeed){
    this.name = givenName
    this.topSpeed = givenSpeed
    this.run = function(){
        console.log(`${this.name} is running`)
    }
}

let car1 = new generalCar('BMW', 200)
console.log(car1.run())

console.log(car1)