//backend
var player1 = "";
var player2 = "";

var tossdice = function() {
  return Math.floor(Math.random() *6 + 1);
};

function Player(turn) {
  this.toss = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.playerName = "";
}

Player.prototype.tossone = function() {
  if (this.toss === 1) {
    this.tempscore = 0;
    alert("Sorry " + this.playerName + ", you rolled a 1! Your turn is over!");

  } else {
    this.tempscore += this.toss;
  }
};

Player.prototype.hold = function() {
  this.totalscore += this.tempscore;
  this.tempscore = 0;
  alert(this.playerName + ", your turn is over, pass the mouse!");
};

Player.prototype.winnerCheck = function() {
  if (this.totalscore >= 100) {
    alert(this.playerName + " You are the winner!");
  }
};

Player.prototype.newGame = function() {
  this.toss = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.playerName = "";
};
