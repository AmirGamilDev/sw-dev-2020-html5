/*jslint devel: true */

function displayPersonInfo(person) {
    console.log("Name: " + person.name.firstName + " " + person.name.lastName + ", Age: " + person.age);
}

var people = [];

for(var i = 0; i < 4; i++) {
    var firstName = prompt("Please enter the first name for person " + (i + 1));
    var secondName = prompt("Please enter the second name for person " + (i + 1));
    var age = prompt("Please enter the age for person " + (i + 1));

    var person = {
        name: {
            firstName: firstName,
            lastName: secondName,
        },
        age: age
    };

    people.push(person);
}

for(var i = 0; i < people.length; i++) {
    displayPersonInfo(people[i]);
}
