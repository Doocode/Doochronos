<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="res/css/animate.css" />
        <link rel="stylesheet" href="res/css/main.css" />
        <link rel="stylesheet" href="res/css/header.css" />
        <link rel="stylesheet" href="res/css/app-header.css" />
        <link rel="stylesheet" href="res/css/app.css" />
        <link rel="stylesheet" href="res/css/toolbar.css" />
        <link rel="stylesheet" href="res/css/tabs.css" />
        <link rel="stylesheet" href="res/css/popup.css" />
		<link rel="icon" type="image/png" href="res/img/favicon.png" />
		<meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1.0">
		<meta name="keywords" content="doocode, doochronos" />
		<title>Doochronos de Doocode</title>
    </head>

    <body id="app">
        <?php include("res/php/header.php"); ?> <!-- L'entête -->

        <div class="listCards"></div> <!-- L'écran où sera placé les "cartes" -->
		
		<div class="central">
		
			<div class="aligner"></div> <!-- "aligner" sert de repère pour aligner "redirect" et "app" verticalement -->
			
			<div class="app">
				<?php include("res/php/app.php"); ?> <!-- C'est ici le coeur de Doochronos -->
			</div>
	
		</div>
	
        <!-- Importation de quelques scripts JS -->
        <script src="res/js/classes.js"></script>
        <script src="res/js/app.js"></script>
    </body>
</html>