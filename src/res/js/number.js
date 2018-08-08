var Number = function(title, number) { // Constructeur de Number
    let ctn = $('<span/>'); // Objet HTML de la carte
    ctn.addClass('number');
    ctn.append($('<p/>').html(number));
    ctn.append($('<h5/>').html(title));
    return ctn;
};

function genNumber(text,number)
{
    if(number>0)
        return new Number(text,number);
    else
        return;
}