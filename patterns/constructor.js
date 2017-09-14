var peopleConstructor = function(name, age, state) {
  this.name = name;
  this.age = age;
  this.state = state;

  this.printPerson = function() {
    console.log(this.name + ', ' + this.age + ', ' + this.state);
  };
};

var person1 = new peopleConstructor('jhon', 23, 'CA');
var person2 = new peopleConstructor('kim', 27, 'SF');

person1.printPerson();
person2.printPerson();