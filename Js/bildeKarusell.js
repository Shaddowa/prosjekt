/*var bildeKarusellEl = document.getElementById("bildeKarusell");

var bilder = [
    { src: '../media/1.jpg', txt: "Dette er bilde 1 av bildeKarusellen!" },
    { src: '../media/2.jpg', txt: "Dette er bilde 2 av bildeKarusellen!" },
    { src: '../media/3.jpg', txt: "Dette er bilde 3 av bildeKarusellen!" },
    {src : '../media/4.jpg', txt : "Dette er bilde 4 av bildeKarusellen!"},
    { src: '../media/5.jpg', txt: "Dette er bilde 5 av bildeKarusellen!" },
    { src: '../media/6.jpg', txt: "Dette er bilde 6 av bildeKarusellen!" },
    { src: '../media/7.jpg', txt: "Dette er bilde 7 av bildeKarusellen!" },
    { src: '../media/8.jpg', txt: "Dette er bilde 8 av bildeKarusellen!" },
    { src: '../media/9.jpg', txt: "Dette er bilde 9 av bildeKarusellen!" },
    { src: '../media/10.jpg', txt: "Dette er bilde 10 av bildeKarusellen!" },
    { src: '../media/11.jpg', txt: "Dette er bilde 11 av bildeKarusellen!" }

]

var label = [];


//lager alle de forskjellige div elementene og gir dem spesifikkasjoner

for (var i = 0; i < bilder.length; i++) {
    var div = document.createElement("div");
    div.className = "bilde";
    bildeKarusellEl.appendChild(div);

    var text;
    text = bilder[i].txt;
    label.push(text);


}

var bildene = document.querySelectorAll(".bilde");

var pSeksjon = document.createElement("div");
pSeksjon.style.width = "50%";
pSeksjon.style.height = "10%";
pSeksjon.style.margin = "0 auto";
pSeksjon.style.position = "absolute";
pSeksjon.style.top = "90%";
pSeksjon.style.left = "25%";

var pText = document.createElement("p");
pText.className = "text";
pSeksjon.appendChild(pText);

displayPicture();


var synligBilde = 0;
var nesteBilde;
var tid = 4000;



bildeKarusellEl.appendChild(pSeksjon);

snurrKarusell = (div) => {



    if (synligBilde === bildene.length - 1) {
        nesteBilde = 0;
       displayPicture();
        
    } else {
        nesteBilde = synligBilde + 1;
    }

    pText.innerHTML = label[nesteBilde];
    bildene[nesteBilde].style.left = "-1200px";
    bildene[nesteBilde].style.display = "initial";
    bildene[nesteBilde].style.animation = "innMotHoyre 2s forwards";
    bildene[synligBilde].style.animation = "utTilVenstre 2s forwards";
    //bildene[synligBilde].addEventListener("animationend", displayPicture);


    synligBilde = nesteBilde;
    setTimeout(snurrKarusell, tid);
}




setTimeout(snurrKarusell, tid);


function displayPicture() {

    for (var i = 0; i < bildene.length; i++) {

        bildene[i].style.backgroundImage = "url(../media/" + bilder[i].src + ")";


        if (i != 0) {
            bildene[i].style.display = "none";
        } else {
            pText.innerHTML = label[i];
        }

    }
}

*/
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
displayIndex.style.transform = "rotate(2deg)";
displayIndex.style.width = "50%";
displayIndex.style.height = "25%";
displayIndex.style.margin = "0px auto";
displayIndex.style.marginTop = "2%";




vissibleEl.appendChild(displayIndex);

for (var i = 0; i < bilder.length; i++) {

    var nyttBilde = document.createElement("div");
    nyttBilde.style.backgroundImage = bilder[i].src;
    nyttBilde.style.backgroundRepeat = "no-repeat";
    nyttBilde.className = "bilde";
    nyttBilde.style.position = "absolute";
    nyttBilde.style.left = 0;
    nyttBilde.id = i;

    var text = document.createElement("p");
    text.innerHTML = bilder[i].txt;
    text.className = "text";
    text.id = i;
    nyttBilde.appendChild(text);

    var dot = document.createElement("div");
    dot.id = i;
    dot.className = "index-dot";
    dot.addEventListener("click", endreBilde);
    dot.style.backgroundColor = "white";
    dot.style.display = "inline-block";
    dot.style.width = "10px";
    dot.style.height = "10px";
    dot.style.borderRadius = "50%";
    dot.style.marginLeft = "40px";
    dot.style.border = "2px solid grey";

    dot.style.padding = "10px";

    bildeKarusellEl.appendChild(nyttBilde);
    dot.style.zIndex = "100";
    displayIndex.appendChild(dot);


}



var indexSynlig = 0;
var forrigeBilde;
var nesteBilde;


//bildene


var bildeKarusellBildene = document.querySelectorAll(".bilde");

for (var i = 0; i < bildeKarusellBildene.length; i++) {

    if (i != 0) {
        bildeKarusellBildene[i].style.display = "none";
    }
}



//dottene
var bildeKarusellDottene = document.querySelectorAll(".index-dot");


var tid = 5000;


//Her begynner funksjonen
function roterKarusell() {
    tid = 5000;

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



    bildeKarusellBildene[nesteBilde].style.display = "initial",
    bildeKarusellBildene[nesteBilde].style.animation = "3s innLeft forwards";
    bildeKarusellBildene[indexSynlig].style.animation = "3s utRight forwards";


    indexSynlig = nesteBilde;

    setTimeout(roterKarusell, tid);
}

setTimeout(roterKarusell, tid);




function endreBilde(e) {
    
    
}