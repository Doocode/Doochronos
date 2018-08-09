// Définition de l'objet Timer (pour le minuteur)
function Timer(n,h,m,s,a)
{
	// On affecte les attributs
    this.name = n;
	this.type = 'timer';
    this.card = new Card(this.name, this.type); // On génère une carte
    this.id = this.card.id;
    this.remainingTime = new Time(h,m,s);
	this.initialTime = new Time(h,m,s);
	this.elapsedTime = new Time(0,0,0);
    this.alarm = a;
    this.isExpanded = false;
	this.interval;
	
    // On remplit la carte
    let icon = $('<img/>');
    icon.attr('src','res/img/timer.png');
    this.card.setContent($('<center/>').append(icon));
        
    // Ajout des actions du menu
    let id = this.id;
    let actRestart = new Action('Relancer','res/img/restart.png');
    let actPause   = new Action('Pause','res/img/pause.png');
    let actReprise = new Action('Reprise','res/img/reprise.png');
    let actEdit    = new Action('Modifier','res/img/config-icon.png');
    let actExpand  = new Action('Agrandir','res/img/expand.png');
    let actRemove  = new Action('Supprimer','res/img/close.png');
    actRestart.setFunction(function(){listCards[id].restart();});
    actPause.setFunction(function(){pauseCard(id);});
    actReprise.setFunction(function(){repriseTimer(id);});
    actExpand.setFunction(function(){expandCard(id);});
    actRemove.setFunction(function(){removeCard(id);});
    this.card.addAction(actRestart, 'restart');
    this.card.addAction(actPause,   'pause');
    this.card.addAction(actReprise, 'reprise');
    this.card.addAction(actEdit,    'edit');
    this.card.addAction(actExpand,  'expand');
    this.card.addAction(actRemove,  '');
	
	// On remet le temps en place pour éviter d'avoir un cadran du genre "00:135:2048" (h:m:s)
	this.remainingTime.update();
	this.initialTime.update();
	
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
				var i = this.id;
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
        // Mise à jour de l'affichage
        let name = $('<h4/>');
        let time = $('<h5/>');
        let div = $('<div/>');
        name.html(this.name);
        time.html(this.remainingTime.toString());
        div.append(name).append(time);
        
        let table = $('<table/>');
        let tr1 = $('<tr/>');
        let tr2 = $('<tr/>');
        let th1 = $('<th/>').html('Temps initial');
        let td1 = $('<td/>').html(this.initialTime.toString());
        let th2 = $('<th/>').html('Durée écoulé');
        let td2 = $('<td/>').html(this.elapsedTime.toString());
        tr1.append(th1).append(th2);
        tr2.append(td1).append(td2);
        table.append(tr1).append(tr2);
        div.append(table);
        
        this.card.setContent(div);
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
	   
    // La fonction restart permet de relancer le minuteur
	this.restart = function()
	{
		this.stopTimer();
	
        // On remplit la carte
        let icon = $('<img/>');
        icon.attr('src','res/img/timer.png');
        this.card.setContent($('<center/>').append(icon));
        
        // On réinitialise les attributs
        let h,m,s;
        h = this.initialTime.hours;
        m = this.initialTime.minutes;
        s = this.initialTime.seconds;
        this.remainingTime = new Time(h,m,s);
        this.elapsedTime = new Time(0,0,0);
        this.card.object.removeClass('finished');
        this.card.object.removeClass('paused');
        $('#'+this.id+' .reprise').css('display','none');
		$('#'+this.id+' .pause').css('display','block');
        
        this.startTimer();
	};
	
    // La fonction expand permet d'agrandir/rétrecir la carte
	this.expand = function()
	{
        this.card.expand();
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