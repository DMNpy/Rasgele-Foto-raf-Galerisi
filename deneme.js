var rasgele= document.getElementById("rasgele");



for ( let i = 0; i<15; i++) {

    rasgele.innerHTML += `<img src="https://source.unsplash.com/random/${i + 1}" alt="photo">`;

    }


var yenile= document.getElementById("yenile")

yenile.addEventListener("click", function() {
    location.reload();
})

