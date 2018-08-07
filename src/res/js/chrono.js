// Définition de l'objet Chrono
function Chrono(n,a)
{	
	// On affecte les attributs
    this.name = n;
	this.type = 'chrono';
    this.card = new Card(this.name, this.type); // On génère une carte
    this.id = this.card.id;
	this.elapsedTime = new Time(0,0,0);
    this.alarm = a;
    this.isExpanded = false;
	this.interval;
	
    // On remplit la carte
    let icon = $('<img/>');
    icon.attr('src','res/img/chrono.png');
    this.card.setContent($('<center/>').append(icon));
        
    // Ajout des actions du menu
    let id = this.id;
    let actPause   = new Action('Pause','res/img/pause.png');
    let actReprise = new Action('Reprise','res/img/reprise.png');
    let actEdit    = new Action('Modifier','res/img/config-icon.png');
    let actExpand  = new Action('Agrandir','res/img/expand.png');
    let actRemove  = new Action('Supprimer','res/img/close.png');
    actPause.setFunction(function(){pauseCard(id);});
    actReprise.setFunction(function(){repriseTimer(id);});
    actExpand.setFunction(function(){expandCard(id);});
    actRemove.setFunction(function(){removeCard(id);});
    this.card.addAction(actPause,   'pause');
    this.card.addAction(actReprise, 'reprise');
    this.card.addAction(actEdit,    'edit');
    this.card.addAction(actExpand,  'expand');
    this.card.addAction(actRemove,  '');

	listCards.push(this); // On ajoute cet item dans le tableau "listCards"
	
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
			var i = this.id;
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
        // Mise à jour de l'affichage
        let name = $('<h4/>');
        let time = $('<h5/>');
        let div = $('<div/>');
        name.html(this.name);
        time.html(this.elapsedTime.toString());
        div.append(name).append(time);
        this.card.setContent(div);
    };
}