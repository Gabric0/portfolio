// Récupération des éléments
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("close")[0];

// Ouvrir la modale
btn.onclick = function() {
    modal.style.display = "block";
}

// Fermer la modale
span.onclick = function() {
    modal.style.display = "none";
}

// Fermer la modale si on clique à l'extérieur
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}