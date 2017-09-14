var peopleProto = function() {

};

peopleProto.prototype.age = 0;
peopleProto.prototype.name = 'No Name';
peopleProto.prototype.state = 'No State';

peopleProto.prototype.printPerson = function() {
  console.log(this.name + ', ' + this.age + ', ' + this.state);
};

var person1 = new peopleProto();
var person2 = new peopleProto();

person1.name = 'Jhon';
person1.age = 23;
person1.state = 'CA';

//person2.name = 'Kim';
person2.age = 27;
person2.state = 'SF';

person1.printPerson();
person2.printPerson();

console.log('name' in person2); //verify with the prototype
console.log(person2.hasOwnProperty('name'));//verify without the prototype