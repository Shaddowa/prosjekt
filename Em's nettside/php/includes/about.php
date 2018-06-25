<?php

define("TITLE", "Om oss | Sweet Treats");

//linking to the different pages
define("HOME", "../../index.php");
define("KONTAKT", "kontakt.php");
define("RESTURANT", "resturanter.php");
define("ABOUT", "");
define("ONLINE", "online.php");

//linking to the different css sheets
define("CSS", "/Css/headerCss.css");
define("CSSExtra", "/Css/aboutCss.css");

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