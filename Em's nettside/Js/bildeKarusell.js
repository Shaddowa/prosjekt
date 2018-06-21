var bildeKarusellEl = document.getElementById("bildeKarusell");

var bilder = [
    { src: '../media/1.jpg', txt: "Dette er bilde 1 av bildeKarusellen!" },
    { src: '../media/2.jpg', txt: "Dette er bilde 2 av bildeKarusellen!" },
    { src: '../media/3.jpg', txt: "Dette er bilde 3 av bildeKarusellen!" },
    //{src : '../media/4.jpg', txt : "Dette er bilde 4 av bildeKarusellen!"},
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