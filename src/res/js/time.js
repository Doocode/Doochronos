// Définition de l'objet Time (pour avoir le temps depuis les secondes jusqu'à les heures)
function Time(h,m,s)
{
    this.hours = h;
    this.minutes = m;
    this.seconds = s;
	
	// Cette fonction sert à obtenir le temps sous la forme 00:00:00 plutôt que 00:0:0 par exemple
	this.toString = function()
	{
		var strHours = this.hours, strMinutes = this.minutes, strSeconds = this.seconds;
		
		if(strHours<10)
			strHours='0'+strHours;
		if(strMinutes<10)
			strMinutes='0'+strMinutes;
		if(strSeconds<10)
			strSeconds='0'+strSeconds;
		
		return strHours + ':' + strMinutes + ':' + strSeconds;
	};
	
	// Cette fonction sert à remettre le temps sous la forme 24:59:59 pour éviter d'avoir un cadran du genre "00:135:2048" (h:m:s)
	this.update = function()
	{
		while (this.seconds>=60)
		{
			this.seconds -= 60;
			this.minutes++;
		}
		while (this.minutes>=60)
		{
			this.minutes -= 60;
			this.hours++;
		}
	};
	
	// Cette fonction sert à avancer d'une seconde
	this.addOneSecond = function()
	{
		if(this.seconds<59)
			this.seconds++;
		else if(this.minutes<59)
		{
			this.minutes++;
			this.seconds = 0;
		}
		else if(this.hours<59)
		{
			this.hours++;
			this.minutes = 0;
			this.seconds = 0;
		}
	};
	
	// Cette fonction sert à enleve une seconde
	this.removeOneSecond = function()
	{
		if(this.seconds>0)
			this.seconds--;
		else if(this.minutes>0)
		{
			this.minutes--;
			this.seconds = 59;
		}
		else if(this.hours>0)
		{
			this.hours--;
			this.minutes = 59;
			this.seconds = 59;
		}
	};
}