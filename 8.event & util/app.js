const events = require('events');
const util = require('util');

var Person = function(name) {
  this.name = name;
}

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mar = new Person('mar');
var asd = new Person('asd');

var people = [james, mar, asd];

people.forEach(function(person) {
  person.on('speak', function(mssg) {
    console.log(person.name + " : " + mssg);
  })
})

james.emit('speak', "hello, everyone")
mar.emit('speak','꺄르르륵')
