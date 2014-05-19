<!DOCTYPE html>



 <html class="no-js" lang="en"> 
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Chris Vincent Codes (a Deliverable a Day)</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/build/global.css">
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
  <body onload="init()">
    <div id="container">
      <div id="greeting">
        <ul id="navbar">
          <li class="navButton"><a href="./" class="activeMenu">Home</a><span></span></li>
          <li class="navButton"><a href="http://blog.chrisvincentcodes.com" class="inactiveMenu">Blog</a><span></span></li>
          <li class="navButton"><a href="https://github.com/ChrisVincentCodes/DailyDeliverables" class="inactiveMenu">GitHub</a><span></span></li>
        </ul>
      </div>
      <div id="mainContainer">
        <div id="mainContent">
          <div id="selectDisplay">
            <input type="button" value="View by Day" id="byDayButton" name="byDayButton"/>
            <input type="button" value="View by Project" id="byProjectButton" name="byProjectButton"/>
          </div>
          <div id="deliverables">
            <div class="deliverable"><a id="recent" href="day036/"><div class="date">36</div>Warp Speed (v2)</a></div>
            <div class="deliverable"><a href="./"><div class="date">35</div>ChrisVincentCodes (v5)</a></div>
            <div class="deliverable"><a href="day034/"><div class="date">34</div>Sliders (v3)</a></div>
            <div class="deliverable"><a href="day033/"><div class="date">33</div>Sliders (v2)</a></div>
            <div class="deliverable"><a href="day032/"><div class="date">32</div>Sliders (v1)</a></div>
            <div class="deliverable"><a href="day031/"><div class="date">31</div>Draw (v4)</a></div>
            <div class="deliverable"><a href="day030/"><div class="date">30</div>ChrisVincentCodes (v4)</a></div>
            <div class="deliverable"><a href="day029/"><div class="date">29</div>Draw (v3)</a></div>
            <div class="deliverable"><a href="day028/"><div class="date">28</div>Draw (v2)</a></div>
            <div class="deliverable"><a href="day027/"><div class="date">27</div>Draw (v1)</a></div>
            <div class="deliverable"><a href="day026/"><div class="date">26</div>Image Filter (v3)</a></div>
            <div class="deliverable"><a href="day025/"><div class="date">25</div>Tone Generator (v4)</a></div>
            <div class="deliverable"><a href="day024/"><div class="date">24</div>Image Filter (v2)</a></div>
            <div class="deliverable"><a href="day023/"><div class="date">23</div>Image Filter (v1)</a></div>
            <div class="deliverable"><a href="day022/"><div class="date">22</div>Tone Generator (v3)</a></div>
            <div class="deliverable"><a href="day021/"><div class="date">21</div>Alarm Clock</a></div>
            <div class="deliverable"><a href="day020/"><div class="date">20</div>ChrisVincentCodes (v3)</a></div>
            <div class="deliverable"><a href="day019/"><div class="date">19</div>Snake (v4)</a></div>
            <div class="deliverable"><a href="day018/"><div class="date">18</div>ShoutBox (v2)</a></div>
            <div class="deliverable"><a href="day017/"><div class="date">17</div>Warp Speed</a></div>
            <div class="deliverable"><a href="day016/"><div class="date">16</div>Boxplosion</a></div>
            <div class="deliverable"><a href="day015/"><div class="date">15</div>Snake (v3)</a></div>
            <div class="deliverable"><a href="day014/"><div class="date">14</div>Snake (v2)</a></div>
            <div class="deliverable"><a href="day013/"><div class="date">13</div>Snake (v1)</a></div>
            <div class="deliverable"><a href="day012/"><div class="date">12</div>Countdown</a></div>
            <div class="deliverable"><a href="day011/"><div class="date">11</div>Tone Generator (v2)</a></div>
            <div class="deliverable"><a href="day010/"><div class="date">10</div>Tone Generator (v1)</a></div>
            <div class="deliverable"><a href="day009/"><div class="date">9</div>LiveReload + SASS</a></div>
            <div class="deliverable"><a href="day008/"><div class="date">8</div>Simple Bootstrap Layout</a></div>
            <div class="deliverable"><a href="day007/"><div class="date">7</div>ShoutBox (v1)</a></div>
            <div class="deliverable"><a href="http://chrisvincentcodes.com" onclick="open(this.href, '_blank', 'scrollbars=1,resizable=1,width=400,height=800');"><div class="date">6</div>Mobile Optimization</a></div>
            <div class="deliverable"><a href="day005/"><div class="date">5</div>Nav Bar</a></div>
            <div class="deliverable"><a href="day004/"><div class="date">4</div>Shybox</a></div>
            <div class="deliverable"><a href="day003/"><div class="date">3</div>Quick Reverb Time Calc</a></div>
            <div class="deliverable"><a href="day002/"><div class="date">2</div>ChrisVincentCodes (v2)</a></div>
            <div class="deliverable"><a href="day001/"><div class="date">1</div>ChrisVincentCodes (v1)</a></div>
          </div>
          <div id="projects" style="display:none">
            <div class="category">TOOLS</div>
            <ul>
              <li class="tool"><a href="day025/">Tone Generator</a></li>
              <li class="tool"><a href="day031/">Draw</a></li>
              <li class="tool"><a href="day026/">Image Filter</a></li>
              <li class="tool"><a href="day003/">Quick Reverb Time Calc</a></li>
            </ul>
            <div class="category">GAMES</div>
            <ul>
              <li class="game"><a href="day019/">Snake</a></li>
              <li class="game"><a href="day034/">Slider Puzzle</a></li>
            </ul>
            <div class="category">VISUALS</div>
            <ul>
              <li class="visual"><a href="day036/">Warp Speed</a></li>
              <li class="visual"><a href="day016/">Boxplosion</a></li>
            </ul>
            <div class="category">MISC.</div>
            <ul>
              <li class="misc"><a href="day021/">Alarm Clock</a></li>
              <li class="misc"><a href="day018/">Shoutbox</a></li>
              <li class="misc"><a href="day012/">Countdown</a></li>
              <li class="misc"><a href="day004/">Shybox</a></li>
            </ul>
          </div>
          <div>&nbsp;</div>
        </div>
        <div id="sidebar">
          <div id="aboutMe">
            <div>My name is Chris Vincent.</div>
            <div>&nbsp;</div>
            <div>It is my goal to create something every day for six months.</div>
            <div>&nbsp;</div>
            <div>This website will be constantly updated with my daily deliverables.</div>
            <div>&nbsp;</div>
            <div>You can visit my <a href ="http://blog.chrisvincentcodes.com">blog</a> or <a href="mailto:chrisvincentcodes@gmail.com">email me</a> if you'd like to learn more about what I'm doing, why I'm doing it, and what I hope to achieve.</div>
            <div>&nbsp;</div>
            <div>This project was heavily inspired by Jennifer Dewalt and her incredible accomplishment of <a href="http://jenniferdewalt.com">building 180 websites in 180 days.</a></div>
          </div>
          <div id="shoutbox">
            <div id="shoutboxIO">
              <?php

                // Email removed. IP kept.

                $self = $_SERVER['PHP_SELF']; //the $self variable equals shoutbox.php
                include ('day018/db/floatinglabelsDB.php'); // include shoutbox database
                 
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
                        /*echo('<p class="success">Thanks for shouting!</p>');*/
                    } else {
                        /*echo('<p class="error">There was an unexpected error when submitting your shout.</p>');*/
                    }
                  }
                }

                // Here be demons

                $query = "SELECT * FROM `shouts` ORDER BY `id` DESC LIMIT 15;";
             
                $result = @mysql_query("$query") or die('<p class="error">There was an unexpected error grabbing shouts from the database.</p>');
       
              ?><form class="shoutboxForm" action="<?php $self ?>" method="post">
                <ul>
                  <li>
                    <label for="name">Name:</label>
                    <input type="text" placeholder="Your Name.." name="name" tabindex="1" maxlength="12">
                  </li>
                  <!-- <li>
                    <label for="email">Your Email:</label>
                    <input type="text" placeholder="Your Email" id="email" tabindex="2">
                  </li> -->
                  <li>
                    <label for="shout">Message:</label>
                    <textarea placeholder="Your Message..." name="shout" tabindex="2" maxlength="140"></textarea>
                  </li>
                </ul>
                <input type="submit" value="SHOUT!" id="submit" name="send"/>
              </form>
              <ul id="shoutboxShouts"><?php
                while ($row = mysql_fetch_array($result)) {

                  $ename = stripslashes($row['name']);
                  $eshout = stripslashes($row['shout']);
                   
           
                  echo('<li><div class="userPost"><div class="meta"><p>'.$ename.'</p></div>
                    <div class="shout"><p>'.$eshout.'</p></div></div></li>');
                }
              ?></ul>
            </div>
          </div>
        </div>
      </div>

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
    <script src="day005/js/navbar.js" type="text/javascript"></script>

    <script src="js/shoutbox.js" type="text/javascript"></script>

    <script src="js/index.js" type="text/javascript"></script>
  </body>
</html>