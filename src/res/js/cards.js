var Card = function(title, className) { // Constructeur de SearchEngine
    cardId++;
    
    // Attributs
    this.title = title; // Nom de la carte
    this.class = className; // Classe de la carte
    this.id = cardId; // Id de la carte
    this.object = $('<div/>'); // Objet HTML de la carte

    // Génération du HTML
    let card = this.object;
    card.addClass('card');
    card.addClass(className);
    card.attr('id',this.id);
    $('.listCards').append(card);
    
    this.object = card;
};