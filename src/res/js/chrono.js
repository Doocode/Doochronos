// Définition de l'objet Chrono
function Chrono(n,a)
{
	// On incrémente "cardId" pour créer un identifiant pour cet objet
	cardId++;
	
	// On affecte les valeurs
    this.name = n;
	this.elapsedTime = new Time(0,0,0);
    this.alarm = a;
    this.isExpanded = false;
    this.id = cardId;
	this.interval;
	
	// La fonction type sert à définir le type de l'objet
	this.type = function()
	{
		return 'chrono';
    };
	
	// On prépare le code html pour l'affichage du temps sur une "carte"
	var html = '<div class="card chrono" id="' + this.id + '"><center><img src="res/img/chrono.png" /></center></div>';
	$(html).prependTo($('.listCards')); // On place le code de "html" dans ".listCards"
	
	// On ajoute cet item dans le tableau "listCards"
	listCards.push(this);
	
	// Cette fonction sert à lancer le chrono et à le mettre à jour tout les 1 secondes
	this.startChrono = function()
	{
		this.interval = setInterval(function ()
		{
			// On ajoute 1 seconde dans le temps écoulé en prenant en compte les heures et minutes
			this.elapsedTime.addOneSecond();
			
			// On met à jour le texte de la carte
			this.updateText();

			// On choisi une couleur dans le tableau pour faire genre le compteur est allumé
			var i = this.id-1;
			while(i>=4)
				i -= 4;
			$('#'+this.id).css('background',listColors[i]);
		}.bind(this), 1000);
    };
	
	// La fonction pause permet de mettre en pause la carte
	this.pause = function()
	{
		$('#'+this.id).addClass('paused');
		$('#'+this.id+' .pause').css('display','none');
		$('#'+this.id+' .reprise').css('display','block');
		clearInterval(this.interval);
	};
	
    // La fonction reprise permet de réactiver la carte si elle est en pause
	this.reprise = function()
	{
		$('#'+this.id).removeClass('paused');
		$('#'+this.id+' .pause').css('display','block');
		$('#'+this.id+' .reprise').css('display','none');
		this.startChrono();
	};
	
    // La fonction expand permet d'agrandir/rétrecir la carte
	this.expand = function()
	{
        if(this.isExpanded)
        {
            $('#'+this.id).removeClass('expanded');
            $('#'+this.id+' .expand').removeClass('checked');
        }
        else
        {
            $('#'+this.id).addClass('expanded');
            $('#'+this.id+' .listActs .expand').addClass('checked');
        }
        
		this.isExpanded = !this.isExpanded;
	};
	
	// La fonction updateText sert à  mettre à  jour l'affichage de la "carte" du chrono
	this.updateText = function()
	{
		checkExpand = ''; // C'est pour cocher ou non l'action Agrandir
        if(this.isExpanded) // Si la carte est agrandie, alors faire cocher l'action Agrandir
            checkExpand = 'checked';
        
		var html = '<div class="ctn"><h1>' + this.elapsedTime.toString() + '</h1><h4>' + this.name + '</h4></div><ul class="listActs"><li class="pause" onclick="pauseCard(' + this.id + '); "><img src="res/img/pause.png" /><p>Pause</p></li><li class="reprise" onclick="repriseTimer(' + this.id + ');"><img src="res/img/reprise.png" /><p>Reprendre</p></li><li class="edit"><img src="res/img/config-icon.png" /><p>Modifier</p></li><li class="expand ' + checkExpand + '" onclick="expandCard(' + this.id + ');"><img src="res/img/expand.png" /><p>Agrandir</p></li><li onclick="removeCard(' + this.id + ');"><img src="res/img/close.png" /><p>Supprimer</p></li></ul>';
		$('#'+this.id).html(html);
    };
}