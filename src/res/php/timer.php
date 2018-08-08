<div id="popupNewTimer" class="popup"> <!-- Popup pour créer un nouveau minuteur -->
	<div class="hidePopup" onclick="showPopup('Timer');"></div> <!-- Le hide popup pour cacher le popup -->
	<div class="form">
		<h1>Nouveau minuteur</h1>
		
		<h2>Nom du minuteur</h2>
		<input type="text" placeholder="Nom du minuteur" value="Minuteur" />
		
		<h2>Durée du minuteur</h2>
		<div class="numbers">
			<div class="cell">
				<h3>Heures</h3>
				<input type="number" min="0" max="10" value="0" id="hh" />
			</div>
			<div class="cell">
				<h3>Minutes</h3>
				<input type="number" min="0" max="500" value="2" id="mm" />
			</div>
			<div class="cell">
				<h3>Secondes</h3>
				<input type="number" min="0" max="1000" value="0" id="ss" />
			</div>
		</div>
		<!--
		<h2>Couleur</h2>
		<input type="button" value="Choisir une couleur" />
		
		<h2>Options</h2>
		<input type="button" value="Activer la sonnerie" />
		<input type="button" value="Désactiver la sonnerie" />-->
		
		<h2>Lancer</h2>
		<input type="button" value="Lancer le minuteur" onclick="addNewTimer();" />
	</div>
</div>