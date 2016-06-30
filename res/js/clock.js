

function showTime() // Afficher l'heure en plein écran
{
	if($('.clock').css('left')=='0px')
		$('.clock').removeClass('fullScreen');
	else
		$('.clock').addClass('fullScreen');
}

function updateTime() // Pour mettre à jour la date et heure affichée
{
	var today = new Date;
	
	// HEURES
	var hours = today.getHours();
	var minutes = today.getMinutes();

	if(hours < 10) // Si l'hours est compris entre 0 et 9
		hours = '0'+today.getHours(); // On rajoute un '0' au début : 07
	if(minutes < 10) // De même pour les minutes
		minutes = '0'+today.getMinutes(); // Même opération

	var hours = hours + ':' + minutes; // L'heure au format 00:00
	
	$('.clock h1').html(hours);
	
	// DATE
	var day = today.getDay();
	var dayNum = today.getDate();
	var month = today.getMonth();
	var year = today.getFullYear();
	
	if(day == 0) {day = 'Dimanche';}
	else if(day == 1) {day = 'Lundi';}
	else if(day == 2) {day = 'Mardi';}
	else if(day == 3) {day = 'Mercredi';}
	else if(day == 4) {day = 'Jeudi';}
	else if(day == 5) {day = 'Vendredi';}
	else if(day == 6) {day = 'Samedi';}
	
	if(dayNum == 1) {dayNum = '1er';}
	
	if(month == 0) {month = 'Janvier';}
	else if(month == 1) {month = 'Fevrier';}
	else if(month == 2) {month = 'Mars';}
	else if(month == 3) {month = 'Avril';}
	else if(month == 4) {month = 'Mai';}
	else if(month == 5) {month = 'Juin';}
	else if(month == 6) {month = 'Juiller';}
	else if(month == 7) {month = 'Août';}
	else if(month == 8) {month = 'Septembre';}
	else if(month == 9) {month = 'Octobre';}
	else if(month == 10) {month = 'Novembre';}
	else if(month == 11) {month = 'Décembre';}
	
	var currentDate = day + ' ' + dayNum + ' ' + month + ' ' + year;
	
	$('.clock #date').html(currentDate);

	setTimeout(updateTime, 1000);
}