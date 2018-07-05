<?php

   ini_set('display_errors', 1);
   ini_set('display_startup_errors', 1);
   error_reporting(E_ALL | E_STRICT);

   $dbServername = "localhost";
   $dbUsername = "root";
   $dbPassword = "root";
   $dbName = "loginsystem";

   $connection = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);



    //LOGIN
    if(isset($_POST['submit'])){
        //$uid = mysqli_real_escape_string($connection, $_POST['username']);
        //$pwd = mysqli_real_escape_string($connection ,$_POST['password']);

        $uid = $_POST['username'];
        $pwd = $_POST['password'];
        
        //Error handlers
        //Check if inputs are empty
        
        if(empty($uid) || empty($pwd)){
            header("Location: ../admin.php?login=empty");
            exit();
           
        } else {
            
            $sql = "SELECT * FROM users WHERE user_uid = '$uid'";
            $result = mysqli_query($connection, $sql);
            $resultCheck = mysqli_num_rows($result);
    
            if($resultCheck < 1){
                header("Location: ../admin.php?login=error");
                exit();
    
            } else {
                $sql = "SELECT * FROM users WHERE user_pwd = '$pwd'";
                $result = mysqli_query($connection, $sql);
                $resultCheck = mysqli_num_rows($result);


                
                if($resultCheck == false){
                    header("Location: ../admin.php?login=error");
                    exit();
    
                } else if( $resultCheck == true){
                    header("Location: ../loginsystem/login.php?login=success");
                    exit();
                }

            }
            
           
        }
    
} else {
    header("Location: ../admin.php?login=error");
    exit();
} 

?>









<!-- How to insert into table given that we have a signup page


//Checking if people actually pressed the login/sign up button or
//if they tried to get access to restricted code;


if(isset($_POST['submit])){

    //then the php page can load
    include_once 'dbh.inc.php';

    //Avoid that people can write code in your input fields, by converting
    //the value to text wich cannnot act as code (mysqli_real_escape_string();)
    $first = mysqli_real_escape_string($connection, $_POST['first]);
    $last = mysqli_real_escape_string($connection, $_POST['last]);
    $email = mysqli_real_escape_string($connection, $_POST['email]);
    $uid = mysqli_real_escape_string($connection, $_POST['uid]);
    $pwd = mysqli_real_escape_string($connection, $_POST['pwd]);

    //Error handlers (should always be checking for first)
    //Check for empty fields

    if(empty($first) || empty($last) || empty($email) || empty($uid) || empty($pwd)){
        header("Location: admin.php?signup=empty");
        exit();
    }else {
        //Check if input characters are valid

        if(!preg_match("/^[a-zA-Z]*$/", $first) || !preg_match("/^[a-zA-Z]*$/", $last)){
            header("Location: admin.php?signup=invalid");
            exit();
        } else {
            //check if email is valid
            if(!filter_var($email, FILTER_VALIDATE_EMIAL)){
                header("Location: admin.php?signup=email");
                exit();
            } else {
                $sql = "SELECT * FROM users WHERE user_uid = '$uid'";
                $result = mysqli_query($connection, $sql);
                $resultCheck = mysqli_num_rows($result);

                if($resultCheck > 0){
                    header("Location: admin.php?signup=user_taken");
                exit();
                } else {
                    // Hashing the password 
                    $hasedPwd = password_hash($pwd, PASSWORD_DEFAULT);
                    //Insert the user into the database
                    $sql = "INSERT INTO users(user_first, user_last, user_email, user_uid, user_pwd) VALUES ('$first'. '$last', '$email', '$uid', '$hashedPwd');";
                    mysqli_query($connection, $sql);

                   header("Location: admin.php?signup=success");
                   exit();
                }
            }

        }
    }
} else {
    //Then the location will shift to the login page and the script will stop
    header("Location: ../admin.php");
    exit();
}
-->
