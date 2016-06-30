//Motors
if(localStorage['logoMotor']!='')
{
	$('.selectMotor img').attr('src',localStorage['logoMotor']);
	$('.selectMotor span').html(localStorage['titleMotor']);
	
	if(localStorage['titleMotor']=='')
		$('.selectMotor span').html('Aucun moteur');
}

//Colors
$('#editBgForm .viewer').css('background',localStorage['bgColorForm']);
$('#editBgList .viewer').css('background',localStorage['bgColorList']);
$('#previewBgForm p').css('background',localStorage['bgColorForm']);
$('#previewBgList p').css('background',localStorage['bgColorList']);
var formColor = getColors(localStorage['bgColorForm']);
$('#editBgForm .red input').val(formColor[0]);
$('#editBgForm .green input').val(formColor[1]);
$('#editBgForm .blue input').val(formColor[2]);
var listColor = getColors(localStorage['bgColorList']);
$('#editBgList .red input').val(listColor[0]);
$('#editBgList .green input').val(listColor[1]);
$('#editBgList .blue input').val(listColor[2]);
var currentView;

//ViewLight
$('#' + localStorage['display']).attr('checked','checked');
$('#' + localStorage['format']).attr('checked','checked');

$('body').click(function(e)
{
	spinClick = false;
	return true;
});

function resizeEvent()
{
	if(parseInt($('body').css('width').split("px").join(""))>1000)
	{
		$('#editBgForm').css('display','block');
		$('#editBgList').css('display','block');
	}
	else
	{
		$('#editBgForm').css('display','none');
		$('#editBgList').css('display','none');
		
		if(currentView!='')
			$(currentView).css('display','block');
	}
}

function reset()
{
	// Moteurs de recherche
	localStorage.removeItem("firstUrl");
	localStorage.removeItem("lastUrl");
	localStorage.removeItem("logoMotor");
	localStorage.removeItem("titleMotor");
	
	// Themes
	localStorage.removeItem("bgColorForm");
	localStorage.removeItem("bgColorList");
	
	// Affichage
	localStorage.removeItem("display");
	localStorage.removeItem("format");
	
	// Redirection
	document.location.href='index.php';
}

function showEditor(editor)
{
	if($(editor).css('display')=='none')
	{
		currentView = editor;
		$(editor).slideDown();
	}
	else
	{
		currentView = '';
		$(editor).slideUp();
	}
}

function getColors(color)
{
	var rgbColor = color.replace('rgb(','');
	rgbColor = rgbColor.replace(')','');
	return rgbColor.split(',');
}

function updateColor(object)
{
	var newColor, r, g, b, editor, preview, localName;
	if(object=='bgForm')
	{
		editor = '#editBgForm';
		preview = '#previewBgForm';
		localName = 'bgColorForm';
	}
	else if(object=='bgList')
	{
		editor = '#editBgList';
		preview = '#previewBgList';
		localName = 'bgColorList';
	}
	
	r = $(editor + ' .red input').val();
	g = $(editor + ' .green input').val();
	b = $(editor + ' .blue input').val();
	
	newColor = 'rgb(' + r + ',' + g + ',' + b + ')';
	
	// Saving
	localStorage[localName] = newColor;
	
	// Preview
	$(editor+' .viewer').css('background',localStorage[localName]);
	$(preview+' p').css('background',localStorage[localName]);
}

function setColor(object,color)
{
	var localName,editor,preview;
	if(object=='bgForm')
	{
		editor = '#editBgForm';
		preview = '#previewBgForm';
		localName = 'bgColorForm';
	}
	else if(object=='bgList')
	{
		editor = '#editBgList';
		preview = '#previewBgList';
		localName = 'bgColorList';
	}
	
	// Saving
	localStorage[localName] = color;
	
	// Preview
	$(editor+' .viewer').css('background',localStorage[localName]);
	$(preview+' p').css('background',localStorage[localName]);
	
	var arrayColor = getColors(color);
	$(editor+' .red input').val(arrayColor[0]);
	$(editor+' .green input').val(arrayColor[1]);
	$(editor+' .blue input').val(arrayColor[2]);
}

function showMotors()
{
	if($('.motors').css('display')=='none')
	{
		$('.motors').css('display','block');
		$('body').css('overflow','hidden');
	}
	else
	{
		$('.motors').css('display','none');
		$('body').css('overflow','auto');
	}
}

function setMotor(first,last,icon,title)
{
	// Setting motors
	localStorage['firstUrl'] = first;
	localStorage['lastUrl'] = last;
	localStorage['logoMotor'] = icon;
	localStorage['titleMotor'] = title;
	
	// Show new motor
	$('.selectMotor img').attr('src',localStorage['logoMotor']);
	
	if(title!='')
		$('.selectMotor span').html(localStorage['titleMotor']);
	else
		$('.selectMotor span').html('Aucun moteur');
	
	showMotors();
}

function setViewMode(radioName)
{
	var value = $('input[name=' + radioName + ']:checked').attr('id');
	
	if(radioName=='taille')
		localStorage['display'] = value;
	if(radioName=='forme')
		localStorage['format'] = value;
}