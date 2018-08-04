// Définition de l'objet Timer (pour le minuteur)
function Timer(n,h,m,s,a)
{
	// On incrémente "cardId" pour créer un identifiant pour cet objet
	cardId++;
	
	// On affecte les valeurs
    this.name = n;
	this.remainingTime = new Time(h,m,s);
	this.initialTime = new Time(h,m,s);
	this.elapsedTime = new Time(0,0,0);
    this.alarm = a;
    this.isExpanded = false;
    this.id = cardId;
	this.interval;
	
	// La fonction type sert à définir le type de l'objet
	this.type = function()
	{
		return 'timer';
    };
	
	// On remet le temps en place pour éviter d'avoir un cadran du genre "00:135:2048" (h:m:s)
	this.remainingTime.update();
	this.initialTime.update();
	
	// On prépare le code html pour l'affichage du temps sur une "carte"
	var html = '<div class="card timer" id="' + this.id + '"><center><img src="res/img/timer.png" /></center></div>';
	$(html).prependTo($('.listCards')); // On place le code de "html" dans ".listCards"
	
	// On ajoute cet item dans le tableau "listCards"
	listCards.push(this);
	
	// Cette fonction sert à lancer le minuteur et à le mettre à jour tout les 1 secondes
	this.startTimer = function()
	{
		this.interval = setInterval(function () {
			if(this.remainingTime.seconds==0 && this.remainingTime.minutes==0 && this.remainingTime.hours==0)
				this.stopTimer();
			else
			{
				// On enleve 1 seconde dans le temps restant et on ajoute 1 seconde dans le temps écoulé en prenant en compte les heures et minutes
				this.remainingTime.removeOneSecond();
				this.elapsedTime.addOneSecond();
				
				// On met à jour le texte de la carte
				this.updateText();
	
				// On choisi une couleur dans le tableau pour faire genre le compteur est allumé
				var i = this.id-1;
				while(i>=4)
					i -= 4;
				$('#'+this.id).css('background',listColors[i]);
				
				// On revérifie et on eteint si le temps s'est écoulé
				if(this.remainingTime.seconds==0 && this.remainingTime.minutes==0 && this.remainingTime.hours==0)
				{
					$('#'+this.id).addClass('finished');
					$('#'+this.id+' .pause').css('display','none');
					//alert('Le temps s\'est écoulé pour le minuteur "' + this.name + '".');
				}
			}
		}.bind(this), 1000);
    };
	
	// La fonction updateText sert à mettre à jour l'affichage de la "carte" du minuteur
	this.updateText = function()
	{
        checkExpand = ''; // C'est pour cocher ou non l'action Agrandir
        if(this.isExpanded) // Si la carte est agrandie, alors faire cocher l'action Agrandir
            checkExpand = 'checked';
        
		var html = '<div class="ctn"><h1>' + this.remainingTime.toString() + '</h1><h4>' + this.name + '</h4><table><tr><th>Temps initial</th><th>Durée écoulé</th></tr><tr><td>' + this.initialTime.toString() + '</td><td>' + this.elapsedTime.toString() + ' </td></tr></table></div><ul class="listActs"><li class="pause" onclick="pauseCard(' + this.id + '); "><img src="res/img/pause.png" /><p>Pause</p></li><li class="reprise" onclick="repriseTimer(' + this.id + ');"><img src="res/img/reprise.png" /><p>Reprendre</p></li><li class="edit"><img src="res/img/config-icon.png" /><p>Modifier</p></li><li class="expand ' + checkExpand + '" onclick="expandCard(' + this.id + ');"><img src="res/img/expand.png" /><p>Agrandir</p></li><li onclick="removeCard(' + this.id + ');"><img src="res/img/close.png" /><p>Supprimer</p></li></ul>';
		$('#'+this.id).html(html);
    };
	
    // La fonction stopTimer sert à arreter la boucle qui permet d'actualiser la carte à chaque seconde
	this.stopTimer = function()
	{
		clearInterval(this.interval);
	};
	   
    // La fonction pause permet de mettre en pause la carte
	this.pause = function()
	{
		$('#'+this.id).addClass('paused');
		$('#'+this.id+' .pause').css('display','none');
		$('#'+this.id+' .reprise').css('display','block');
		clearInterval(this.interval);
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
	
    // La fonction reprise permet de réactiver la carte si elle est en pause
	this.reprise = function()
	{
		$('#'+this.id).removeClass('paused');
		$('#'+this.id+' .pause').css('display','block');
		$('#'+this.id+' .reprise').css('display','none');
		this.startTimer();
	};
}