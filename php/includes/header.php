<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php echo TITLE; ?></title>
    <link rel="Stylesheet" type="text/css" href="<?php echo CSSHeader ?>">
    <link rel ="Stylesheet" type="text/css" href="<?php echo CSSExtra ?>">
    <link rel="Stylesheet" type="text/css" href= "<?php echo CSSFooter ?>">
</head>
<body>
    <div id="container">
        <div id="nav-bar">
            
            <div class="navItem wrapper">
                <h4 class="header-items"><a class="header-items" href="<?php echo RESTURANT; ?>">Resturanter</a></h4>
                <h4 id="omOss" class="header-items"><a class="header-items" href="<?php echo ABOUT; ?>">Om oss</a></h4></span>
                <h4 class="header-items"><a class="header-items" href="<?php echo KONTAKT ?>"> Kontakt</a></h4>
                <h4 class="header-items"><a class="header-items" href="<?php echo ONLINE; ?>">Online</a></h4>

                <div class="header-items header-items-language">
                    <h4>Språk</h4>
                    <div class="header-items-select">
                        <div class="header-item-option" value="norsk">Norsk </div>
                        <div class="header-item-option" value="engelsk">Engelsk </div>
                    </div>
                </div>

                <div class=" header-items header-items-social">
                    <a class="header-items" href="https://www.facebook.com"><img id="facebook" src="<?php echo FACE; ?>"></a>
                    <a class="header-items" href="https://www.instagram.com"><img id="instagram" src="<?php echo INSTA; ?>"></a>
                </div>

                <div id="logo-text">
                    <a id="link_home" style="text-decoration:none; color:white" href="<?php echo HOME; ?>"><h1>Sweet<span> Treats<span> </h1><a>
                </div>
            </div>

        </div><!-- navBar end--> 
    