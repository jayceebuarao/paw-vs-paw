let catScore = 0;
let dogScore = 0;
let userbet = null;
let userpoint = 0;
var result = null;
var winsfx = new Audio("assets/sfx/609336__kenneth-cooney__completed.wav");
var failsfx = new Audio("assets/sfx/404743__owlstorm__retro-video-game-sfx-fail.wav");
var tiesfx = new Audio("assets/sfx/241000__dsisstudios__short-fart-01.wav");

//display hand to user
function showHand(){
    var dogHand = document.getElementById("dog-hand");
    var catHand = document.getElementById("cat-hand");

    var dogHand1 = rollHand();
    var catHand1 = rollHand();

    processResult(dogHand1, catHand1);

    if(dogHand1 == "rock"){
        dogHand.innerHTML = "🪨";
    }else if(dogHand1 == "paper"){
        dogHand.innerHTML = "📃";
    }else if(dogHand1 == "scissors"){
        dogHand.innerHTML = "✂️";
    }

    if(catHand1 == "rock"){
        catHand.innerHTML = "🪨";
    }else if(catHand1 == "paper"){
        catHand.innerHTML = "📃";
    }else if(catHand1 == "scissors"){
        catHand.innerHTML = "✂️";
    }

}

//randomize each pet's hand
function rollHand(){
    var randnum = Math.floor(Math.random() * 3);
    const hands = ["rock", "paper", "scissors"];
    return hands[randnum];
}

//process players score and users scores by analyzing bet result
function processResult(dogHand, catHand){
    var dogScoreDiv = document.getElementById("dog-score");
    var catScoreDiv = document.getElementById("cat-score");
    var userScoreDiv = document.getElementById("user-score");
    var verdict = document.getElementById("verdict");
    result = null;
    if(dogHand != catHand){
        if(dogHand == "rock"){
            if(catHand == "paper"){
                verdict.innerHTML = "CAT TEAM WINS!";
            }
            else if(catHand == "scissors"){
                verdict.innerHTML = "DOG TEAM WINS!";
            }
        }
        else if(dogHand == "paper"){
            if(catHand == "rock"){
                verdict.innerHTML = "DOG TEAM WINS!";
            }
            else if(catHand == "scissors"){
                verdict.innerHTML = "CAT TEAM WINS!";
            }
        }
        else if(dogHand == "scissors"){
            if(catHand == "paper"){
                verdict.innerHTML = "DOG TEAM WINS!";
            }
            else if(catHand == "rock"){
                verdict.innerHTML = "CAT TEAM WINS!";
            }
        }
    }else{
        verdict.innerHTML = "IT'S A TIE";
    }

    if (verdict.innerHTML == "CAT TEAM WINS!"){
        catScore++;
        catScoreDiv.innerHTML = catScore;
        console.log("catscore: " + catScore); 
        if(userbet == "cat"){
            userpoint++;
            result = "win";
        }else if(userbet == "dog"){
            userpoint--;
            result = "lose";
        }
        toggleScoreboard("cat");
    }
    if( verdict.innerHTML == "DOG TEAM WINS!"){
        dogScore++;
        dogScoreDiv.innerHTML = dogScore;
        console. log("dogscore: " + dogScore);
        if(userbet == "dog"){
            userpoint++;
            result = "win";
        }else if(userbet == "cat"){
            userpoint--;
            result = "lose";
        }
        toggleScoreboard("dog");
    }

    userScoreDiv.innerHTML = userpoint; 
    cuefx();
}   

//initialize user's bet
function placeBet(bet){
    //get data-pet (dog/cat)
    //set userbet = data-pet
    // var bet = this.getAttribute("data-pet");
    userbet = bet;
    var userBetDiv = document.getElementById("user-bet");
    userBetDiv.innerHTML = bet;
    console.log("placebet() called" + bet);
}

function toggleScoreboard(winner){
    var catScoreboard = document.getElementById("cat-scoreboard");
    var dogScoreboard = document.getElementById("dog-scoreboard");
    catScoreboard.classList.remove("win");
    catScoreboard.classList.remove("lose");
    dogScoreboard.classList.remove("win");
    dogScoreboard.classList.remove("lose");
    if(winner == "cat"){
        catScoreboard.classList.add("win");
        dogScoreboard.classList.add("lose");
    }else if(winner == "dog"){
        catScoreboard.classList.add("lose");
        dogScoreboard.classList.add("win");
    }
}

function cuefx(){
    var userScoreDiv = document.getElementById("user-board");
    var verdict = document.getElementById("verdict-board");
    verdict.classList.remove("win");
    verdict.classList.remove("lose");
    userScoreDiv.classList.remove("win");
    userScoreDiv.classList.remove("lose");
    if (result == "win"){
        winsfx.play();
        verdict.classList.add("win");
        userScoreDiv.classList.add("win");
    }else if (result == "lose"){
        failsfx.play();
        verdict.classList.add("lose");
        userScoreDiv.classList.add("lose");
    }else{
        tiesfx.play();
    }
}

function reset(){
    catScore = 0;
    dogScore = 0;
    userpoint = 0 
    userbet = null;
    result = null;
    var dogScoreDiv = document.getElementById("dog-score");
    var catScoreDiv = document.getElementById("cat-score");
    var userScoreDiv = document.getElementById("user-score");
    var userBetDiv = document.getElementById("user-bet");
    var verdict = document.getElementById("verdict");
    dogScoreDiv.innerHTML = dogScore;
    catScoreDiv.innerHTML = catScore;
    userScoreDiv.innerHTML = userpoint;
    userBetDiv.innerHTML = "no bets yet. pick a side :))"
    verdict.innerHTML = "TAKE A BET!!!!"
    cuefx();
}