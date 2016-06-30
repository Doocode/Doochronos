var listCards = [], cardId = 0;
var listColors = ['rgb(255,100,0)', 'rgb(85,170,0)', 'rgb(0,120,200)', 'rgb(70,70,80)'];
var listColors = ['rgb(255,100,0)', 'rgb(85,170,0)', 'rgb(0,120,200)', 'rgb(150,0,100)'];

$('html').click(function(e)
{
	if($('.menu').css('width')=='350px')
		showMenu(false);
	
	return true;
});

$('body').mousemove(function(e)
{
	var percent = ((e.pageX / parseInt($('body').css('width').split("px").join("")))*100);
	var percentString = '' + percent + '%';
	$('.listCards').scrollTo(percentString,0);
	
	return true;
});

function loadFinished() // Cette fonction est appelé au chargement de la page
{
	$('body').css('background','rgb(255,0,100)');
	$('.redirect').css('display','none');
	$('.app,.app .toolBar').css('display','inline-block');
	$('.app .toolBar').addClass('animated slideInUp');
	$('#appFind .clock').addClass('animated zoomIn');
	
	updateTime();
}

function showMenu(showRequested) // Pour afficher ou cacher le menu pour ajouter un item
{
	if(showRequested)
	{
		$('.menu').css('width','350px');
	}
	else
	{
		$('.menu').css('width','0px');
	}
}

function showPopup(popupName) // Pour afficher ou cacher le popup demandé
{
	if($('#popupNew' + popupName).css('display')=='block')
		$('#popupNew' + popupName).css('display','none');
	else
	{
		$('#popupNew' + popupName).css('display','block');
		$('.popupNew' + popupName + ' .form').animateCss('fadeInUp');
	}
}

function showTooltip(text) // Afficher les bulles d'infos
{
	if(text=='')
		$('.toolBar p').css('display','none');
	else
	{
		$('.toolBar p').css('display','inline-block');
		$('.toolBar p').html(text);
	}
}

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

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
	{
		hours = '0'+today.getHours(); // On rajoute un '0' au début : 07
	}
	if(minutes < 10) // De même pour les minutes
	{
		minutes = '0'+today.getMinutes(); // Même opération
	}

	var hours = hours + ':' + minutes; // L'heure au format
	
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
	
	var today = day + ' ' + dayNum + ' ' + month + ' ' + year;
	
	$('.clock p:first-child').html(today);

	setTimeout(updateTime, 1000);
}

function addNewTimer() // Pour ajouter un minuteur
{
	var name = $('#popupNewTimer input[type=text]').val();
	
	var hours = $('#popupNewTimer #hh').val();
	var minutes = $('#popupNewTimer #mm').val();
	var seconds = $('#popupNewTimer #ss').val();
	
	var alarm = true;
	
	var card = new Timer(name,hours,minutes,seconds,alarm);
	card.startTimer();
	
	updateView();
	showPopup('Timer');
}

function addNewChrono() // Pour ajouter un chronomètre
{
	var name = $('#popupNewChrono input[type=text]').val();
	
	var card = new Chrono(name,false);
	card.startChrono();
	
	updateView();
	showPopup('Chrono');
}

function addNewConvert() // Pour ajouter un convertisseur de temps
{
	var millennials = $('#popupNewConvert #millennials').val();
	var centuries = $('#popupNewConvert #centuries').val();
	var years = $('#popupNewConvert #years').val();
	var months = $('#popupNewConvert #months').val();
	var weeks = $('#popupNewConvert #weeks').val();
	var days = $('#popupNewConvert #days').val();
	var hours = $('#popupNewConvert #hh').val();
	var minutes = $('#popupNewConvert #mm').val();
	var seconds = $('#popupNewConvert #ss').val();
	
	var card = new Convert(millennials,centuries,years,months,weeks,days,hours,minutes,seconds);
	card.startConvert();
	
	updateView();
	showPopup('Convert');
}

function updateView() // Pour mettre à  jour l'affichage
{
	if($('.card').length == 0)
	{
		$('.listCards').css('display','none');
		$('.welcome').fadeIn();
	}
	else
	{
		$('.listCards').fadeIn();
		$('.welcome').css('display','none');
	}
}

function pauseCard(idCard) // Pour mettre en pause un minuteur
{
	listCards[parseInt(idCard)-1].pause();
}

function removeCard(idCard) // Pour mettre en pause un minuteur
{
	if(listCards[parseInt(idCard)-1].type() == 'timer' || listCards[parseInt(idCard)-1].type() == 'chrono')
	{
		pauseCard(idCard);
	}
	
	$('#'+idCard).remove();
	updateView();
}

function repriseTimer(idCard) // Pour mettre en pause un minuteur
{
	listCards[parseInt(idCard)-1].reprise();
}
