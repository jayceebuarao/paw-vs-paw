//display hand to user
function showHand(){
    var dogHand = document.getElementById("dog-hand");
    var catHand = document.getElementById("cat-hand");

    dogHand.innerHTML = rollHand();
    catHand.innerHTML = rollHand();

    processResult(dogHand.innerHTML, catHand.innerHTML);
}

//randomize each player's hand
function rollHand(){
    var randnum = Math.floor(Math.random() * 3);
    const hands = ["rock", "paper", "scissors"];
    return hands[randnum];
}

//count down before showing hand
function countDown(){

}

//process players score and users scores by analyzing bet result
function processResult(dogHand, catHand){
    var dogScore = document.getElementById("dog-score");
    var catScore = document.getElementById("cat-score");
    var verdict = document.getElementById("verdict");
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
}   

//initialize user's bet
function pickBet(){

}


//update results from processResults()
function updateScore(){

}