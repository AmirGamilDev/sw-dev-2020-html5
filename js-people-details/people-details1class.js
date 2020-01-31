var helloFrom = function(personName) {
  return "Hello from " + personName;
};

var people = ['Tom', 'Yoda', 'Rob', 'Ron'];

for(var i = 0; i < people.length; i++) {
    var greeting = helloFrom(people[i]);
    alert(greeting);
    console.log(greeting);
}

var people2 = [4];
