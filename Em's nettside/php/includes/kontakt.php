<?php

define("TITLE", "Kontakt oss");

//linking to the different pages
define("HOME", "../../index.php");
define("KONTAKT", "");

//linking to the different css sheets
define("CSS", "/Css/headerCss.css");
define("CSSExtra", "/Css/kontakt.css");

//linking to the social media pictures
define("INSTA", "/media/instagram.png");
define("FACE", "/media/facebook.png");

//linking to the logo
define("LOGO", "/media/welcome.png");

include('header.php');

?>




<div id="contact_section">
    <form id="contact_form">

        <input class="input_reg"type="text" id="name" name="name">
        <label for="name">Your name</label> <br><br>

        <input class="input_reg" type="number" id="number" name="number">
        <label for="number"> Your number <br><br>

        <input class="input_reg" type="text" id="email" name="email">
        <label for="email">Your email</label><br><br>

        <label for="msg">Your message</label> <br>
        <textarea name="msg" id="msg" cols="65" rows="18"></textarea><br><br><br>

        <input id="button" type="submit" name="submit_mail" value="send message">
    </form>
</div>


