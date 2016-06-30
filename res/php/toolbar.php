<!-- Les boutons de la barre d'outils en bas de l'écran -->
<ul class="toolBar">
	<li onclick="showMenu(true);" onmouseover="showTooltip('Afficher le menu');" onmouseout="showTooltip('');"><img src="res/img/add.png" /></li>
	<span style="display: inline-block; -webkit-transform: scale(0.8); -moz-transform: scale(0.8); -ms-transform: scale(0.8); -o-transform: scale(0.8); transform: scale(0.85);">
		<li onclick="" onmouseover="showTooltip('Lancer tout les minuteurs et chronomètre');" onmouseout="showTooltip('');"><img src="res/img/reprise.png" /></li>
		<li onclick="" onmouseover="showTooltip('Mettre en pause tout les minuteurs et chronomètre');" onmouseout="showTooltip('');"><img src="res/img/pause.png" /></li>
	</span>

	<p class="tooltip">Tooltip</p> <!-- La bulle d'info, celle qui est affiché au survol d'un bouton de la barre d'outils -->
</ul>

<!-- Le menu pour créer une carte -->
<ul class="menu">
	<li onclick="showPopup('Timer');">
		<img src="res/img/timer.png" />
		<p>Ajouter un minuteur</p>
	</li>
	<li onclick="showPopup('Chrono');">
		<img src="res/img/chrono.png" />
		<p>Ajouter un chronomètre</p>
	</li>
	<li onclick="showPopup('Calcul');">
		<img src="res/img/passe.png" />
		<p>Calculer le temps passé ou restant</p>
	</li>
	<li onclick="showPopup('Convert');">
		<img src="res/img/convert.png" />
		<p>Convertir une durée</p>
	</li>
</ul>

<!-- L'affichage de la date et heure -->
<div class="clock" onclick="showTime();">
	<div class="full"></div>
	<div class="ctn">
		<h1>00:00</h1>
		<p>Lundi 1er Mars 2000</p>
		
		<p class="pub">Voyagez dans le temps avec Doochronos</p>
	</div>
</div>