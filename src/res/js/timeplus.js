// Définition de l'objet Time (pour avoir le temps depuis les secondes jusqu'à les millenaires)
function TimePlus(mill,c,y,months,w,d,h,m,s)
{
    this.millennials = mill;
    this.centuries = c;
    this.years = y;
    this.months = months;
    this.weeks = w;
    this.days = d;
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
		
		return this.millennials + ' millénaires ' + this.centuries + ' siècles ' + this.years + ' années, ' + this.months + ' mois ' + this.weeks + ' semaines ' + this.days + ' jours, ' + strHours + ':' + strMinutes + ':' + strSeconds;
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
		while (this.hours>=24)
		{
			this.hours -= 24;
			this.days++;
		}
		while (this.days>=7)
		{
			this.days -= 7;
			this.weeks++;
		}
		while (this.weeks>=4)
		{
			this.weeks -= 4;
			this.months++;
		}
		while (this.months>=12)
		{
			this.months -= 12;
			this.years++;
		}
		while (this.years>=100)
		{
			this.years -= 100;
			this.centuries++;
		}
		while (this.centuries>=10)
		{
			this.centuries -= 10;
			this.millennials++;
		}
	};
}