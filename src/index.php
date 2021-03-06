<!DOCTYPE html>
<html>
    <head>
        <?php include("res/php/head.php"); ?>
        <meta name="keywords" content="doocode, doochronos" />
		<meta name="description" content="Doochronos est un site web qui permet de gérer plusieurs minuteurs et chronomètres en même temps." />
        <link rel="stylesheet" href="res/css/page.css" />
        <link rel="stylesheet" href="res/css/index.css" />
        <title>Doochronos de Doocode</title>
    </head>

    <body>
        <?php include("res/php/header.php"); ?>
        <script>setCurrentPage('#indexPage');</script>
		
		<div class="presentation" style="background-image: url(res/img/about.png);">
			<h1>Accueil</h1>
		</div>
		
		<div class="page">
            <h1>Bienvenue sur Doochronos</h1>
            <ul id="actions">
                <li id="btnStart">
                    <a href="board.php">
                        <img src="res/img/start.png" />
                        <p>Utiliser Doochronos</p>
                    </a>
                </li>
                <li id="btnConfig">
                    <a href="configuration.php">
                        <img src="res/img/config.png" />
                        <p>Configurer Doochronos</p>
                    </a>
                </li>
                <li id="btnLogin">
                    <a href="#">
                        <img src="res/img/user.png" />
                        <p>S'inscrire ou se connecter</p>
                    </a>
                </li>
            </ul>
            
            <h2>Qu'est-ce que Doochronos</h2>
            <p>Doochronos est un site web qui permet de gérer plusieurs minuteurs et chronomètres en même temps.</p>
            
            <h2>Français et Open-source</h2>
            <p>Doochronos a été développé par des Français et est hébergé par un hébergeur français. Vous pouvez même voir les entrailles du site, si vous avez des capacités en développement puisque le site est open-source.</p>
		</div>
    </body>
</html>