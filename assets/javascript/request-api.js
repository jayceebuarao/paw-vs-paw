document.addEventListener("DOMContentLoaded", function(event) { 
    getPetData();
});

function getPetData(){
    //call loading function
    //disable betting feature
    //set images to loading visual

    //reset fields
    
    var dogHand = document.getElementById("dog-hand");
    var catHand = document.getElementById("cat-hand");
    dogHand.innerHTML = "<a class='btn fs-big p-0' onclick='placeBet(\""+"dog"+ "\")' data-pet='dog'>&#128054;</a>" ;
    catHand.innerHTML = "<a class='btn fs-big p-0' onclick='placeBet(\""+"cat"+ "\")' data-pet='cat'>&#128049;</a>";
    
    var userBetDiv = document.getElementById("user-bet");
    userBetDiv.innerHTML = "None, choose your challenger!";
    userbet = null;

    var verdict = document.getElementById("verdict");
    verdict.innerHTML = "Pick your bet!"
    
    var userScoreDiv = document.getElementById("user-board");
    var verdict = document.getElementById("verdict-board");
    verdict.classList.remove("win");
    verdict.classList.remove("lose");
    userScoreDiv.classList.remove("win");
    userScoreDiv.classList.remove("lose");
    var catScoreboard = document.getElementById("cat-scoreboard");
    var dogScoreboard = document.getElementById("dog-scoreboard");
    catScoreboard.classList.remove("win");
    catScoreboard.classList.remove("lose");
    dogScoreboard.classList.remove("win");
    dogScoreboard.classList.remove("lose");

    //request images
    fetch("https://api.thedogapi.com/v1/images/search", {"method": "GET"})
    .then(response => response.json())
    .then(data => {
        document.getElementById("dog-img").src = data[0].url;
        document.getElementById("dog-bg").style.backgroundImage = "url('"+ data[0].url + "')";
    })
    .catch(err => {
        console.error(err);
    })
    
    fetch("https://api.thecatapi.com/v1/images/search", {"method": "GET"})
    .then(response => response.json())
    .then(data => {
        document.getElementById("cat-img").src = data[0].url; 
        document.getElementById("cat-bg").style.backgroundImage = "url('"+ data[0].url + "')"; 
    })
    .catch(err => {
        console.error(err);
    })
}
