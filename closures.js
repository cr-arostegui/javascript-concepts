var passed = 3;

var addTo = function() {
  var inner = 2;
  return passed + inner;
}

var addTo2 = addTo;
console.log(addTo2());
passed = 2;
var addTo3 = addTo;
console.log(addTo3());

/*********************/
addTo = function(passed) {
  var add = function(inner) {
    return passed + inner;
  }
  return add;
};

console.log(addTo(3)(2));