var bodyEl = document.querySelector("body");
var tableEls = document.getElementById("table");
var statsWindow = document.getElementById("stats");




//Utvalgs seksjon : prototype
//Globale variabler

var navn;
var type;
var kategori;
var pris;
var beskrivelse;
var id = -1;



//Utvalget har ingen varer enda
var utvalgEl = [];

//EventListener for registrering av produkt
var buttonEl = document.getElementById("leggTil");
buttonEl.addEventListener("click", startProgram);

function startProgram(navn, type, kategori, pris, id, beskrivelse) {

    leggTilVarer();

    function leggTilVarer() {

        Number(id++);

        //gir en unik id til alle varene

        var leggTilVarerEls = document.getElementsByClassName("leggTilVarer");
        var typeEl = document.getElementById("variant");
        var kategoriEl = document.getElementById("kategori");
        var textareaEl = document.getElementById("textarea");





        //besrkivelse

        beskrivelse = textareaEl.value;



        //Loop for varenavnet og vareprisen
        for (var i = 0; i < leggTilVarerEls.length; i++) {

            if (leggTilVarerEls[i].id === "mat") {
                navn = leggTilVarerEls[i].value;
            }
            else if (leggTilVarerEls[i].type === "number") {
                pris = Number(leggTilVarerEls[i].value);

            }

        }

        //Loop for vare type

        for (var j = 0; j < typeEl.length; j++) {
            if (typeEl[j].selected) {
                type = typeEl[j].value;
            }
        }

        //Loop for kategori
        for (var k = 0; k < kategoriEl.length; k++) {
            if (kategoriEl[k].selected) {
                kategori = kategoriEl[k].value;
            }
        }

        var pushLinje = { vare: navn, pris: pris, beskrivelse: beskrivelse, type: type, kategori: kategori, id: Number(id) };
        utvalgEl.push(pushLinje);

        console.log("Dette er første steg her legges varer til", utvalgEl);


        //Legge til en tabell som viser det som er lagt til på siden
        lagTabell();
    }



    //Tabellen

    function lagTabell() {

        //Lager tabellradene og gjør at tabellen blir ordentlig
        tableEls.innerHTML = "<tr><th>Vare</th><th>Pris</th><th>Beskrivelse</th><th>Type</th><th>Kategori</th>";
        var currentTabellSetning = "";

        for (var i = 0; i < utvalgEl.length; i++) {

            currentTabellSetning += "<tr><td>" + utvalgEl[i].vare + "</td><td>" + utvalgEl[i].pris + "</td><td>" + utvalgEl[i].beskrivelse + "</td><td>" + utvalgEl[i].type + "</td><td>" + utvalgEl[i].kategori + "</td><td><button class='edit' id=" + i + "></button></td></tr>";
        }


        //Appender den nye raden til tabellen

        tableEls.innerHTML += currentTabellSetning;

        //Henter alle knappene med class edit


        var buttonEl = document.getElementsByClassName("edit");

        //Sier at alle knappene som har edit classet skal også ha lytteren "fjernVarer()"

        for (var j = 0; j < buttonEl.length; j++) {
            buttonEl[j].addEventListener("click", fjernVarer);
        }

        //fjernVarer funksjonen bruker e.target for å vite hvilken knapp som trykkes


    }


    function fjernVarer(e) {

        var index = e.target.id;



        utvalgEl.splice(index, 1);
        console.log(utvalgEl);


        lagTabell();

    }
    
}















