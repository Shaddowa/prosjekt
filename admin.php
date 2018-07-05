<?php
   
 

    define("TITLE", "Admin Page");
    define("AdminCss", "/Css/admin_css/adminCss.css");


   

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php echo TITLE; ?></title>
    <link rel="Stylesheet" type="text/css" href="<?php echo AdminCss; ?>">
</head>
<body>

<div id="login">

    <form id="login-form" method="POST" action="../loginsystem/dbh.php">

        
        <input type="text" name = "username" class="input">
        <label for="usename">Username</label><br><br>

        
        <input type="password" name="password"  class="input">
        <label for="password">Password</label><br><br><br>

        <input type="submit" id="button" name="submit" value = "Login">


    </form>


</div>


    
</body>
</html>