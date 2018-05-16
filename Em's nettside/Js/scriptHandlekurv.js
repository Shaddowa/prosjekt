//Gir totalsummen til alle varene du har i handlekurven
var sumTotal = 0;



function leggTilHandlekurv(e) {

    var valgtVare = e.target;

    //gir en id for hver vare slik at det kan fjernes senere om ønsket
    idHK++;



    sumTotal += Number(valgtVare.value);


    vareHK = valgtVare.name;
    prisHK = Number(valgtVare.value);


    //Trenger ikke mer enn varenavn og pris 
    var pushLinje = { vare: vareHK, pris: prisHK, id: Number(idHK) };
    handlekurvEl.push(pushLinje);

    

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

    for (var i = 0; i < handlekurvEl.length; i++) {

        if (handlekurvEl.length === 0) {
            
        } else {
            
            var divEl = document.createElement("div");
            divEl.className = "handleKurvEl";
            divEl.innerHTML = "<hr>" +  handlekurvEl[i].vare + "<br>" + handlekurvEl[i].pris ;
            HK.appendChild(divEl);

        }
    }

};


//Fjerner "handlelisten" når musen forsvinner fra handlekurven. Informasjonen er fortsatt lagret og vil bli vist igjen når musen er over handlekurv div elementet
function skjulHandlekurv() {

    var HK = document.getElementById("HK");

    HK.parentNode.removeChild(HK);

}




