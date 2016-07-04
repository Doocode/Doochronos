<!-- Les boutons de la barre d'outils en bas de l'écran -->
<ul class="toolBar">
	<li onclick="showMenu(true);" onmouseover="showTooltip('Afficher le menu');" onmouseout="showTooltip('');"><img src="res/img/add.png" /></li>
    
    <!-- Le span suivant sera rétréci de 20%, donc il aura une taille de 80% par rapport à sa taille précédente -->
	<span class="little">
		<span style="width: 10px; display: inline-block;"></span> <!-- Espacement de 10px -->
        
        <li onclick="repriseAllCards();" onmouseover="showTooltip('Lancer tout les minuteurs et chronomètre');" onmouseout="showTooltip('');"><img src="res/img/reprise.png" /></li>
		<li onclick="pauseAllCards();" onmouseover="showTooltip('Mettre en pause tout les minuteurs et chronomètre');" onmouseout="showTooltip('');"><img src="res/img/pause.png" /></li>
	
        <span style="width: 20px; display: inline-block;"></span> <!-- Espacement de 20px -->
        
        <li onclick="removeAllCards();" onmouseover="showTooltip('Supprimer tous les cartes');" onmouseout="showTooltip('');"><img src="res/img/close.png" /></li>
		<li style="display: none;" onclick="expandAllCards();" onmouseover="showTooltip('Agrandir/rétrécir tous les cartes');" onmouseout="showTooltip('');"><img src="res/img/expand.png" /></li>
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

<!-- Le "clock" : L'horloge affiché en bas de l'écran -->
<div class="clock" onclick="showTime();">
    <div class="full"></div> <!-- Une div qui prendra tout la hauteur du clock -->
    <div class="ctn"> <!-- Le contenu va s'aligner au milieu verticalement grace au .full dééclaré précédement déclaré -->
        <h1>00:00</h1> <!-- L'heure -->
        <p id="date">Lundi 1er Janvier 1917</p> <!-- La date -->
    </div>
</div>