console.log('Object Prototype in Javascript');

//Object literals
let obj = {
    name: 'Omkar',
    age: 25,
    address: 'Sangli'
}

function Obj(givenName){
    this.name = givenName;
}


Obj.prototype.getName = function(){
    return this.name;
}

Obj.prototype.setName = function(givenName){
    this.name = givenName;
}

let obj1 = new Obj('Omkar');

console.log(obj1);