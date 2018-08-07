function addNewTimer() // Pour ajouter un minuteur
{
    // On récupère tous les informations saisies par l'utilisateur
	var name = $('#popupNewTimer input[type=text]').val(); // Le nom de la carte
	
	var hours = $('#popupNewTimer #hh').val(); // Le nombre d'heures
	var minutes = $('#popupNewTimer #mm').val(); // Le nombre de minutes
	var seconds = $('#popupNewTimer #ss').val(); // Le nombre de secondes
	
	var alarm = true; // S'il faut sonner l'alarme (son/notification)
	
	var card = new Timer(name,hours,minutes,seconds,alarm); // Création de la carte
	card.startTimer(); // Activation de la carte
	
	updateView(); // Mise à jour de l'affichage
	showPopup('Timer'); // Cacher le popup
}

function addNewChrono() // Pour ajouter un chronomètre
{
    // On récupère tous les informations saisies par l'utilisateur
	var name = $('#popupNewChrono input[type=text]').val(); // Le nom de la carte
	
	var card = new Chrono(name,false); // Création de la carte
	card.startChrono(); // Activation de la carte
	
	updateView(); // Mise à jour de l'affichage
	showPopup('Chrono'); // Cacher le popup
}

function addNewConvert() // Pour ajouter un convertisseur de temps
{
    // On récupère tous les informations saisies par l'utilisateur
	var name = $('#popupNewConvert input[type=text]').val(); // Le nom de la carte
	var millennials = $('#popupNewConvert #millennials').val(); // Le nombre de millénaires
	var centuries = $('#popupNewConvert #centuries').val(); // Le nombre de siècles
	var years = $('#popupNewConvert #years').val(); // Le nombre d'années
	var months = $('#popupNewConvert #months').val(); // Le nombre de mois
	var weeks = $('#popupNewConvert #weeks').val(); // Le nombre de semaines
	var days = $('#popupNewConvert #days').val(); // Le nombre de jours
	var hours = $('#popupNewConvert #hh').val(); // Le nombre d'heures
	var minutes = $('#popupNewConvert #mm').val(); // Le nombre de minutes
	var seconds = $('#popupNewConvert #ss').val(); // Le nombre de secondes
	
	var card = new Convert(name,millennials,centuries,years,months,weeks,days,hours,minutes,seconds); // Création de la carte
	card.startConvert(); // Activation de la carte
	
	updateView(); // Mise à jour de l'affichage
	showPopup('Convert'); // Cacher le popup
}