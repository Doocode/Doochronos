<div id="popupNewConvert" class="popup"> <!-- Popup pour créer un nouveau convertisseur de temps -->
	<div class="hidePopup" onclick="showPopup('Convert');"></div> <!-- Le hide popup pour cacher le popup -->
	<div class="form">
		<h1>Convertir le temps</h1>
		
		<h2>Nom de la carte</h2>
		<input type="text" placeholder="Nom de la carte" value="Convertisseur" />
		
		<h2>Entrez le temps à convertir</h2>
		<div class="numbers">
			<div class="cell">
				<h3>Millénaires</h3>
				<input type="number" min="0" max="10" value="0" id="millennials" />
			</div>
			<div class="cell">
				<h3>Siècles</h3>
				<input type="number" min="0" max="5000" value="0" id="centuries" />
			</div>
			<div class="cell">
				<h3>Années</h3>
				<input type="number" min="0" max="10000" value="0" id="years" />
			</div>
		
			<div class="cell">
				<h3>Mois</h3>
				<input type="number" min="0" max="100" value="0" id="months" />
			</div>
			<div class="cell">
				<h3>Semaines</h3>
				<input type="number" min="0" max="500" value="0" id="weeks" />
			</div>
			<div class="cell">
				<h3>Jours</h3>
				<input type="number" min="0" max="10000" value="0" id="days" />
			</div>
			
			<div class="cell">
				<h3>Heures</h3>
				<input type="number" min="0" max="10000" value="0" id="hh" />
			</div>
			<div class="cell">
				<h3>Minutes</h3>
				<input type="number" min="0" max="10000" value="0" id="mm" />
			</div>
			<div class="cell">
				<h3>Secondes</h3>
				<input type="number" min="0" max="10000" value="5" id="ss" />
			</div>
		</div>
		
		<h2>Lancer</h2>
		<input type="button" value="Lancer la conversion" onclick="addNewConvert();" />
	</div>
</div>