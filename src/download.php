<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1.0">
        <link rel="stylesheet" href="res/css/animate.css" />
        <link rel="stylesheet" href="res/css/main.css" />
        <link rel="stylesheet" href="res/css/header.css" />
        <link rel="stylesheet" href="res/css/index.css" />
		<link rel="icon" type="image/png" href="res/img/favicon.png" />
        <title>Doochronos > Télécharger</title>
    </head>

    <body>
        <?php include("res/php/header.php"); ?>
		
		<div class="page">
			<h1>Télécharger Doochronos</h1>
			<img id="pub" src="res/img/download.png" />
			<p>Tout d'abord, pour télécharger Doochronos, il faut savoir plusieurs choses :</p>
			<ul>
				<li>le fichier que vous allez télécharger n'est pas un programme, mais une archive ZIP contenant du code source<!--, par conséquent, il est destiné aux développeurs et/ou webmaster par exemple-->;</li>
				<li>le fichier est placé sous licence GPL v3, donc vous devez l'avoir lu et accepter les conditions de la licence pour utiliser le fichier téléchargé.</li>
			</ul>
			
			<input type="submit" value="Lire la licence GPL v3 (en anglais)" onclick="window.open('http://www.gnu.org/licenses/gpl.html', '_blank');" />
			<input type="submit" value="Télécharger Doochronos" onclick="document.location.href='res/doochronos_0_3_beta_a_src.zip'" />
		</div>
    </body>
</html>