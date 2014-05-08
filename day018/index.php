 <html class="no-js" lang="en"> 
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <title></title>
        <link rel="stylesheet" href="../css/reset.css">
        <link rel="stylesheet" href="../css/build/global.css">
        <link rel="stylesheet" href="css/floatinglabels.css">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">


        <!-- Google Analytics -->
        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-49936363-1', 'chrisvincentcodes.com');
          ga('send', 'pageview');

        </script>
        <!-- End Google Analytics -->

    </head>
    <body>
      <div id="greeting">
        <div>&nbsp;</div>
        <ul id="navbar">
            <li class="navButton"><a href="../" class="inactiveMenu">Home</a><span></span></li>
            <li class="navButton"><a href="http://blog.chrisvincentcodes.com" class="inactiveMenu">Blog</a><span></span></li>
            <li class="navButton"><a href="https://github.com/ChrisVincentCodes/DailyDeliverables" class="inactiveMenu">GitHub</a><span></span></li>
        </ul>
      </div>
      <div id="sidebar" class="sBStyle">
        <h1 class="title">Shout at me!</h1>
        <form id="form" class="form" action="<?php $self ?>" method="post">
          <ul>
            <li>
              <label for="name">Your Name:</label>
              <input type="text" placeholder="Your Name" name="name" tabindex="1" maxlength="12">
            </li>
            <!-- <li>
              <label for="email">Your Email:</label>
              <input type="text" placeholder="Your Email" id="email" tabindex="2">
            </li> -->
            <li>
              <label for="shout">Message:</label>
              <textarea placeholder="Message..." name="shout" tabindex="3" maxlength="140"></textarea>
            </li>
          </ul>
          <input type="submit" value="SHOUT!" id="submit" name="send"/>
        </form>
      </div>
      <div id="mainContent" class="mCStyle">
          
        
        <div>
          <?php

            // Email removed. IP kept.

            $self = $_SERVER['PHP_SELF']; //the $self variable equals shoutbox.php
            include ('db/floatinglabelsDB.php'); // include shoutbox database
             
            $connect = mysql_connect($host,$username,$password) or die('<p class="error">Unable to connect to the database server at this time.</p>');
             
            mysql_select_db($database,$connect) or die('<p class="error">Unable to connect to the database at this time.</p>');

            if(isset($_POST['send'])) {
              if(empty($_POST['name']) || empty($_POST['shout'])) {
                  echo('<p class="error">You did not fill in a required field.</p>');
              } else {

                // HTML and SQL injection countermeasures
                $name = htmlspecialchars(mysql_real_escape_string($_POST['name']));
                $shout = htmlspecialchars(mysql_real_escape_string($_POST['shout']));
               
                $sql = "INSERT INTO shouts SET name='$name', shout='$shout';";
   
                if (@mysql_query($sql)) {
                    echo('<p class="success">Thanks for shouting!</p>');
                } else {
                    echo('<p class="error">There was an unexpected error when submitting your shout.</p>');
                }
              }
            }

            // Here be demons

            $query = "SELECT * FROM `shouts` ORDER BY `id` DESC LIMIT 8;";
         
            $result = @mysql_query("$query") or die('<p class="error">There was an unexpected error grabbing shouts from the database.</p>');
   
          ?><ul><?php
          while ($row = mysql_fetch_array($result)) {

              $ename = stripslashes($row['name']);
              $eshout = stripslashes($row['shout']);
               
       
              echo('<li><div class="meta"><p>'.$ename.'</p></div>
                <div class="shout"><p>'.$eshout.'</p></div></li>');
          }
        ?></ul>
        </div>
        </div>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>        
        <script src="../day005/js/navbar.js" type="text/javascript"></script>
        <script src="../day018/js/floatinglabels.js" type="text/javascript"></script>
    </body>
</html>