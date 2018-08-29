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
<h1 id="om_oss_h1"> Hvem er vi? </h1>
<p id="om_oss_p">Here at Pink Fish treating the planet with love & respect underpins everything we do. We strive to minimize our footprint, and have made choices to ensure we operate as sustainably as possible. We only use biodegradable packaging, we work hard to reduce waste – and not least; we chose salmon! <br><br>

<strong>The Salmon</strong><br><br>
The choice of salmon as the star of our menu is our most important sustainability decision. Of all the proteins we could have chosen, salmon is the most sustainable. The carbon footprint per kilo farmed salmon consumed is considerably lower than all comparable meats.
We take our pride in only using suppliers who take their environmental responsibility seriously, and all our salmon is ASC-certified. That means it is produced in accordance with strict sustainability standards set by WWF and the farming industry. Our salmon is only
fed with feed free from antibiotics, GMO and palm oil. Our supplier works towards avoiding all use of chemicals to fight lice, and has had great success using natural methods. <br><br>

<strong>Food Waste</strong <br><br>
We hate seeing food go to waste! So we have streamlined all our routines to avoid just that. Our ordering and delivery routines are tailor made to avoid our produce expiring, and we’ve maximized the use of each ingredient. And not least: all our food is made to order.
That means we don’t have prepared food in our restaurants that would have to be wasted after an hour or two to comply with our strict quality routines. <br><br>

 

<strong>Packaging</strong <br><br>
We love our oceans. Without clean, fresh water there’d be no Pink Fish salmon! Plastic is one of the most serious threats to the world’s oceans, which is why we’ve chosen to avoid it.
All our packaging is biodegradable and compostable, and treated as biological waste. Fun fact: You can actually eat it! We also make sure we always have fresh, cold water easily available for all our guests. To keep you from having to buy a plastic bottle. </p>
</div>


<?php
    include("footer.php");

?>