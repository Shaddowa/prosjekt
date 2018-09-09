<?php

define("TITLE", "Om oss | Sweet Treats");

//linking to the different pages
define("HOME", "../../index.php");
define("KONTAKT", "kontakt.php");
define("ABOUT", "");
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

<div id="om_oss">
  <video  id="video" width="360" height="640" loop autoplay>
    <source src="../../media/17.mp4" type="video/mp4">
  </video>

    <p>Vi tror på et bedre system av regler som du liker
      å kalle det. Jeg heter simpelt bare hei på deg men hva annet skal jeg heter?
      men hva skjer om
      jeg gjør sånn?
    </p>
</div>

<?php
    include("footer.php");

?>