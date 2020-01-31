var group = [];

for(var i = 0; i < 4; i++) {
    var personsName = prompt("Please enter name for person " + (i+1));
    var personsAge = prompt("Please enter age for person " + (i+1));

    group[i] = {
        name: personsName,
        age: personsAge
    };
}

var display = function(person) {
    console.log("Name: " + person.personsName + ", Age: " + person.age);
};


for(var i = 0; i < group.length; i++) {
    display(group[i]);
}
