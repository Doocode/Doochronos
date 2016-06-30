<div id="popupNewTimer" class="popup">
	<div class="hidePopup" onclick="showPopup('Timer');"></div>
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

<div id="popupNewChrono" class="popup">
	<div class="hidePopup" onclick="showPopup('Chrono');"></div>
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

<div id="popupNewCalcul" class="popup">
	<div class="hidePopup" onclick="showPopup('Calcul');"></div>
	<div class="form">
		<h1>Calculer le temps</h1>
		<!--
		<h2>Couleur</h2>
		<input type="button" value="Choisir une couleur" />
		
		<h2>Lancer</h2>
		<input type="button" value="Lancer le calcul" onclick="//addNewTimer();" />-->
		<h2>Bientôt</h2>
	</div>
</div>

<div id="popupNewConvert" class="popup">
	<div class="hidePopup" onclick="showPopup('Convert');"></div>
	<div class="form">
		<h1>Convertir le temps</h1>
		
		<h2>Entrez le temps à convertir</h2>
		<div class="numbers">
			<div class="cell">
				<h3>Millénaires</h3>
				<input type="number" min="0" max="10" value="0" id="millennials" />
			</div>
			<div class="cell">
				<h3>Siècles</h3>
				<input type="number" min="0" max="500" value="0" id="centuries" />
			</div>
			<div class="cell">
				<h3>Années</h3>
				<input type="number" min="0" max="1000" value="0" id="years" />
			</div>
		
			<div class="cell">
				<h3>Mois</h3>
				<input type="number" min="0" max="10" value="0" id="months" />
			</div>
			<div class="cell">
				<h3>Semaines</h3>
				<input type="number" min="0" max="500" value="0" id="weeks" />
			</div>
			<div class="cell">
				<h3>Jours</h3>
				<input type="number" min="0" max="1000" value="0" id="days" />
			</div>
			
			<div class="cell">
				<h3>Heures</h3>
				<input type="number" min="0" max="10" value="0" id="hh" />
			</div>
			<div class="cell">
				<h3>Minutes</h3>
				<input type="number" min="0" max="500" value="0" id="mm" />
			</div>
			<div class="cell">
				<h3>Secondes</h3>
				<input type="number" min="0" max="1000" value="5" id="ss" />
			</div>
		</div>
		
		<h2>Lancer</h2>
		<input type="button" value="Lancer la conversion" onclick="addNewConvert();" />
	</div>
</div>