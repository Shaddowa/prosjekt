<?php

define("TITLE", "Online | Sweet Treats");

//linking to the different pages
define("HOME", "../../index.php");
define("KONTAKT", "kontakt.php");
define("ABOUT", "about.php");
define("ONLINE", "");


//linking to the different css sheets
define("CSSHeader", "/Css/headerCss.css");
define("CSSExtra", "/Css/onlineCss.css");
define("CSSFooter", "/Css/footerCss.css");

//linking to the social media pictures
define("INSTA", "/media/instagram.png");
define("FACE", "/media/facebook.png");

//linking to the logo
define("LOGO", "/media/welcome.png");



include('header.php');

?>

<div id="ContentFrame">
    <div id="content">
        <?php 

         $sql = "SELECT * FROM selections";
         $result = $connection -> query($sql);

         while($rad = $result -> fetch_assoc()){

           $image = $rad['selection_picture'];
           $name = $rad['selection_name'];
           $selection_id = $rad['selection_id'];
           $selection_description = $rad['selection_description'];
           $selection_price = $rad['selection_price'];
           
          
            echo 
            "<div  id='$selection_id' class='item-container' style = 'background-image:url(/php/includes/image.php?id=$selection_id)';>".     
                "<h2  id='$selection_id' class='itemText'>$name</h2>".
                "<div id='$selection_id' class='info'></div>".
                "<h4  id='$selection_id'class='itemPrice'>$selection_price</h4>".

                "<div id='$selection_id' class='item-container-box'></div>".
                "<p class ='itemDescription'>$selection_description</p>".
            "</div>";
         }

        
        


        
        
        ?>

       
    </div>
    
    <div id="shoppingCart">
        <img src="/../media/shopping-cart.png">

        <div id="itemsCart">
            <h4 id = "sum" >SUM : 0 </h4>
            <h5 id="item">Items :0</h4>

            <div id="itemsInCart"></div>

            <button id="order">Buy Items</button>
        </div>
        
        
    </div>
    <div id="modalModal">
        <div id="myModal" class="modal">
            <div class="modal-content">            
                <span class="close">&times;</span>
                <form method="POST" action="" name="form">
                    <input class="form-el" type="text" name="name" placeholder="Enter your name"><br><br>
                    <label for="delivery">Choose between the following options</label><br><br>
                    <input id="pick-up" type="radio" name="delivery" checked="checked">Pick up
                    <input id="delivery" type="radio" name="delivery">delivery<br><br>
                    <input class="form-el" type="text" name="email" placeholder="Your E-mail"><br><br>
                    <input class="form-el" type="number" name="phone" placeholder="Your number"><br><br>
                    <label for="arrangment">Choose a date & time</label><br><br>
                    <input class="form-el" type="datetime-local" name="arrangement"><br><br>
                    <input id="proceed" type="submit" name="proceed" value="Finnish">
                    <input id="orderBag" type="hidden" name="order">
                    <input id="orderSum" type="hidden" name="sum">
                </form>
            </div>
        </div>
    </div>
</div>
<!-- SEND BEKREFTELSES MELDING -->
<?php
    if(isset($_POST['proceed'])){

        $name = $_POST['name'];
        if(isset($_POST['delivery'])){
            $chosen = $_POST['delivery'];
        };

        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $time = $_POST['arrangement'];
        $order = $_POST['order'];
        $sum = $_POST['sum'];

        echo "Navn :".$name."email:".$email."tlf:".$phone."tid:".$time."order:".$order."sum".$sum;

       
        
    };

?>


<?php
    include("footer.php");

?>