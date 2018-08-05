<!DOCTYPE html>
<html>
    <head>
        <?php include("res/php/head.php"); ?>
        <link rel="stylesheet" href="res/css/hub-header.css" />
        <link rel="stylesheet" href="res/css/hub.css" />
        <link rel="stylesheet" href="res/css/list-cards.css" />
        <link rel="stylesheet" href="res/css/toolbar.css" />
        <link rel="stylesheet" href="res/css/tabs.css" />
        <link rel="stylesheet" href="res/css/popup.css" />
		<title>Doochronos > Tableau de bord</title>
    </head>

    <body id="app">
        <?php include("res/php/header.php"); ?> <!-- L'entête -->
        <script>setCurrentPage('#boardPage');</script>

        <div class="listCards"></div> <!-- L'écran où sera placé les "cartes" -->
		
		<div class="central">
		
			<div class="aligner"></div> <!-- "aligner" sert de repère pour aligner "redirect" et "app" verticalement -->
			
			<div class="app">
                
                <!-- L'écran d'accueil -->
                <div class="welcome">
                    <img src="res/img/white-flat-logo.png" />
                    <h1>Manipuler le temps est devenu possible</h1>
                    <input type="button" onclick="showMenu(true);" value="Commencer"/>
                </div>

			</div>
	
		</div>
        
        <?php include("res/php/toolbar.php"); ?> <!-- La barre d'outils -->
        <?php include("res/php/menu.php"); ?> <!-- Le menu -->

        <!-- Les popups -->
        <?php include("res/php/timer.php"); ?>
        <?php include("res/php/chrono.php"); ?>
        <?php include("res/php/calc.php"); ?>
        <?php include("res/php/convert.php"); ?>
	
        <!-- Importation de quelques scripts JS -->
        <script src="res/js/time.js"></script>
        <script src="res/js/timeplus.js"></script>
        <script src="res/js/timer.js"></script>
        <script src="res/js/chrono.js"></script>
        <script src="res/js/convert.js"></script>
        <script src="res/js/app.js"></script>
        <script src="res/js/cards.js"></script>
        <script src="res/js/add-cards.js"></script>
    </body>
</html>