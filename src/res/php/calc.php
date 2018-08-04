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