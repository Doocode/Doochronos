<!DOCTYPE html>
<html>
    <head>
        <?php include("res/php/head.php"); ?>
        <link rel="stylesheet" href="res/css/page.css" />
        <link rel="stylesheet" href="res/css/about.css" />
        <title>Doochronos > A propos</title>
    </head>

    <body>
        <?php include("res/php/header.php"); ?>
        <script>setCurrentPage('#aboutPage');</script>
		
		<div class="presentation" style="background-image: url(res/img/about.png);">
			<h1>A propos</h1>
		</div>
		
		<div class="page">
			<img id="pub" src="res/img/ident.png" style="margin-top: -50px; border-radius: 10px 10px 0px 0px;" />
			<h1>A propos de Doochronos</h1>
            <h2 id="version">Version 0.3 Beta C</h2>
			<p>Doochronos est un site web qui permet de gérer plusieurs minuteurs et chronomètres en même temps.</p>
			<img src="res/img/licence-logo.png" id="licence" />
			<p>Le site Doochronos est un projet de <a href="http://doocode.xyz/">Doocode</a> et est placé sous la licence GPL v.3 dont vous pouvez trouver plus d'informations à cette adresse : <a href="https://www.gnu.org/licenses/gpl.html">https://www.gnu.org/licenses/gpl.html [EN]</a>.</p>
			<img src="res/img/web-tech.png" id="webtech" />
			<p>Le site de Doochronos est codé en HTML 5, CSS 3, PHP, JavaScript et jQuery, et utilise également un projet intitulé <a href="http://daneden.github.io/animate.css/">Animate.css</a> créé par Daniel Eden, placé sous licence MIT.</p>
		</div>
    </body>
</html>