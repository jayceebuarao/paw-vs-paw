document.addEventListener("DOMContentLoaded", function(event) { 
    getPetData();
});

function getPetData(){
    fetch("https://api.thedogapi.com/v1/images/search", {"method": "GET"})
    .then(response => response.json())
    .then(data => {document.getElementById("dog").innerHTML = "<img class='img-fluid' src='" + data[0].url + "'>"})
    .catch(err => {
        console.error(err);
    })

    
    fetch("https://api.thecatapi.com/v1/images/search", {"method": "GET"})
    .then(response => response.json())
    .then(data => {document.getElementById("cat").innerHTML = "<img class='img-fluid' src='" + data[0].url + "'>"})
    .catch(err => {
        console.error(err);
    })

}
