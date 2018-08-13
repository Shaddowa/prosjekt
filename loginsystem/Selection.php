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

<div id="selection-area">

<?php 

    if(isset($_POST['legg_til'])){

        $vare = $_POST['vare'];
        $pris = $_POST['pris'];
        $beskrivelse = $_POST['beskrivelse'];
        $type = $_POST['type'];
        $picture = $_POST['picture'];

        if(!$vare || !$pris || !$beskrivelse || !$type){  //!bilde her){
            echo '<h1 style = "width: 100%; text-align: center"><a href =" ">Du manglet et felt</a></h1>';
            exit();

        } else{
            $sql = "INSERT INTO selections (selection_name, selection_price, selection_type, selection_description, selection_picture) VALUES ('$vare', '$pris', '$type', '$beskrivelse', '$picture')";
            $result = mysqli_query($connection, $sql);
        }


    }
?>

<!--Her starter formen -->
    <form method = "POST" action "">
        <input type="text" class = "leggTilVarer" placeholder= "Varenavn" name="vare">
        <input type="number" class = "leggTilVarer" placeholder= "pris" name="pris">
        <textarea class ="leggTilVarer" placeholder = "Beskrivelse" name="beskrivelse"></textarea>
        <select class="leggTilVarer" name="type">
            <option value = "mat">Mat </option>
            <option value = "drikke">Drikke </option>
            <option value = "snacks">Snacks </option>

        </select>
        
        <input type="file" class="leggTilVarer" accept="image/png, image/jpeg" name="picture">Upload Picture
        <input id ="button" type="submit" value ="Legg Til" name="legg_til">
    </form>

    <div id="tabellarea">
        <table id="tabellUtvalg">
            <tr>
                <th>
                    Varenavn
                </th>
                <th>
                    Pris
                </th>
                <th>
                    Beskrivelse
                </th>
                <th>
                    Type
                </th>
                <th>
                    ID
                </th>
                <th>
                    Picture
                </th>
                <th>
                    Featured
                </th> 
                <th>
                    Slett
                </th> 
           </tr>
        </table>
    </div>

</div>

<!--Her slutter formen -->


<?php



lagTabell($connection);

function lagTabell($connection){
 
    if(isset($_POST['delete'])){
        $value = $_POST['delete'];
        
        $sql = "DELETE FROM selections WHERE selection_id = '$value'";
        $result = $connection -> query($sql);
        

    }

    

    $sql = "SELECT * FROM selections";
    $result = $connection->query($sql);

    $currentSentence = "";
   
    while($rad = $result -> fetch_assoc()){
        $selection_id = $rad['selection_id'];
        $selection_name = $rad['selection_name'];
        $selection_type = $rad['selection_type'];
        $selection_price = $rad['selection_price'];
        $selection_description = $rad['selection_description'];
        $selection_picture = $rad['selection_picture'];

       $currentSentence .=  "<tr><td> $selection_name</td><td>  $selection_price</td><td>  $selection_description</td><td>  $selection_type</td><td>  $selection_id</td><td>$selection_picture</td><td><form method = 'POST' action = ' '><input type='submit' name='feature' class='featureButtonVarer' value = '$selection_id'></form></td><td><form method = 'POST' action = ' '><input type='submit' name='delete' class='deleteButtonVarer' value = '$selection_id'></form></td></tr>";
    
    }

    ?>
    <script>
        var tabell = document.getElementById("tabellUtvalg");
        tabell.innerHTML += "<?php echo $currentSentence ?> ";
    </script>

 <?php

    function Update($connection){

        if(isset($_POST['feature'])){
            
            $value = $_POST['feature'];
                    
            $checkSQL = "SELECT selection_status FROM selections WHERE selection_id = $value";
            $resultCheck = $connection -> query($checkSQL);
                    
                        
            while($rad = $resultCheck -> fetch_assoc()){
                        
                $currentSelectionStatus = $rad['selection_status'];
                            
                if($currentSelectionStatus == 1){
                    $sql = "UPDATE selections SET selection_status = 0 WHERE selection_id = $value";
                    

                } else if($currentSelectionStatus == 0){
                    $sql = "UPDATE selections SET selection_status = 1  WHERE selection_id = $value";
                    
                                
                }
                            
            }   
                
            $result = $connection -> query($sql);
            
        }
     
        checkStatus($connection);
        
    }

    Update($connection);

}

function checkStatus($connection){
    
  
    $sql = "SELECT * FROM selections";
    $result = $connection -> query($sql);
                    
    $ID = [];
    $statusB = [];

    while($rad = $result -> fetch_assoc()){
                        
        $currentSlectionId = $rad['selection_id'];
        $currentSelectionStatus = $rad['selection_status'];

                        

        array_push($ID, $currentSlectionId);
        array_push($statusB, $currentSelectionStatus);
                        
    }


            
    for($i = 0; $i < sizeof($ID); $i++){
        echo "<script>
                
        var button = document.getElementsByClassName('featureButtonVarer');
                
        if($ID[$i] != button[$i].value){
                
            console.log('ingen match')
                
        } else {
            if($statusB[$i] == 1){
                button[$i].style.backgroundColor = 'green';
            } else if($statusB[$i] == 0){
                button[$i].style.backgroundColor = 'yellow';
            }
        }

        </script>";
    }
} 

    
?> 


<script src="../Js/loginScript.js"></script>
</body>
</html>