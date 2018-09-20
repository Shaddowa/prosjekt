var sumTotal = 0;


var handlekurvEl = [];


var infoEl = document.querySelectorAll(".info");
var containerEl = document.querySelectorAll(".item-container");
var textel = document.querySelectorAll(".itemText");
var priceEl = document.querySelectorAll(".itemPrice");
var itemDescriptionEl = document.querySelectorAll(".itemDescription");
var addEl = document.querySelectorAll(".item-container-box");
var sumEl = document.getElementById("sum");
var itemEl = document.getElementById("item");
var itemsInCartEl = document.getElementById("itemsInCart");

var descriptionText = false;



for (var i = 0; i < infoEl.length; i++) {
    infoEl[i].addEventListener("click", description);
    addEl[i].addEventListener("click", finnVarer);
}

function description(e) {



    if (descriptionText != true) {
        var target = e.target;

        for (var i = 0; i < containerEl.length; i++) {
            if (target.id == containerEl[i].id) {
                containerEl[i].style.backgroundImage = "none";
                priceEl[i].style.visibility = "hidden";
                target.style.backgroundImage = "url('/../media/x.png')";
                target.style.backgroundSize = "cover";
                itemDescriptionEl[i].style.visibility = "visible";
                addEl[i].style.visibility = "hidden";
                addEl[i].style.cursor = "default";
            }
        }


    }

    if (descriptionText != false) {
        var target = e.target;
        descriptionText = false;
        for (var i = 0; i < containerEl.length; i++) {
            if (target.id == containerEl[i].id) {
                containerEl[i].style.backgroundImage = "url(/php/includes/image.php?id=" + target.id + ")";
                priceEl[i].style.visibility = "initial";
                target.style.backgroundImage = "url('/../media/info.png')";
                target.style.backgroundSize = "cover";
                itemDescriptionEl[i].style.visibility = "hidden";
                addEl[i].style.visibility = "initial";
                addEl[i].style.cursor = "pointer";
            }
        }


    } else {
        descriptionText = true;
    }



    target.addEventListener("click", description);
}

function finnVarer(e) {

    var target = e.target;
    var currentVarer = false;
    var count = 0;
    while (!currentVarer) {
        if (target.id == textel[count].id) {
            sumTotal += Number(priceEl[count].innerHTML);
            currentVarer = true;
            leggTilHandlekurv(textel[count].innerHTML, Number(priceEl[count].innerHTML), Number(target.id));
            break;
        }

        count++;
    }



}

function leggTilHandlekurv(navn, pris, id) {
    sumEl.innerHTML = "SUM : " + sumTotal;
    if (handlekurvEl.length == 0) {

        var pushLinje = { vare: navn, pris: pris, id: id, antall: 1 };
        handlekurvEl.push(pushLinje);




    } else {
        var lagttil = false;

        for (var i = 0; i < handlekurvEl.length; i++) {

            if (id == Number(handlekurvEl[i].id)) {
                lagttil = true;
                handlekurvEl[i].antall += 1;

                break;

            }
        }


        if (!lagttil) {

            var pushLinje = { vare: navn, pris: pris, id: id, antall: 1 };
            handlekurvEl.push(pushLinje);

        }

    }

    visHandlekurv();

};

function visHandlekurv() {

    var currentSentence = "";
    var totalitems = 0;
    for (var i = 0; i < handlekurvEl.length; i++) {
        currentSentence += "<div class='handleKurvEl'><p> X" + handlekurvEl[i].antall + "   " + handlekurvEl[i].vare + "   " + handlekurvEl[i].pris + "</div>"
        totalitems += handlekurvEl[i].antall;
    }

    itemsInCartEl.innerHTML = currentSentence;
    itemEl.innerHTML = "Items :" + totalitems;


}

