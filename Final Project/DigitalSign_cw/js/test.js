

///////////////////////////
//Defaults and Vars
let def_with = 80;

///////////////////////////
//Main Interval
setInterval(() => {
	
	
	//calculate percentage for day
    let now = new Date();
	let startOfDay = new Date();
	startOfDay.setHours(0);
	startOfDay.setMinutes(0);
	startOfDay.setSeconds(0);
	startOfDay.setMilliseconds(0);
	let elapsedD = now - startOfDay;  //let elapsedD = now - startOfDay
	let dperc = elapsedD / 1000 / 86400;
	dperc = Math.round(dperc * 100000) / 1000;
	dpp.innerHTML = dperc + "%";
	dbar.style.width = def_with * dperc / 100 + "vw";
}, 1000); 




