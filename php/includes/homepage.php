
<?php

   ini_set('display_errors', 1);
   ini_set('display_startup_errors', 1);
   error_reporting(E_ALL | E_STRICT);

   $dbServername = "localhost";
   $dbUsername = "root";
   $dbPassword = "root";
   $dbName = "sweettreats";

   $connection = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);


?>

<div id="vissible">
        
    <div id="merryGoAround">
    
    </div>
    <!--
    <div id="Welcome">
        <!--<img src="../media/welcome.png">
    </div>
    -->
            
</div>
<h1 id ="love">WE <span style="color:lightcoral">LOVE</span></h1>
<div id="featureSlide">
   
    <div id="featureContent">
    
    
    <?php
        
        $sql = "SELECT * FROM selections WHERE selection_status ='1'";
        $result = $connection -> query($sql);
        
        while($rad = $result -> fetch_assoc()){
           $image = $rad['selection_picture'];
           $name = $rad['selection_name'];
           
           
            echo 
                
                "<div class='featured'>
                    $image
                    <p>$name</p>
    
                </div>";
               
        }

        
        
        
        
        

    ?>
    
    <?php
       
        /*



        $sql = "SELECT * FROM selections";
        $result = $connection -> query($sql);
        
        while($rad = $result -> fetch_assoc()){
            
            $varenavn = $rad['selection_name']
            $vareid = $rad['selection_id']
            $vareprice = $rad['selection_price']
            $varedescription = $rad['selection_description']
            $varestatus = $rad['selection_status'];
            

            if($varestatus == 1){
                echo "<div class = 'gridColumns'>
                <h5>$varenavn</h5><br>
                <p>$varedescription</p>
                </div>";
                
            } 
           
        }
       } */
       
        ?>

    </div>
</div>

    





