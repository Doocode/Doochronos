

function showTime() // Afficher l'heure en plein écran quand l'utilisateur clique dessus
{
	if($('.clock').css('left')=='0px') // Si le "clock" est en plein écran
		$('.clock').removeClass('fullScreen'); // L'afficher en petit
	else // Sinon (si le clock n'est pas en plein écran)
		$('.clock').addClass('fullScreen'); // L'afficher alors en plein écran
}

function updateTime() // Pour mettre à jour la date et heure affichée
{
	var today = new Date; // On récupère la date et heure
	
	// HEURES
	var hours = today.getHours(); // On récupère l'heure
	var minutes = today.getMinutes(); // On récupère les minutes

	if(hours < 10) // Si l'hours est compris entre 0 et 9
		hours = '0'+hours; // On rajoute un '0' au début : 07
	if(minutes < 10) // De même pour les minutes
		minutes = '0'+minutes; // Même opération

	var hours = hours + ':' + minutes; // L'heure au format "00:00"
	
	$('.clock h1').html(hours); // Modifie l'heure affiché
	
	// DATE
	var day = today.getDay(); // On récupère le nom du jour
	var dayNum = today.getDate(); // On récupère le numéro du jour
	var month = today.getMonth(); // On récupère le mois
	var year = today.getFullYear(); // On récupère l'année
	
    // On remplace les jours par des noms
	if(day == 0) {day = 'Dimanche';}
	else if(day == 1) {day = 'Lundi';}
	else if(day == 2) {day = 'Mardi';}
	else if(day == 3) {day = 'Mercredi';}
	else if(day == 4) {day = 'Jeudi';}
	else if(day == 5) {day = 'Vendredi';}
	else if(day == 6) {day = 'Samedi';}
	
	if(dayNum == 1) {dayNum = '1er';} // Calendrier français => le 01/05/08 se dit le 1er mai 2018
	
    // On remplace les mois par des noms
	if(month == 0) {month = 'Janvier';}
	else if(month == 1) {month = 'Fevrier';}
	else if(month == 2) {month = 'Mars';}
	else if(month == 3) {month = 'Avril';}
	else if(month == 4) {month = 'Mai';}
	else if(month == 5) {month = 'Juin';}
	else if(month == 6) {month = 'Juillet';}
	else if(month == 7) {month = 'Août';}
	else if(month == 8) {month = 'Septembre';}
	else if(month == 9) {month = 'Octobre';}
	else if(month == 10) {month = 'Novembre';}
	else if(month == 11) {month = 'Décembre';}
	
	var currentDate = day + ' ' + dayNum + ' ' + month + ' ' + year; // La date au format "Lundi 18 Mai 2008
	
	$('.clock #date').html(currentDate); // Modifie la date affiché

	setTimeout(updateTime, 1*1000); // Dans 1 seconde, éxecuter la fonction updateTime()
}