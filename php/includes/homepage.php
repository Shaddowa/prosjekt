
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
    <div id="forward"></div>
    <div id="backwards"></div>
    <div id="merryGoAround">
    
    </div>       
</div>

<div id="Welcome">
    
</div>
<img id="welcomeImg" src="../media/welcome.png">
<div id="first" class="fillers"></div>
<h1 id ="love">WE <span style="color:lightcoral">LOVE</span></h1>
<div id="featureSlide">
   
    <div id="featureContent">
    
    
    <?php
        
        $sql = "SELECT * FROM selections WHERE selection_status ='1'";
        $result = $connection -> query($sql);
        
        while($rad = $result -> fetch_assoc()){
        
           $image = $rad['selection_picture'];
           $name = $rad['selection_name'];
           $selection_id = $rad['selection_id'];
          
            echo 
                
                "<div class='featured'>".
                    "<img src='/php/includes/image.php?id=".$selection_id."'>".
                    "<p>$name</p>".
    
                "</div>";
               
        }  

    ?>
    
    </div>
</div>
<div id="second" class="fillers">
    <img src="../../media/noodles.png">
    <p>FuXiang Dumplings er den eneste resturanten i Oslo som er drevet
        av unge studenter og som leverer ekte asiatiske retter hjem til deg
    </p>
</div>
<div id="third" class="fillers">
    <img src="../../media/bowl.png">
    <p>Bestiller du fra oss garanterer vi at du aldri får kalde retter.
        Det er viktig for oss at maten skal være så fersk som mulig
    </p>
</div>
<div id="fourth" class="fillers">
    <img id="firstImg" src="../../media/delivery-truck.png">
    <img src="../../media/shop.png">
    <p>Vi har både leverings tjenester og pick up alternativer
    </p>
</div>
<div id="fifth" class="fillers">
    <img id="firstImg" src="../../media/hour.png">
    <p>Avtal en tid og metod, mens vi gjør resten
    </p>
</div>
<div id="sixth" class="fillers">
    <img id="secondImg" id="firstImg" src="../../media/placeholder.png"> : Årvollveien 34e <br>
    <img src="../../media/iphone.png"> : 41216256

    <h1> We do pickup here <span style="display: block; margin-top: 2%; text-align: center;">&#8595;</span></h1>
    <div id="map"></div>
    
</div>




    





