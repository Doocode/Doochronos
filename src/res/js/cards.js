var Card = function(title, className) { // Constructeur de Card
    cardId++;
    
    // Attributs
    this.title = title; // Nom de la carte
    this.class = className; // Classe de la carte
    this.id = cardId; // Id de la carte
    this.object = $('<div/>'); // Objet HTML de la carte
    this.contener = $('<div/>'); // Conteneur de la carte
    this.menu = $('<div/>'); // Conteneur de la carte

    // Génération de la carte
    let card = this.object;
    card.addClass('card');
    card.addClass(className);
    card.attr('id',this.id);
    
    // Génération du conteneur
    let contener = this.contener;
    contener.addClass('ctn');
    
    var content = $('<div/>').addClass('content');
    content.append($('<div/>').addClass('align'));
    content.append(contener);
    card.append(content);
    
    // Génération du menu
    let menu = this.menu;
    menu.addClass('listActs');
    card.append(menu);
    
    $('.listCards').append(card);
    
    this.object = card;
};

Card.prototype = {
    // Cette fonction sert à changer le contenu de la carte
    setContent : function(arg){
        this.contener.html(arg);
        
        return this;
    },
    // Cette fonction sert à ajouter des actions dans le menu
    addAction : function(action, className){
        let item = $('<li/>');
        item.addClass(className);
        item.append($('<img/>').attr('src', action.icon));
        item.append($('<p/>').html(action.text));
        item.click(function(){action.activate();});
        this.menu.append(item);
        
        return this;
    }
};