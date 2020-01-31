function Player(name, score, lives) {
    this.name = name,
    this.score = score,
    this.numberOfLives = lives

    // this can be done - but performance & memory is slightly worse than
    // using the prototype method below
//    this.increaseScore = function() {
//        this.score += 10;
//    }
}

Player.prototype.increaseScore = function() {
    this.score += 10;
}

var player1 = new Player('Player 1', 100, 9);
var player2 = new Player('Player 2', 110, 7);
var player3 = new Player('Player 3', 120, 5);

console.log(player1);
console.log(player2);
console.log(player3);

console.log("Increase player 2 score 5 times")

player2.increaseScore();
player2.increaseScore();
player2.increaseScore();
player2.increaseScore();
player2.increaseScore();


console.log(player1);
console.log(player2);
console.log(player3);
