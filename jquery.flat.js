//library create in jquery
//by edinsoncs

$.fn.flat = function(color, a){
	var recept = color;
	var receptIn = a;
	var shadows;
	
	function inColor(select) {
		var colors = ['#E0E4CC','#D6DAC2','#7BB0A6','#92F22A',
						'#64DDBB','#7CEECE','#8F6F40','#6F532A','#523D1F','#A0B58D',
						'#A19C69','#FD5B03','#63393E','#3C3741','#8C7E51','#54573A',
						'#8C7E51','#54573A','#F04903','#FF7416','#F29B34',
						'#D33257','#3D8EB9','#71BA51','#FEC606','#E75926','#EB6361',
						'#EBBD63','#6C8784','#45362E','#87766C','#25373D','#CF000F',
						'#E3000E','#E6DCDB','#D2D7D3','#E7E7E7','#282830','#BADA55',
						'#1DABB8','#C82647','#FF6766','#60646D','#FFFFF7','#83D6DE',
						'#97CE68','#EB9532','#EE543A','#D8335B','#953163','#422E39',
						'#FACA9B','#FDD09F','#E7DF86','#C0BA78','#AAB69B','#9E906E',
						'#9684A3','#8870FF','#888888','#897FBA','#8870FF','#2C82C9',
						'#2CC990','#EEE657','#FCB941','#FC6042','#3E4651','#F1654C',
						'#00B5B5','#D4D4D4'];
		shadows = ['0 3px 0 #C3C7AE', '0 4px 0 #67C8AD', '0 4px 0 #64CEB0', '0 4px 0 #4C381B',

					'0 4px 0 #819270', '0 4px 0 #78744B', '0 4px 0 #B54406', '0 4px 0 #361E21', '0 4px 0 #26232A'];
		var inFind = select;

		if(inFind == 'flatuno'){
			var x =	colors[0];
			return x;
		}
		else if(inFind == 'flatdos'){
			var x = colors[1];
			return x;
		}
		else if(inFind == 'flat-tres'){
			var x = colors[5];
			return x;
		}
		else if(inFind == 'flat-cuatro') {
			var x = colors[6];
			return x;
		}
		else if(inFind == 'flat-cinco'){
			var x = colors[7];
			return x;
		}
		else if(inFind == 'flat-seis'){
			var x = colors[8];
			return x;
		}
		else if(inFind == 'flat-siete'){
			var x = colors[9];
			return x;
		}
		else if(inFind == 'flat-ocho'){
			var x = colors[10];
			return x;
		}
		else if(inFind == 'flat-nueve'){
			var x = colors[11];
			return x;
		}
		else if(inFind == 'flat-diez'){
			var x = colors[12];
			return x;
		}
		else if(inFind == 'flat-once'){
			var x = colors[13];
			return x;
		}

	}

	inColor();

	if(recept == 'flatuno') {
		this.css({
			'background': inColor('flatuno'),
			'box-shadow': shadows[0],
			'color':'white',
			'padding':'0.8em 1.3em',
			'text-decoration':'none',
			'outline': 'medium none'
		});
	}
	else if(recept == 'flatdos'){
		this.css({
			'background': inColor('flatdos'),
			'box-shadow': shadows[0],
			'color':'white',
			'padding':'0.8em 1.3em',
			'text-decoration':'none',
			'outline': 'medium none'
		});
	}
	else if(recept == 'flat-tres'){
		this.css({
			'background': inColor('flat-tres'),
			'box-shadow': shadows[1],
			'color':'white',
			'padding':'0.8em 1.3em',
			'text-decoration':'none',
			'outline': 'medium none'
		});
	}
	else if(recept == 'flat-cuatro'){
		this.css({
			'background': inColor('flat-tres'),
			'box-shadow': shadows[2],
			'color':'white',
			'padding':'0.8em 1.3em',
			'text-decoration':'none',
			'outline': 'medium none'
		});
	}
	else if(recept == 'flat-cinco'){
		this.css({
			'background': inColor('flat-cinco'),
			'box-shadow': shadows[3],
			'color':'white',
			'padding':'0.8em 1.3em',
			'text-decoration':'none',
			'outline': 'medium none'
		});
	}
	else if(recept == 'flat-seis') {
		this.css({
			'background': inColor('flat-seis'),
			'box-shadow': shadows[4],
			'color':'white',
			'padding':'0.8em 1.3em',
			'text-decoration':'none',
			'outline': 'medium none'
		});
	}
	else if(recept == 'flat-siete') {
		this.css({
			'background': inColor('flat-siete'),
			'box-shadow': shadows[4],
			'color':'white',
			'padding':'0.8em 1.3em',
			'text-decoration':'none',
			'outline': 'medium none'
		});
	}
	else if(recept == 'flat-ocho') {
		this.css({
			'background': inColor('flat-ocho'),
			'box-shadow': shadows[5],
			'color':'white',
			'padding':'0.8em 1.3em',
			'text-decoration':'none',
			'outline': 'medium none'
		});
	}
	else if(recept == 'flat-nueve') {
		this.css({
			'background': inColor('flat-nueve'),
			'box-shadow': shadows[6],
			'color':'white',
			'padding':'0.8em 1.3em',
			'text-decoration':'none',
			'outline': 'medium none'
		});
	}
	else if(recept == 'flat-diez') {
		this.css({
			'background': inColor('flat-diez'),
			'box-shadow': shadows[7],
			'color':'white',
			'padding':'0.8em 1.3em',
			'text-decoration':'none',
			'outline': 'medium none'
		});
	}
	else if(recept == 'flat-once'){
		this.css({
			'background': inColor('flat-once'),
			'box-shadow': shadows[8],
			'color':'white',
			'padding':'0.8em 1.3em',
			'text-decoration':'none',
			'outline': 'medium none'
		});
	}
}	