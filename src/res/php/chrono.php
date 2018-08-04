<div id="popupNewChrono" class="popup"> <!-- Popup pour créer un nouveau chronomètre -->
	<div class="hidePopup" onclick="showPopup('Chrono');"></div> <!-- Le hide popup pour cacher le popup -->
	<div class="form">
		<h1>Nouveau chronomètre</h1>
		
		<h2>Nom du chronomètre</h2>
		<input type="text" placeholder="Nom du chronomètre" value="Chronomètre" />
		
		<!--<h2>Couleur</h2>
		<input type="button" value="Choisir une couleur" />-->
		
		<h2>Lancer</h2>
		<input type="button" value="Lancer le chronomètre" onclick="addNewChrono();" />
	</div>
</div>