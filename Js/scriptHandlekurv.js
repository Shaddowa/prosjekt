//Gir totalsummen til alle varene du har i handlekurven




function leggTilHandlekurv(e){


    var valgtVare = e.target;

    //gir en id for hver vare slik at det kan fjernes senere om ønsket
    idHK = valgtVare.id;
    
    


    sumTotal += Number(valgtVare.value);


    vareHK = valgtVare.name;
    prisHK = Number(valgtVare.value);

    if (handlekurvEl.length === 0) {
       
        var pushLinje = { vare: vareHK, pris: prisHK, id: Number(idHK), antall : 1 };
        handlekurvEl.push(pushLinje);
        
        
        
        
    } else {
        var lagttil = false;
        
        for (var i = 0; i < handlekurvEl.length; i++){

            if (idHK == Number(handlekurvEl[i].id)) {
                lagttil = true;
                
                handlekurvEl[i].antall += 1;
                
                break;
                
            }  
                     
        }

        if(!lagttil) {
            
            var pushLinje = { vare: vareHK, pris: prisHK, id: Number(idHK), antall: 1 };
            handlekurvEl.push(pushLinje);
        }

        
    }




   



};



var handlekurvDivEl = document.getElementById("DinHandlekurv");


//Når man har musen over "handlevognen" vises innholdet
handlekurvDivEl.addEventListener("mouseover", visHandlekurv);
handlekurvDivEl.addEventListener("mouseout", skjulHandlekurv);




// Handlekurven genereres
function visHandlekurv() {

    var HKcontainer = document.getElementById("HKContainer");
    var HK = document.createElement("div");
    HK.id = "HK";
    HKcontainer.appendChild(HK);

    //HK.addEventListener("mouseout", skjulHandlekurv);

    var visSum = document.createElement("div");
    visSum.className = "handleKurvEl";
    visSum.innerHTML = "Totalt : " + sumTotal;
    HK.appendChild(visSum);
    
    if (handlekurvEl.length === 0) {
    
    } else {
        for (var i = 0; i < handlekurvEl.length; i++) {

            var divEl = document.createElement("div");
            divEl.className = "handleKurvEl";
            divEl.innerHTML = "<hr>" + "x" + handlekurvEl[i].antall + "   " + handlekurvEl[i].vare + "<br>" + handlekurvEl[i].pris;
            HK.appendChild(divEl);

        }
    }

};



function skjulHandlekurv() {

    var HK = document.getElementById("HK");

    HK.parentNode.removeChild(HK);

}


//Betalingsfunksjon
handlekurvDivEl.addEventListener("click", betaling);

function betaling() {

    //BETALINGSSKJEMA
    if (handlekurvEl.length === 0) {
        console.log("du har ingen varer");

    } else {
        betalingsSkjema();
    }
}

function betalingsSkjema() {
    /*
    var skjema = document.createElement("form");
    skjema.id = "skjema";
    betalingsSkjemaEl.appendChild(skjema);
    var fNavn = document.createElement("input");
    fNavn.type = "text";
    fNavn.placeholder = "Fornavn";
    var eNavn = document.createElement("input");
    eNavn.type = "text";
    eNavn.placeholder = "Etternavn";
    var adresse = document.createElement("input");
    adresse.type = "text";
    adresse.placeholder = "Adresse";
    var tlf = document.createElement("input");
    tlf.type = "number";
    tlf.placeholder = "tlf";
    var eMail = document.createElement("input");
    eMail.type = "text";
    eMail.placeholder = "Mail";
    var metode = document.createElement("input");
    metode.type = "radio";
    metode.value = "delivery";
    metode.style.color = "red";
    metode.name = "betaling";
    var metode_2 = document.createElement("input");
    metode_2.type = "radio";
    metode_2.name = "betaling";
    var buttonEl = document.createElement("button");
    buttonEl.type = "button";
    buttonEl.id = "pay";
    buttonEl.innerHTML = "Proceed";

    skjema.appendChild(fNavn);
    skjema.appendChild(eNavn);
    skjema.appendChild(adresse);
    skjema.appendChild(tlf);
    skjema.appendChild(eMail);
    skjema.appendChild(metode);
    skjema.appendChild(metode_2);
    skjema.appendChild(buttonEl);


    */
    var typer = [{ placeholder: "Fornavn", type: "text", id: 0 },
    { placeholder: "Etternavn", type: "text", id: 1 },
    { placeholder: "Email", type: "text", id: 2 },
    { placeholder: "tlf", type: "number", id: 3 },
    { placeholder: "Adresse", type: "text", id: 4 },
    { placeholder: "levering", type: "radio", name: "betaling", id: 5, value: true },
    { placeholder: "drop in", type: "radio", name: "betaling", id: 6, value: false },
    { placeholder: "Proceed", type: "button", id: "pay" },
    ]

    var skjema = document.createElement("form");

    for (var i = 0; i < typer.length; i++) {
        var inputEl = document.createElement("input");
        inputEl.className = "betaling";
        if (typer[i].type == "radio") {

            if (typer[i].placeholder == "levering") {
                inputEl.type = typer[i].type;
                inputEl.name = typer[i].name;
                inputEl.value = typer[i].value;
                inputEl.id = typer[i].id;
                var pEl_1 = document.createElement("label");
                pEl_1.innerHTML = "Levering";
                skjema.appendChild(inputEl);
                skjema.appendChild(pEl_1);

            } else {

                inputEl.type = typer[i].type;
                inputEl.name = typer[i].name;
                inputEl.value = typer[i].value;
                inputEl.id = typer[i].id;
                inputEl.checked = "checked";
                var pEl_2 = document.createElement("label");
                pEl_2.innerHTML = "Drop in"
                skjema.appendChild(inputEl);
                skjema.appendChild(pEl_2);
            }

        } else if (typer[i].type == "button") {
            inputEl.innerHTML = typer[i].placeholder;
            inputEl.type = typer[i].type;
            inputEl.id = typer[i].id;
            skjema.appendChild(inputEl);
        } else {
            inputEl.placeholder = typer[i].placeholder;
            inputEl.type = typer[i].type;
            inputEl.id = typer[i].id;
            skjema.appendChild(inputEl);
        }

    }
    betalingsSkjemaEl.appendChild(skjema);

    /*
    for(var egenskaper in typer){
        //VIKTIG SETNING
        placeholders.push(Object.keys(typer[egenskaper]));
    
    }
    */



    //SELVE BETALINGSDELEN
    var betalingsKnapp = document.getElementById("pay");


    betalingsKnapp.addEventListener("click", betal);


    function betal() {
        console.log("hello");
    }



};



