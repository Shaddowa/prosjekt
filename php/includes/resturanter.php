<?php

define("TITLE", "Resturanter | Sweet treats");

//linking to the different pages
define("HOME", "../../index.php");
define("KONTAKT", "kontakt.php");
define("RESTURANT", "");
define("ABOUT", "about.php");
define("ONLINE", "online.php");

//linking to the different css sheets
define("CSSHeader", "/Css/headerCss.css");
define("CSSExtra", "/Css/aboutCss.css");
define("CSSFooter", "/Css/footerCss.css");

//linking to the social media pictures
define("INSTA", "/media/instagram.png");
define("FACE", "/media/facebook.png");

//linking to the logo
define("LOGO", "/media/welcome.png");

include('header.php');

?>


<?php 
    include("footer.php");
?>