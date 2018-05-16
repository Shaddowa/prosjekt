//Legg til vare seksjon
var buttonEl = document.getElementById("leggTil");
buttonEl.addEventListener("click", startProgram);


//Varer blir lagt til med denne funskonen, bruker parametere i kjør program slik at funksjonen
//leggTilVarer() kan ta bruk av de gitte placeholderene og at ingenting er udefinert

function startProgram(navn, type, kategori, pris, id, beskrivelse) {

    leggTilVarer();

    function leggTilVarer() {

        //gir en unik id til alle varene
        Number(id++);


        //Henter inn elementer fra html dokumentet som legger til varene
        var leggTilVarerEls = document.getElementsByClassName("leggTilVarer");
        var typeEl = document.getElementById("variant");
        var kategoriEl = document.getElementById("kategori");
        var textareaEl = document.getElementById("textarea");

        //besrkivelse av varen
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

        //Loop for varetype
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


        //Lager et nytt objekt med info om varene i et array som heter Utvalg, dette er en global array og kan brukes av alle funksjoner
        var pushLinje = { vare: navn, pris: pris, beskrivelse: beskrivelse, type: type, kategori: kategori, id: Number(id) };
        utvalgEl.push(pushLinje);




        //Legge til en tabell som viser det som er lagt til på siden
        lagTabell();
    }



    //Tabellen

    function lagTabell() {

        //Lager tabellradene og gjør at tabellen blir ordentlig
        tableEls.innerHTML = "<tr><th>Vare</th><th>Pris</th><th>Beskrivelse</th><th>Type</th><th>Kategori</th>";
        var currentTabellSetning = "";

        for (var i = 0; i < utvalgEl.length; i++) {

            currentTabellSetning += "<tr><td>" + utvalgEl[i].vare + "</td><td>" + utvalgEl[i].pris + "</td><td>" + utvalgEl[i].beskrivelse + "</td><td>" + utvalgEl[i].type + "</td><td>" + utvalgEl[i].kategori + "</td><td><button class='editButtonVarer' id=" + i + "></button></td></tr>";
        }


        //Appender den nye raden til tabellen

        tableEls.innerHTML += currentTabellSetning;

        //Henter alle knappene med class edit


        var buttonEl = document.getElementsByClassName("editButtonVarer");

        //Sier at alle knappene som har edit classet skal også ha lytteren "fjernVarer()"

        for (var j = 0; j < buttonEl.length; j++) {
            buttonEl[j].addEventListener("click", fjernVarer);
        }

        //fjernVarer funksjonen bruker e.target for å vite hvilken knapp som trykkes

        visVarer();


    }

    //ved å bruke e kan vi fjerne varene vi ønsker ved å finne ut hvor i UtvalgEl de befinner seg
    function fjernVarer(e) {

        var index = e.target.id;

        utvalgEl.splice(index, 1);


        //Oppdaterer tabellen
        lagTabell();

    }

}















