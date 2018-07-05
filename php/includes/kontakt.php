<?php

define('TITLE', 'Kontakt oss | Sweet Treets');

//linking to the different pages
define('HOME', '../../index.php');
define('KONTAKT', '');
define('RESTURANT', 'resturanter.php');
define('ABOUT', 'about.php');
define('ONLINE', 'online.php');

//linking to the different css sheets
define('CSSHeader', '/Css/headerCss.css');
define('CSSExtra', '/Css/kontaktCss.css');
define('CSSFooter', '/Css/footerCss.css');

//linking to the social media pictures
define('INSTA', '/media/instagram.png');
define('FACE', '/media/facebook.png');

//linking to the logo
define('LOGO', '/media/welcome.png');

include('header.php');

?>




<div id='contact_section'>

    <?php 
    
        function has_header_injections($str){
            return preg_match('/[\r\n]/', $str);
        }

        if(isset($_POST['submit_mail'])){
            $name = trim($_POST['name']);
            $number = $_POST['number'];
            $email = trim($_POST['email']);
            $msg = $_POST['msg'];
            

            if(has_header_injections($name) || has_header_injections($email)){
                echo "<h1>You have inserted wrong data and will now start self destruct sequence 101</h1>";
                exit;
            }

            if(!$name || !$number || !$email || !$msg){
                echo '<h1 class="error">You have to fill in all the information to proceed</h1>';
                echo '<h2 class="error_link"><a href="" >Return to contact page</a></h2>';
                die();

            }
           
            $to = 'hannatro@hotmail.com';
           
            $subject = 'A new mail from $name <$email> was sent via your contact form';
              
           
            $message = 'Name : $name \r\n';
            $message .= 'Email : $email \r\n';
            $message .= 'The message : \r\n $msg';
            $message .= 'Clients number: $number';
            $message .= wordwrap($message, 100);
           
       
            $header = 'MIME-Version: 1.0 \r\n';
            $header .= 'Content-type: text/plain; charset=iso-8859-1\r\n';     
            $header .=  'From: $name <$email>\r\n';
            $header .=  'X-Priority: 1\r\n';
            $header .=  'X-MSMail-Priority: High\r\n\r\n';

            mail($to, $subject, $message, $header);
         
     
   
    ?>  

    <h1 class="suceed">Thank you for sending u a message! </h5>
    <p class="suceed_p">Please allow 24 hours for a respone </p>
    <h4 class="suceed_link"><a href="<?php echo HOME ?>"> &laquo; Return to home page </a></h4>

        <?php } else { ?>    
   
    <form id="contact_form" method="POST" action ="">

        <input class="input_reg"type="text" id="name" name="name">
        <label for="name">Your name</label> <br><br>

        <input class="input_reg" type="number" id="number" name="number">
        <label for="number"> Your number <br><br>

        <input class="input_reg" type="text" id="email" name="email">
        <label for="email">Your email</label><br><br>

        <label for="msg">Your message</label> <br>
        <textarea name="msg" id="msg" cols="65" rows="18"></textarea><br><br><br>

        <input id="button" type="submit" name="submit_mail" value="send message">
    </form>
    <?php } ?>
</div>

       

<?php

include('footer.php');

?>