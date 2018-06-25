<?php 
    
    define("TITLE", "Home Page");
    //linking to the different pages
    define("HOME", "");
    define("KONTAKT", "/php/includes/kontakt.php");

    //linking to the different css sheets
    define("CSS", "Css/headerCss.css");
    define("CSSExtra", "/Css/indexCss.css");

    //linking to the socail media pictures
    define("INSTA", "/media/instagram.png");
    define("FACE", "/media/facebook.png");
    
    //linking to the welcome logo
    define("LOGO", "/media/welcome.png");

    include "php/includes/header.php";

?>


    <div id="vizualitation">
        
        <div id="bildeKarusell">

        </div>
        
    </div>
    <div id="welcome">
            <img src="../media/welcome.png">
        </div>

    <div id="content">



<?php 

include("php/includes/footer.php");


?>