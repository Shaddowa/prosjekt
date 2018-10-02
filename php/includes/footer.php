
    <div id="footer">
        <button id="to-top"></button>
        
        <div class="wrapper">
        
            
            <div id="logo-text-footer">
                    <a id="link_home" style="text-decoration:none; color:white" href="<?php echo HOME; ?>"><a id="link_home" style="text-decoration:none; color:black" href="<?php echo HOME; ?>"><img id="logo" class="header-items" style="width: 25%; height: 25%;" src="../../media/logo.png"><a>
            </div>

            <div id="linker">
                <a href="<?php echo ABOUT ?>"><h3 id="footer-item_first" class="footerElms">Om oss</h3></a>
                <a href="<?php echo ONLINE ?>"><h3  class="footerElms">Bestill online</h3></a>
                <a href="<?php echo KONTAKT ?>"><h3  class="footerElms">Kontakt oss</h3></a>

                <h3 id="footer-item_last"  class="footerElms">Last ned vår app &#10153 </h3>
            </div>

            <hr>

        </div>

        <div id="copyRight wrapper">
            <small><p id="copyRight-text">&copy; FuXiang Dumplings 2018. All rights reserved </p></small>
        </div>
    </div>
</div>
<?php 
    if(TITLE === "Home Page | Sweet Treats"){
        ?>
            <script src="../Js/bildeKarusell.js"></script>
            <script src="../Js/universal.js"></script> 
            <script src="../../Js/Map.js"></script>
            <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAJ12RTRedzzCW2FJMWQm2CyFrK_X34HEk&callback=initMap"></script>
        <?php

    } else if (TITLE ===  "Online | Sweet Treats"){
       
        ?>
         <script src="../../Js/online.js"></script>
       
        <?php
    

    }
    
    ?><script src="/../Js/universal.js"></script> 




</body>


</html>
