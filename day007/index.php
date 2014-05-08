<!DOCTYPE html>



 <html class="no-js" lang="en"> 
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>ShoutBox | ChrisVincentCodes</title>

        <link rel="stylesheet" href="../css/reset.css">
        <link rel="stylesheet" href="../css/build/global.css">
        <link rel="stylesheet" href="css/shoutbox.css">
        <!-- JS -->
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>        
        <script src="../day005/js/navbar.js" type="text/javascript"></script>

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
            <ul id="navbar">
                <li class="navButton"><a href="../" class="inactiveMenu">Home</a><span></span></li>
                <li class="navButton"><a href="http://blog.chrisvincentcodes.com" class="inactiveMenu">Blog</a><span></span></li>
                <li class="navButton"><a href="https://github.com/ChrisVincentCodes/DailyDeliverables" class="inactiveMenu">GitHub</a><span></span></li>
            </ul> <!-- End Navbar -->
        </div>
		<div id="container">
		  	<div id="mainContent">
				<?php

					// Email removed. IP kept.

					$self = $_SERVER['PHP_SELF']; //the $self variable equals shoutbox.php
					$ipaddress = ("$_SERVER[REMOTE_ADDR]"); // I can see your IP
					include ('db/shoutboxDB.php'); // include shoutbox database
					 
					$connect = mysql_connect($host,$username,$password) or die('<p class="error">Unable to connect to the database server at this time.</p>');
					 
					mysql_select_db($database,$connect) or die('<p class="error">Unable to connect to the database at this time.</p>');

					if(isset($_POST['send'])) {
					    if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['post'])) {
					        echo('<p class="error">You did not fill in a required field.</p>');
					    } else {

					    	// HTML and SQL injection countermeasures
					    	$name = htmlspecialchars(mysql_real_escape_string($_POST['name']));
  							$email = htmlspecialchars(mysql_real_escape_string($_POST['email']));
  							$post = htmlspecialchars(mysql_real_escape_string($_POST['post']));
							 
							$sql = "INSERT INTO shouts SET name='$name', email='$email', post='$post', ipaddress='$ipaddress';";
	 
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
					    $eemail = stripslashes($row['email']);
					    $epost = stripslashes($row['post']);
					     
					    // Gravatar stuff below. Maybe later?

					    $grav_url = "http://www.gravatar.com/avatar.php?gravatar_id=".md5(strtolower($eemail))."&size=70";
	     
	    				echo('<li><div class="meta"><img src="'.$grav_url.'" alt="Gravatar"><p>'.$ename.'</p></div>
	    					<div class="shout"><p>'.$epost.'</p></div></li>');
					}
				?></ul>
		  	</div><!--/mainContent-->
		  	<div id="sidebar">
				<form action="<?php $self ?>" method="post">
					<h2>Shout! </h2>
					<div>&nbsp;</div>
					<div class="fname"><label for="name">Name:</label><input name="name" type="text" cols="20" /></div>
					<div class="femail"><label for="email">Email:</label><input name="email" type="text" cols="20" /></div>
					<textarea name="post" rows="5" cols="40"></textarea>
					<input name="send" type="hidden" />
					<input type="submit" value="send" />
				</form>
			</div>
		</div><!--/container-->
	</body>
</html>