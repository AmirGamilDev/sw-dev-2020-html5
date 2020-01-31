var Cat = function(name, colour, age, weight) {
    this.name = name;
    this.colour = colour;
    this.age = age;
    this.weight = weight;
}

Cat.prototype.meow = function() {
    alert(this.name + " says meow");
}

Cat.prototype.eat = function() {
    this.weight += 0.1;
}

var tom = new Cat("Tom", "Ginger", 4, 3.4);
var philomena = new Cat("Philomena", "Black", 8, 3.57);
var scruffy = new Cat("Scruffy", "Grey", 5, 3.45);

console.log(tom);
console.log(philomena);
console.log(scruffy);



for(var i = 0; i < 4; i++) {
    tom.eat();
}

for(var i = 0; i < 3; i++) {
    philomena.eat();
}

for(var i = 0; i < 7; i++) {
    scruffy.eat();
}

console.log(tom);
console.log(philomena);
console.log(scruffy);
