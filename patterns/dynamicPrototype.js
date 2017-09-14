var peopleDynamicProto = function(name, age, state) {
  
  this.name = name;
  this.age = age;
  this.state = state;

  if( typeof this.printPerson !== 'function') {
    peopleDynamicProto.prototype.printPerson = function() {
      console.log(this.name + ', ' + this.age + ', ' + this.state);
    };
  }
};

var person1 = new peopleDynamicProto('jhon', 23, 'CA');
var person2 = new peopleDynamicProto('kim', 27, 'SF');

person1.printPerson();
person2.printPerson();

console.log('name' in person2); //verify with the prototype
console.log(person2.hasOwnProperty('name'));//verify without the prototype