

<div id="vissible">
    <div id="forward"></div>
    <div id="backwards"></div>
    <div id="merryGoAround">
    
    </div>       
</div>

<div id="welcome">
    <img src="../media/welcome.png">
    <h1 class="break">~</h1>
    <h1 class="break">Featured items</h1>
    
    
</div>

<div id="featureContent">
    
    <?php
    
        $sql = "SELECT * FROM selections WHERE selection_status ='1'";
        $result = $connection -> query($sql);
        $pic_float_right = true;
        
        while($rad = $result -> fetch_assoc()){
        
           $image = $rad['selection_picture'];
           $name = $rad['selection_name'];
           $selection_id = $rad['selection_id'];
           $selection_description = $rad['selection_description'];
          
            echo 
                
                "<div class='featured'>".
               
                    "<img class='featured_pic' src='/php/includes/image.php?id=".$selection_id."'>".
                    "<h2 class='featured_name'>$name</h2>".
                    "<p class='featured_description'>$selection_description</p>".
                    "<form method='POST' action=''>".
                    "<input class='featured_read_more' type='submit' name='$selection_id' value='Read More'>".
                    "</form>".
                "</div>";
               
        }
        
        echo "<div id='link'><a href='/php/includes/online.php'><h1 id ='menue'>See full menu</h1></a>".
        "<img id='knifeFork'src='../media/forkKnife.png'></div>";
    
        
    ?>
    
</div>

<div id= "info">
<img id="top_down" src="../media/asianfood.jpg">

<div id="info2">
    <div class="info_section">
        <img class="info_img" src="../media/hour.png">
        <h5 class="info_title first_title">Always on time</h5>
        <p class="info_p first_p">No matter what, we intend to deliver when you want it</p>
    </div>
    <div class="info_section">
        <img class="info_img" src="../media/bowl.png">
        <h5 class="info_title">Freshly prepaired food</h5>
        <p class="info_p">We can guarantie that our food will always show up hot</p>
    </div>
    <div class="info_section">
        <img class="info_img" src="../media/delivery-truck.png">
        <h5 class="info_title">Delivery available</h5>
        <p class="info_p">With busy days, delivery is a perfect choice, and we deliver</p>
    </div>
    <div class="info_section">
        <img class="info_img" src="../media/menu.png">
        <h5 class="info_title">Set a time</h5>
        <p class="info_p">Schedule a fitting time so that we can prepair the best food for you</p>
    </div>
    <div class="info_section">
        <img class="info_img" src="../media/email.png">
        <h5 class="info_title">We always answer</h5>
        <p class="info_p">Questions will always be answerd at least 24 h after you have sent them</p>
    </div>
    
</div>
<!--
<div id="sixth" class="fillers">
    <img id="secondImg" id="firstImg" src="../../media/placeholder.png"> : Årvollveien 34e <br>
    <img src="../../media/iphone.png"> : 41216256

    <h1> We do pickup here <span style="display: block; margin-top: 2%; text-align: center;">&#8595;</span></h1>
    <div id="map"></div>
    
</div>
-->




    





