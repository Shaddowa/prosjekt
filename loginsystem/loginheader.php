<?php 
   
    echo " 

    <div id='container'>
        <div id='nav-bar'>
        <a href='login.php'><h2 class='nav-bar-item'>Admin</h2><a/>
        <a href='Selection.php'><h2 class='nav-bar-item'>Rediger utvalg</h2><a/>
        <a href=''><h2 class='nav-bar-item'>Kunde ordre </h2></a>
        <form method='POST' action=''>
        <input type='submit' name='logout' id='Logout' value='logut'>
        </form>
        </div> 
        ";

        if(isset($_POST['logout'])){
            $_SESSION['login'] = false;
            SESSION_UNSET();
            SESSION_DESTROY();
            header("Location: ../adminPhp.php?login=logged out");
        }

        
    
   
    

?>


