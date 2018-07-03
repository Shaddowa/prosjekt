//Henter inn div elementet hvor varene blir vist
var displayVarerEl = document.getElementById("displayVarer");



function visVarer(){
    
    //Veldig bra triks!
    displayVarerEl.innerHTML = "";

    for(var i = 0; i < utvalgEl.length; i++){
        
        var divEl = document.createElement("div");
        divEl.className = "vare";
        displayVarerEl.appendChild(divEl);


        // Legge til verdier som hører til i utvalgEl
        //Først legge til varenavn

        var textEl = document.createElement("h3");
        textEl.className = "textVare";
        textEl.innerHTML = utvalgEl[i].vare +" <br> " + utvalgEl[i].pris + ",-";


        //Legg til knapp


        var buttonEl = document.createElement("button");
        buttonEl.innerHTML = "Legg til i handlekurven";
        buttonEl.className = "buttonVare";
        buttonEl.value = Number(utvalgEl[i].pris);
        buttonEl.name = utvalgEl[i].vare;
        buttonEl.id = i;

        
        
        
        
        //Om knappen trykkes skal funksjonen leggTilHandlekurv() starte.
        buttonEl.addEventListener("click", leggTilHandlekurv);

        divEl.appendChild(textEl);
        divEl.appendChild(buttonEl);

    


    }

}




