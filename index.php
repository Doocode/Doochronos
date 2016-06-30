<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="res/css/animate.css" />
        <link rel="stylesheet" href="res/css/main.css" />
        <link rel="stylesheet" href="res/css/header.css" />		
        <link rel="stylesheet" href="res/css/app.css" />	
        <link rel="stylesheet" href="res/css/toolbar.css" />
        <link rel="stylesheet" href="res/css/popup.css" />
		<link rel="icon" type="image/png" href="res/img/favicon.png" />
		<meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1.0">
		<meta name="keywords" content="doocode, doochronos" />
		<!--<meta name="description" content="Doochronos est une page d'accueil qui propose la recherche à partir d'un moteur de recherche selectionné parmis plusieurs, parmis Google, Youtube, Bing et plein d'autre. Doosearch a été créé dans le but d'être utilisé comme page d'accueil dans Dooscape, le navigateur web de Doocode." />-->
		<title>Doochronos de Doocode</title>
    </head>

    <body onload="loadFinished();">
        <?php include("res/php/header.php"); ?>
		
		<div class="central">
		
			<div class="aligner"></div> <!-- "aligner" sert de repère pour aligner "redirect" et "app" horizontalement -->
			
			<div class="redirect">
				<h1>Veuillez patienter</h1><!-- "redirect" sert à faire patienter l'utilisateur le temps du chargement de la page -->
			</div>
			<div class="app">
				<?php include("res/php/app.php"); ?>
			</div>
	
			<script src="res/js/classes.js"></script>
			<script src="res/js/app.js"></script>
			<script src="res/js/clock.js"></script>
	
		</div>
    </body>
</html>