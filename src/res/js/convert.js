// Définition de l'objet Convert
function Convert(n,mill,c,y,months,w,d,h,m,s)
{
	// On affecte les attributs
    this.name = n;
	this.type = 'convert';
    this.card = new Card(this.name, this.type); // On génère une carte
    this.id = this.card.id;
    this.initialTime = new TimePlus(mill,c,y,months,w,d,h,m,s);
	this.timeConverted = new TimePlus(mill,c,y,months,w,d,h,m,s);
    this.isExpanded = false;
	
    // On remplit la carte
    let icon = $('<img/>');
    icon.attr('src','res/img/convert.png');
    this.card.setContent($('<center/>').append(icon));
        
    // Ajout des actions du menu
    let id = this.id;
    let actEdit   = new Action('Modifier','res/img/config-icon.png');
    let actExpand = new Action('Agrandir','res/img/expand.png');
    let actRemove = new Action('Supprimer','res/img/close.png');
    actExpand.setFunction(function(){expandCard(id);});
    actRemove.setFunction(function(){removeCard(id);});
    this.card.addAction(actEdit,'edit');
    this.card.addAction(actExpand,'expand');
    this.card.addAction(actRemove,'');

	// On ajoute cet item dans le tableau "listCards"
	listCards.push(this);
	
	// Cette fonction sert à lancer la conversion
	this.startConvert = function()
	{
		this.timeout = setTimeout(function ()
		{
            // On remet le temps en place pour éviter d'avoir un cadran du type "hhhhh:mmm:ssssss" (h:m:s)
            this.timeConverted.update();

            this.updateText();

            // On choisi une couleur dans le tableau pour faire genre le compteur est allumé
            var i = this.id;
            while(i>=4)
                i -= 4;
            $('#'+this.id).css('background',listColors[i]);
		}.bind(this), 1000);
    };
	
    // La fonction expand permet d'agrandir/rétrecir la carte
	this.expand = function()
	{
        let card = this.card.object;
        if(this.isExpanded)
        {
            card.removeClass('expanded');
            $('#'+this.id+' .expand').removeClass('checked');
        }
        else
        {
            card.addClass('expanded');
            $('#'+this.id+' .listActs .expand').addClass('checked');
        }
        
		this.isExpanded = !this.isExpanded;
	};
	
	// La fonction updateText sert à  mettre à  jour l'affichage de la "carte" du convertisseur
	this.updateText = function()
	{        
        // Affichage des résultats du calcul
        let numbers = $('<div/>');
        numbers.addClass('numbers');
        numbers.append(genNumber('Millénaires',this.timeConverted.millennials));
        numbers.append(genNumber('Siècles',this.timeConverted.centuries));
        numbers.append(genNumber('Années',this.timeConverted.years));
        numbers.append(genNumber('Mois',this.timeConverted.months));
        numbers.append(genNumber('Semaines',this.timeConverted.weeks));
        numbers.append(genNumber('Jours',this.timeConverted.days));
        numbers.append(genNumber('Heures',this.timeConverted.hours));
        numbers.append(genNumber('Minutes',this.timeConverted.minutes));
        numbers.append(genNumber('Secondes',this.timeConverted.seconds));
        
        // Remplissage de la carte
        let card = this.card;
        let div = $('<div/>');
        div.append($('<h4/>').html(this.name));
        div.append(numbers);
        card.setContent(div);
        
        numbers.addClass('contains'+$('#'+this.id+' .numbers .number').length);
    };
}