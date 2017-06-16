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


//front end

$(document).ready(function() {

  $("button#start").click(function(event) {
    player1 = new Player(true);
    player2 = new Player(false);

    $(".player-console").show();
    $(".start-menu").hide();

    var player1Name = $(".player1Name").val();

    $("#player1Name").text(player1Name);

    var player2Name = $(".player2Name").val();

    $("#player2Name").text(player2Name);

    player1.playerName = player1Name;
    player2.playerName = player2Name;

  });

  $("button#new-game").click(function(event) {
    $(".player-console").hide();
      clearValues();
        player1.newGame();
        player2.newGame();

    $("#round-total-1").empty();
     $("#total-score-1").empty();
      $("#die-toss-1").empty();
       $("#round-total-2").empty();
        $("#total-score-2").empty();
         $("#die-toss-2").empty();

    $(".start-menu").show();
  });
