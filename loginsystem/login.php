<?php
    SESSION_START();
  

    if(!$_SESSION['login']){
        header("Location: ../adminPhp.php?login");
    } else {
       
       
       
    
    define("loginCss",  "../Css/admin_Css/login.css");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="Stylesheet" type="text/css" href="<?php echo loginCss; ?>">
</head>
<body>
  <?php 
    include("loginheader.php");

    
  ?>
   
    <div id="admin-window">
        

    </div>


    
    
</div>

<?php
        if(isset($_POST['logout'])){
            $_SESSION['login'] = false;
            SESSION_UNSET();
            SESSION_DESTROY();
            header("Location: ../adminPhp.php?login=logged out");
        }
       
    }
    
?>
<!--<script src="../Js/loginScript.js"></script>-->
<script src="../Js/SelectionScript.js"></script>
</body>
</html>