<!-- Les popups -->

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

<div id="popupNewCalcul" class="popup"> <!-- Popup pour créer un nouveau calculateur de temps -->
	<div class="hidePopup" onclick="showPopup('Calcul');"></div> <!-- Le hide popup pour cacher le popup -->
	<div class="form">
		<h1>Déterminer une durée</h1>
		
		<h2>Nom de la carte</h2>
		<input type="text" placeholder="Nom de la carte" value="Calcul de durée" />
		
		<h2>Temps défini</h2>
        <div class="tabs">
            <div class="tabBar">
                <input type="radio" name="calculType" id="date" checked><label for="date">Date</label>
                <input type="radio" name="calculType" id="time"><label for="time">Temps</label>
            </div>
            <div>
                <div class="tab" id="tabDate">
                    <div class="numbers">
                        <div class="cell">
                            <h3>Jour</h3>
                            <input type="number" min="1" max="31" value="1" id="day" />
                        </div>
                        <div class="cell">
                            <h3>Mois</h3>
                            <input type="number" min="1" max="12" value="1" id="month" />
                        </div>
                        <div class="cell">
                            <h3>Année</h3>
                            <input type="number" min="0" max="99999" value="2000" id="year" />
                        </div>
                    </div>
                </div>
                <div class="tab" id="tabTime">
                    <div class="numbers">
                        <div class="cell">
                            <h3>Heure</h3>
                            <input type="number" min="0" max="24" value="0" id="hour" />
                        </div>
                        <div class="cell">
                            <h3>Minute</h3>
                            <input type="number" min="0" max="59" value="0" id="minute" />
                        </div>
                        <div class="cell">
                            <h3>Seconde</h3>
                            <input type="number" min="0" max="59" value="0" id="second" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
		
		<h2>Lancer</h2>
		<input type="button" value="Lancer le calcul" onclick="addNewCalc();" />
	</div>
</div>

<div id="popupNewConvert" class="popup"> <!-- Popup pour créer un nouveau convertisseur de temps -->
	<div class="hidePopup" onclick="showPopup('Convert');"></div> <!-- Le hide popup pour cacher le popup -->
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