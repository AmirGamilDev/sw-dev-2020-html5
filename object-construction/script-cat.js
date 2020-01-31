function Cat(name, colour, age, weight) {
    this.name = name;
    this.colour = colour;
    this.age = age;
    this.weight = weight;
}

Cat.prototype.meow = function() {
    alert(name + ' says \'Meow\'');
}

Cat.prototype.eat = function() {
    this.weight += 0.1;
}

var tom = new Cat("Tom", "Ginger", 5, 4.3);
var philomena = new Cat("Philomena", "Black", 8, 3.2);
var scruffy = new Cat("Scruffy", "White", 3, 4.1);

console.log(tom);
console.log(philomena);
console.log(scruffy);

scruffy.eat();

console.log(tom);
console.log(philomena);
console.log(scruffy);
