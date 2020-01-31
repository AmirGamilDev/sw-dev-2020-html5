var person1 = {
    name: "Kevin",
    age: 28
};

var person2 = {
    name: "Paul",
    age: 22
};

var yoda = {
    name: "Yoda",
    age: 899
};

var obiWan = {
    name: "Obi-Wan",
    age: 63
};

var group = [person1, person2, yoda, obiWan];

var display = function(person) {
    console.log("Name: " + person.name + ", Age: " + person.age);
};


for(var i = 0; i < group.length; i++) {
    display(group[i]);
}
