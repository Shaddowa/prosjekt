window.onload = function () {
    //henter inn biledkarusell seksjonen
    var bildeKarusellEl = document.getElementById("merryGoAround");

    //vissible er kontaineren til bilekarusellen
    var vissibleEl = document.getElementById("vissible");

    //en liste me alle bilded objektene som skal være i karusellen

    var bilder = [
        { src: 'url(../media/1.jpg)', txt: "Dette er bilde 1 av bildeKarusellen!" },
        { src: 'url(../media/2.jpg)', txt: "Dette er bilde 2 av bildeKarusellen!" },
        { src: 'url(../media/3.jpg)', txt: "Dette er bilde 3 av bildeKarusellen!" },
        { src: 'url(../media/5.jpg)', txt: "Dette er bilde 5 av bildeKarusellen!" },
        { src: 'url(../media/6.jpg)', txt: "Dette er bilde 6 av bildeKarusellen!" },
        { src: 'url(../media/7.jpg)', txt: "Dette er bilde 7 av bildeKarusellen!" },
        { src: 'url(../media/8.jpg)', txt: "Dette er bilde 8 av bildeKarusellen!" },
        { src: 'url(../media/9.jpg)', txt: "Dette er bilde 9 av bildeKarusellen!" },
        { src: 'url(./media/10.jpg)', txt: "Dette er bilde 10 av bildeKarusellen!" },
        { src: 'url(../media/11.jpg)', txt: "Dette er bilde 11 av bildeKarusellen!" }
    ]

    var displayIndex = document.createElement("div");
    displayIndex.id = "displayIndex";
    
    vissibleEl.appendChild(displayIndex);

    for (var i = 0; i < bilder.length; i++) {

        var nyttBilde = document.createElement("div");
        nyttBilde.style.backgroundImage = bilder[i].src;
        nyttBilde.id = i;
        nyttBilde.className = "bilde";
        
    
        var text = document.createElement("p");
        text.innerHTML = bilder[i].txt;
        text.className = "text";
        text.id = i;
        nyttBilde.appendChild(text);

        var dot = document.createElement("div");
        dot.id = i;
        dot.className = "dot";
        bildeKarusellEl.appendChild(nyttBilde);
        displayIndex.appendChild(dot);
    }


    var tid = 10000;
    var indexSynlig = 0;
    var forrigeBilde;
    var nesteBilde;


    //bildene
    var bildeKarusellBildene = document.querySelectorAll(".bilde");
    var bildeKarusellDottene = document.querySelectorAll(".dot");

    for (var i = 0; i < bildeKarusellBildene.length; i++) {

        if (i != 0) {
            bildeKarusellBildene[i].style.display = "none";
            bildeKarusellDottene[i].style.backgroundColor = "black";

        }
    }

    //Her begynner funksjonen
    function roterKarusell() {
        tid = 10000;

        if (indexSynlig === bilder.length - 1) {
            nesteBilde = 0;
        } else {
            nesteBilde = indexSynlig + 1;
        }

        if (indexSynlig === 0) {
            forrigeBilde = bilder.length - 1;
        } else {
            forrigeBilde = indexSynlig - 1;
        }

        bildeKarusellDottene[nesteBilde].style.backgroundColor = "white";
        bildeKarusellDottene[forrigeBilde].style.backgroundColor = "black";
        bildeKarusellDottene[indexSynlig].style.backgroundColor = "black";


        bildeKarusellBildene[nesteBilde].style.display = "initial",
        bildeKarusellBildene[nesteBilde].style.animation = "3s innLeft forwards";
        bildeKarusellBildene[indexSynlig].style.animation = "3s utRight forwards";


        indexSynlig = nesteBilde;

        setTimeout(roterKarusell, tid);
    }

    setTimeout(roterKarusell, tid);




    
}