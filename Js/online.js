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
var orderEl = document.getElementById("order");


var descriptionText = false;


orderEl.addEventListener("click", proceed);

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
   
    if (handlekurvEl.length == 0) {

        var pushLinje = { vare: navn, pris: pris, id: id, antall: 1 };
        handlekurvEl.push(pushLinje);

        orderEl.style.visibility = "visible";


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
    sumEl.innerHTML = "SUM : " + sumTotal;
    var currentSentence = "";
    var totalitems = 0;

    for (var i = 0; i < handlekurvEl.length; i++) {

        if (handlekurvEl[i].antall == 0) {
            var index = i;
            handlekurvEl.splice(i, 1);
        } else {
            currentSentence += "<div class='handleKurvEl'><p> X" + handlekurvEl[i].antall + "   " + handlekurvEl[i].vare + "   " + handlekurvEl[i].pris + "<button class='button' id=" + handlekurvEl[i].id + ">-</button><button class='button'id=" + handlekurvEl[i].id + ">+</button></div>"
            totalitems += handlekurvEl[i].antall;
        }

    }

    itemsInCartEl.innerHTML = currentSentence;
    itemEl.innerHTML = "Items :" + totalitems;

    addEvent();


}

function addEvent() {
    var buttonEls = document.getElementsByClassName("button");
    
    for (var i = 0; i < buttonEls.length; i++) {
        buttonEls[i].addEventListener("click", editBasket);
        
    }

    function editBasket(e) {
        var target = e.target.id;
        for (var i = 0; i < handlekurvEl.length; i++) {
            if (e.target.innerHTML == "+") {
                if (handlekurvEl[i].id == target) {
                    handlekurvEl[i].antall++;
                    sumTotal += Number(handlekurvEl[i].pris);
                    visHandlekurv();
                }
            } else {
                if (handlekurvEl[i].id == target) {
                    handlekurvEl[i].antall--;
                    sumTotal -= Number(handlekurvEl[i].pris);
                    visHandlekurv();

                }

            }
        }

    }
}


function proceed() {
    var modal = document.getElementById('modalModal');
    var modalItems = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    var span = document.getElementsByClassName("close")[0];



    if (handlekurvEl.length != 0) {
        modal.style.display = "block";
        modalItems.style.display = "block";
        var modalEl = document.getElementsByClassName("form-el")
        for (var i = 0; i < modalEl.length; i++) {
            modalEl[i].addEventListener("change", checkForm);
        }

        function checkForm() {
            if(document.forms['form'].name.value == "" || +
             document.forms['form'].email.value == "" || +
             document.forms['form'].phone.value == "" || +
             document.forms['form'].arrangement.value == ""){
               
            } else {
                var proceed = document.getElementById("proceed");
                proceed.style.display = "block";
            }

        }
        var orderBagEl = document.getElementById("orderBag");
        var orderSum = document.getElementById("orderSum");
        console.log(handlekurvEl);
        for (var i = 0; i < handlekurvEl.length; i++){
            orderBagEl.value += "vare :"+ handlekurvEl[i].vare +  " antall :" + handlekurvEl[i].antall;
        }

        orderSum.value = sumTotal;
        span.onclick = function () {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    } else {
        alert("Your cart is empty");
    }


}

