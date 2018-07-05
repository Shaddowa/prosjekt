    <div id="footer">
        <div class="wrapper">
        
            
            <div id="logo-text-footer">
                    <a id="link_home" style="text-decoration:none; color:white" href="<?php echo HOME; ?>"><h1>Sweet<span> Treats<span> </h1><a>
            </div>

            <div id="linker">
                <a href="<?php echo ABOUT ?>"><h3 id="footer-item_first" class="footerElms">Om Sweet Treats</h3></a>
                <a href="<?php echo RESTURANT ?>"><h3  class="footerElms">Våre resturanter</h3></a>
                <a href="<?php echo ONLINE ?>"><h3  class="footerElms">Bestill online</h3></a>
                <a href="<?php echo KONTAKT ?>"><h3  class="footerElms">Kontakt oss</h3></a>

                <h3 id="footer-item_last"  class="footerElms">Last ned vår app &#10153 </h3>
            </div>

            <hr>

        </div>

        <div id="copyRight wrapper">
            <small><p id="copyRight-text">&copy; Sweet Treats 2018. All rights reserved </p></small>
        </div>
    </div>
</div>
<?php 
    if(TITLE === "Home Page | Sweet Treats"){
    
        ?>
            <script src="../Js/bildeKarusell.js"></script>
        <?php

    } else if (TITLE ===  "Resturanter | Sweet treats"){
        
        ?>
        <script src="../../Js/Map.js"></script>
        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAJ12RTRedzzCW2FJMWQm2CyFrK_X34HEk&callback=initMap"></script>
        <?php
    
    
    } else {

    }

?>

</body>


</html>
