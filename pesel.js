function pesel(v) {
	
	var pesel = v,
		pesel = pesel.split(""),
		runningTotal = 0,
		control,
		decimal,
		sex;
	
	if (pesel.length !== 11) {
		console.log('error');
		errors.push('Pesel length');
		return false;
	}
	
	control = pesel.splice(-1, 1);
	control = control.toString();
	pesel[9] % 2 === 0 ? sex = 'f' : sex = 'm';
	
	$(pesel).each(function (k,v) {
		
		switch(k) {
			case 0 :
			case 4 :
			case 8 :
				runningTotal = runningTotal + (v * 1);
				break;
			case 1 :
			case 5 :
			case 9 :
				runningTotal = runningTotal + (v * 3);
				break;
			case 2 :
			case 6 :
				runningTotal = runningTotal + (v * 7);
				break;
			case 3 :
			case 7 :
				runningTotal = runningTotal + (v * 9);
				break;
		}
	});
	
	if (runningTotal % 10 === 0 && control == 0) {
		return true;
	} else if (runningTotal % 10 !== 0) {
		decimal = Math.floor(((runningTotal / 10) % 1) * 10);
		if (10 - decimal == control) {
			return true;
		} else {
			errors.push('Pesel number');
			return false;
		}
		
	} else {
		errors.push('Pesel number');
		return false;
	}	
}