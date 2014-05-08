 <html class="no-js" lang="en"> 
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Snake | ChrisVincentCodes</title>
        <!-- <link rel="stylesheet" href="css/reset.css">
        <link rel="stylesheet" href="css/common.css"> -->

        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">

        <!-- Optional theme -->
        <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css">

        <link rel="stylesheet" type="text/css" href="css/snake.css">
        <link rel="stylesheet" type="text/css" href="../ColorPicker/css/colorpicker.css">
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
      
      <header class="navbar navbar-inverse" role="banner">
        <div class="container">
          <nav role="navigation">
            <div class="container-fluid">
              <!-- Brand and toggle get grouped for better mobile display -->
              <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="../">Home</a>
              </div>

              <!-- Collect the nav links, forms, and other content for toggling -->
              <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                  <li><a href="http://blog.chrisvincentcodes.com">Blog</a></li>
                  <li><a href="https://github.com/ChrisVincentCodes/DailyDeliverables">GitHub</a></li>
                </ul>
              </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
          </nav>
        </div>
      </header>
      
      <div class="container">
        <div id="alert">

          <?php

              // Email removed. IP kept.

            $self = $_SERVER['PHP_SELF']; //the $self variable equals shoutbox.php
            include ('db/snakeScoresDB.php'); // include shoutbox database
             
            $connect = mysql_connect($host,$username,$password) or die('<p class="error">Unable to connect to the database server at this time.</p>');
             
            mysql_select_db($database,$connect) or die('<p class="error">Unable to connect to the database at this time.</p>');

            if(isset($_POST['send'])) {
              if(empty($_POST['name'])) {
                  echo('<p class="error highlight">You did not enter your name.</p>');
                  /*echo '<script language="javascript">';
                  echo 'alert("You did not enter your name")');
                  echo '</script>';*/
              } else {

                // HTML and SQL injection countermeasures
                $name = htmlspecialchars(mysql_real_escape_string($_POST['name']));

                $score = htmlspecialchars(mysql_real_escape_string($_POST['hiddenScore']));
               
                $sql = "INSERT INTO scores SET name='$name', score='$score';";
   
                if (@mysql_query($sql)) {
                    echo('<p class="success highlight">Thanks for playing!</p>');
                } else {
                    echo('<p class="error">There was an unexpected error when submitting your shout.</p>');
                }
              }
            }

            // Here be demons

            $query = "SELECT * FROM `scores` ORDER BY `score` DESC LIMIT 30;";
         
            $result = @mysql_query("$query") or die('<p class="error">There was an unexpected error grabbing scores from the database.</p>');
   
          ?>
        </div>
        <div class="col-sm-9 col-xs-12">
          <div id="game-container">
            <!-- Here's where the magic happens -->
            <div id="splashScreen">
              <h1>SNAKE!</h1>
              <div>&nbsp;</div>
              <h2>How to play:</h2>
              <h3>Arrow keys control the snake. Eat food to increase your score.</h3>
              <h3>Click the box to change the game color.</h3>
              <div>&nbsp;</div>
              <input id="startButton" type="button" value="PRESS ENTER or CLICK HERE to start" />
            </div>
            <div id="finishScreen" style="display:none">
              <div>&nbsp;</div>
              <input id="restartButton" type="button" value="PRESS ENTER or CLICK HERE to restart" />
              <div>&nbsp;</div>
              <form id="form" class="form" action="<?php $self ?>" method="post">
                <input type="text" class="highlight" placeholder="Your Name" name="name" value="<?php echo $_POST['name']; ?>" tabindex="1">
                <input type="submit" value="SUBMIT SCORE" id="submit" name="send"/>
                <input type="hidden" name="hiddenScore" id="hiddenScore" value="<?php echo $_POST['score']; ?>"/>
              </form>
              
            </div>
            <div id="canvas-container">
              <canvas id="canvas" width="450" height="450" style="display:none"></canvas>
            </div>
            <div>&nbsp;</div>
            <div id="elementContainer">
              <div class="colorSelector"><div class="highlight" style="background-color: #00D3DE"></div></div>
              <div id="scoreHolder">Score: <div id="score" name="score"></div></div>
            </div>
            <div>&nbsp;</div>        
          </div>
        </div>
        <div class="col-sm-3 col-xs-12">
          <div id="tableContainer">
            <table id="hsTable">
              <tr class="highlight"><th id="hsTableTitle" colspan="2">HIGH SCORES</th></tr>
              <?php
                while ($row = mysql_fetch_array($result)) {

                  $ename = stripslashes($row['name']);
                  $escore = stripslashes($row['score']);
                   
           
                  echo('<tr><td>'.$ename.'</td><td>'.$escore.'</td></tr>');
                }
              ?>
            </table>
          </div>
        </div>  
      </div>

      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>        
      <!--<script src="js/navbar.js" type="text/javascript"></script>
      <script src="floatinglabels.js" type="text/javascript"></script> -->
      <!-- Latest compiled and minified JavaScript -->
      <script src="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
      <script src="js/snake.js" type="text/javascript"></script>
      <script src= "../ColorPicker/js/colorpicker.js" type="text/javascript"></script>
    </body>
</html>