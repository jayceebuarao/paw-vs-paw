document.addEventListener("DOMContentLoaded", function(event) { 
    getPetData();
});

function getPetData(){
    //call loading function
    //disable betting feature

    //request images
    fetch("https://api.thedogapi.com/v1/images/search", {"method": "GET"})
    .then(response => response.json())
    .then(data => {document.getElementById("dog-img").src = data[0].url, document.getElementById("dog-bg").style.backgroundImage = "url('"+ data[0].url + "')"})
    .catch(err => {
        console.error(err);
    })
    
    fetch("https://api.thecatapi.com/v1/images/search", {"method": "GET"})
    .then(response => response.json())
    .then(data => {document.getElementById("cat-img").src = data[0].url; document.getElementById("cat-bg").style.backgroundImage = "url('"+ data[0].url + "')";})
    .catch(err => {
        console.error(err);
    })

    //enable betting feature
}
