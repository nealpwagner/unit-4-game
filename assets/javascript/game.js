
var targetNumber = 0;
var current = 0;
var wins = 0;
var losses = 0;
resetScreen();

$( ".img-responsive" ).click(function() {
    if(this.id == "crystal1"){
        current = current + 3;
    }
    if(this.id == "crystal2"){
        current = current +1;
    }
    if(this.id == "crystal3"){
        current = current + 6;
    }
    if(this.id == "crystal4"){
        current = current + 4;
    }
    $("#currentGuess").text(current);

    if(current > targetNumber){
        processLoser();
    }
    if(current == targetNumber){
        processWinner();
    }
  });

 function processWinner(){
     alert("winner")
     wins = wins + 1;
     resetScreen();
 }
 function processLoser(){
    alert("loser")
    losses = losses + 1;
    resetScreen();
}
function resetScreen(){
    targetNumber = Math.floor(Math.random() * 50);
    current = 0;
    $("#winCount").text(wins);
    $("#loseCount").text(losses);
    $("#randomNumber").text(targetNumber);
    $("#currentGuess").text(current);
}

  