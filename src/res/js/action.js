var Action = function(text, icon) { // Constructeur de Action
    // Attributs
    this.text = text; // Texte de l'action
    this.icon = icon; // Icone de l'action
    this.function;
};

Action.prototype = {
    // Cette fonction sert à actionner l'action
    activate : function(){
        if(typeof this.function == 'function')
            this.function();
        else
            console.log('[Erreur] L\'action "'+this.text+'" ne possède pas de fonction à activer.');
    },
    // Cette fonction sert à définir la fonction à activer
    setFunction : function(arg){
        this.function = arg;
        
        return this;
    }
};