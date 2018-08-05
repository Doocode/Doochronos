// Définition de l'objet Convert
function Convert(mill,c,y,months,w,d,h,m,s)
{
	// On affecte les attributs
    this.name = '';
	this.type = 'convert';
    this.card = new Card(this.name, this.type); // On génère une carte
    this.id = this.card.id;
    this.initialTime = new TimePlus(mill,c,y,months,w,d,h,m,s);
	this.timeConverted = new TimePlus(mill,c,y,months,w,d,h,m,s);
    this.isExpanded = false;
	
    // On remplit la carte
    let icon = $('<img/>');
    icon.attr('src','res/img/convert.png');
    this.card.object.append($('<center/>').append(icon));

	// On ajoute cet item dans le tableau "listCards"
	listCards.push(this);
	
	// Cette fonction sert à lancer la conversion
	this.startConvert = function()
	{
		// On remet le temps en place pour éviter d'avoir un cadran du genre "00:135:2048" (h:m:s)
		this.timeConverted.update();
	
		this.updateText();
	
		// On choisi une couleur dans le tableau pour faire genre le compteur est allumé
		var i = this.id;
		while(i>=4)
			i -= 4;
		$('#'+this.id).css('background',listColors[i]);
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
	
	// La fonction updateText sert à  mettre à  jour l'affichage de la "carte" du convertisseur
	this.updateText = function()
	{
		checkExpand = ''; // C'est pour cocher ou non l'action Agrandir
        if(this.isExpanded) // Si la carte est agrandie, alors faire cocher l'action Agrandir
            checkExpand = 'checked';
        
		var html = '<div class="ctn"><table><tr><th>Millénaires</th><th>Siècles</th><th>Années</th></tr><tr><td>' + this.timeConverted.millennials + '</td><td>' + this.timeConverted.centuries + '</td><td>' + this.timeConverted.years + '</td></tr><tr><th>Mois</th><th>Semaines</th><th>Jours</th></tr><tr><td>' + this.timeConverted.months + '</td><td>' + this.timeConverted.weeks + '</td><td>' + this.timeConverted.days + '</td></tr><tr><th>Heures</th><th>Minutes</th><th>Secondes</th></tr><tr><td>' + this.timeConverted.hours + '</td><td>' + this.timeConverted.minutes + '</td><td>' + this.timeConverted.seconds + '</td></tr><tr><th colspan="3" class="lastRow">Temps initial</th></tr><tr><td colspan="3">' + this.initialTime.toString() + '</td></tr></table></div><ul class="listActs"><li class="edit"><img src="res/img/config-icon.png" /><p>Modifier</p></li><li class="expand ' + checkExpand + '" onclick="expandCard(' + this.id + ');"><img src="res/img/expand.png" /><p>Agrandir</p></li><li onclick="removeCard(' + this.id + ');"><img src="res/img/close.png" /><p>Supprimer</p></li></ul>';
		$('#'+this.id).html(html);
    };
}