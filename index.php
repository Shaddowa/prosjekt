<?php 
    
    define("TITLE", "Home Page | Sweet Treats");
    //linking to the different pages

    define("HOME", "");
    define("KONTAKT", "/php/includes/kontakt.php");
    define("RESTURANT", "/php/includes/resturanter.php");
    define("ABOUT", "/php/includes/about.php");
    define("ONLINE", "/php/includes/online.php");

    //linking to the different css sheets
    define("CSSHeader", "/Css/headerCss.css");
    define("CSSExtra", "/Css/indexCss.css");
    define("CSSFooter", "/Css/footerCss.css");

    //linking to the socail media pictures
    define("INSTA", "/media/instagram.png");
    define("FACE", "/media/facebook.png");
    
    //linking to the welcome logo
    define("LOGO", "/media/welcome.png");

    include "php/includes/header.php";

?>

<?php 

    include("php/includes/homepage.php");

?>
  
<?php 

include("php/includes/footer.php");


?>