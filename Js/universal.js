var oppKnapp = document.getElementById("to-top");

oppKnapp.addEventListener("click", toTop);

function toTop(){
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

console.log("jeu");