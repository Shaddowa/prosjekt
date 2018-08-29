window.onload = function () {
    //henter inn biledkarusell seksjonen
    var bildeKarusellEl = document.getElementById("merryGoAround");

    //vissible er kontaineren til bilekarusellen
    var vissibleEl = document.getElementById("vissible");

    //en liste me alle bilded objektene som skal være i karusellen

    var bilder = [
        { src: 'url(../media/ny.jpg)', txt: "Dette er bilde 1 av bildeKarusellen!" },
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
        /*
         var dot = document.createElement("div");
         dot.id = i;
         dot.className = "dot";
         displayIndex.appendChild(dot);
         */
        bildeKarusellEl.appendChild(nyttBilde);


    }


    var tid = 15000;
    var indexSynlig = 0;
    var forrigeBilde;
    var nesteBilde;


    //bildene
    var bildeKarusellBildene = document.querySelectorAll(".bilde");
    //var bildeKarusellDottene = document.querySelectorAll(".dot");

    for (var i = 0; i < bildeKarusellBildene.length; i++) {

        if (i != 0) {
            bildeKarusellBildene[i].style.display = "none";
            //bildeKarusellDottene[i].style.backgroundColor = "black";

        }
    }
    var pause = false;
    
    var left = document.getElementById("backwards");
    left.addEventListener("click", changePicture);
    var right = document.getElementById("forward");
    right.addEventListener("click", changePicture);

    //Her begynner funksjonen
    function roterKarusell(changedPicture) {
        if(pause == false) {

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
            /*
            bildeKarusellDottene[nesteBilde].style.backgroundColor = "white";
            bildeKarusellDottene[forrigeBilde].style.backgroundColor = "black";
            bildeKarusellDottene[indexSynlig].style.backgroundColor = "black";
            */

            bildeKarusellBildene[nesteBilde].style.display = "initial",
                bildeKarusellBildene[nesteBilde].style.animation = "3s innLeft forwards";
            bildeKarusellBildene[indexSynlig].style.animation = "3s utRight forwards";


            indexSynlig = nesteBilde;

            setTimeout(roterKarusell, tid);

        }

        
    }

    function changePicture(e) {

        if(pause == false){
            pause = true;
            console.log("du har ikke hatt pause")
            if (e.target.id == "forward") {
                
                if (indexSynlig === 0) {
                    forrigeBilde = bilder.length - 1;
                } else {
                    forrigeBilde = indexSynlig - 1;
                }

                bildeKarusellBildene[forrigeBilde].style.display = "initial",
                    bildeKarusellBildene[forrigeBilde].style.animation = "3s innLeft forwards";
                bildeKarusellBildene[indexSynlig].style.animation = "3s utRight forwards";

                indexSynlig = forrigeBilde;

            } else if (e.target.id == "backwards") {

                if (indexSynlig === bilder.length - 1) {
                    nesteBilde = 0;
                } else {
                    nesteBilde = indexSynlig + 1;
                }

                bildeKarusellBildene[nesteBilde].style.display = "initial",
                bildeKarusellBildene[nesteBilde].style.animation = "3s innRight forwards";
                bildeKarusellBildene[indexSynlig].style.animation = "3s utLeft forwards";

                indexSynlig = nesteBilde;

            }

            

        } else if (pause == true) {
            setTimeout(changePause, 3200);
            console.log("nå må du ha pause");
        }
        
        function changePause() {
            pause = false;
            console.log("pausen er over");
        }

    }
    



    setTimeout(roterKarusell, tid);







}