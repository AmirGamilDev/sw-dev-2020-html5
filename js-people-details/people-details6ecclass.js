
var group = [];

for(var i = 0; i < 4; i++) {
    var personsFirstName = prompt("Please enter first name for person " + (i+1));
    var personsSecondName = prompt("Please enter second name for person " + (i+1));
    var personsAge = prompt("Please enter age for person " + (i+1));

    group[i] = {
        name: {
            firstName: personsFirstName,
            secondName: personsSecondName
        },
        age: personsAge
    };
}

var display = function(person) {
    console.log("Name: " + person.name.firstName + " " + person.name.secondName + ", Age: " + person.age);
};

for(var i = 0; i < group.length; i++) {
    display(group[i]);
}
