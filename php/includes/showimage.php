<?php
    define("loginCss",  "../Css/admin_Css/login.css");


    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL | E_STRICT);
 
    $dbServername = "localhost";
    $dbUsername = "root";
    $dbPassword = "root";
    $dbName = "sweettreats";
 
    $connection = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);
    $connection -> set_charset("utf8");


    if(isset($_GET['id'])){
        $id = mysql_real_escape_string($_GET['id']);
        $query = msql_query("SELECT * FROM `selection_picture` WHERE `id` = '$id'");
    
        while($row = mysql_fecth_assoc($query)){
            $imageData = $row['selection_picture'];
        }

        header("content-type : image/jpeg");
        echo $imageData;
    }else {
        echo "error";
    }
 
?>