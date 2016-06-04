//library create in jquery
//by edinsoncs

$.fn.flat = function(color, a){
	var recept = color;
	var receptIn = a;
	var shadows;
	
	function inColor(select) {
		var colors = ['#1abc9c','#2ecc71','#3498db','#a366bc',
						'#364c62','#f1c40f','#e67e22','#e74c3c','#1abc9c','#2ecc71', '#3498db', '#a366bc', '#364c62', '#f1c40f',
						'#e67e22', '#e74c3c'
						 ];
		shadows = ['0 5px 0 #19a287', '0 5px 0 #239e57','0 5px 0 #2b7cb3', '0 5px 0 #8b56a0', '0 5px 0 #28394a',

					'0 5px 0 #cea70c', '0 5px 0 #a25816', '0 4px 0 #B54406', '0 4px 0 #361E21', '0 4px 0 #26232A',

					'0 4px 0 #5C5231', ' 0 4px 0 #232516', '0 4px 0 #5E5536', '0 4px 0 #333521', '0 4px 0 #D14409',

					'0 4px 0 #D66214'	 ];

		var inFind = select;

		if(inFind == 'flatuno'){
			var x =	colors[0];
			return x;
		}
		else if(inFind == 'flatdos') {
			var x = colors[1];
			return x;
		}
		else if(inFind == 'flattres'){
			var x = colors[2];
			return x;
		}
		else if(inFind == 'flatcuatro'){
			var x = colors[3]
			return x;
		}
		else if(inFind == 'flatcinco'){
			var x = colors[4]
			return x;
		}
		else if(inFind == 'flatseis'){
			var x = colors[5]
			return x;
		}
		else if(inFind == 'flatsiete'){
			var x = colors[6]
			return x;
		}
		else if(inFind == 'flatocho'){
			var x = colors[7]
			return x;
		}
		else if(inFind == 'flat-t-dos'){
			var x = colors[8]
			return x
		}
		else if(inFind == 'flat-t-tres') {
			var x = colors[9]
			return x;
		}
		else if(inFind == 'flat-t-cuatro') {
			var x = colors[10]
			return x;
		}
		else if(inFind == 'flat-t-cinco') {
			var x = colors[11]
			return x;
		}
		else if(inFind == 'flat-t-six'){
			var x = colors[12]
			return x;
		}
		else if(inFind == 'flat-t-sevent'){
			var x = colors[13]
			return x;
		}

		else if(inFind == 'flat-t-eight') {
			var x = colors[14]
			return x;
		}

		else if(inFind == 'flat-t-nine'){
			var x = colors[15]
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
			'text-align': 'center',
			'outline': 'medium none'
		});
	}
	else if(recept == 'flatdos'){
		this.css({
			'background': inColor('flatdos'),
			'box-shadow': shadows[1],
			'color':'white',
			'padding':'0.8em 1.3em',
			'text-decoration':'none',
			'text-align': 'center',
			'outline': 'medium none'
		});
	}
	else if(recept == 'flattres'){
		this.css({
			'background': inColor('flattres'),
			'box-shadow': shadows[2],
			'color':'white',
			'padding':'0.8em 1.3em',
			'text-decoration':'none',
			'text-align':'center',
			'outline': 'medium none'
		});
	}
	else if(recept == 'flatcuatro'){
		this.css({
			'background': inColor('flatcuatro'),
			'box-shadow': shadows[3],
			'color':'white',
			'padding':'0.8em 1.3em',
			'text-decoration':'none',
			'text-align': 'center',
			'outline': 'medium none'
		});
	}
	else if(recept == 'flatcinco'){
		this.css({
			'background': inColor('flatcinco'),
			'box-shadow': shadows[4],
			'color':'white',
			'padding':'0.8em 1.3em',
			'text-decoration':'none',
			'text-align': 'center',
			'outline': 'medium none'
		});
	}
	else if(recept == 'flatseis'){
		this.css({
			'background': inColor('flatseis'),
			'box-shadow': shadows[5],
			'color':'white',
			'padding':'0.8em 1.3em',
			'text-decoration':'none',
			'text-align': 'center',
			'outline': 'medium none'
		});
	}

	else if(recept == 'flatsiete'){
		this.css({
			'background': inColor('flatsiete'),
			'box-shadow': shadows[6],
			'color':'white',
			'padding':'0.8em 1.3em',
			'text-decoration':'none',
			'text-align': 'center',
			'outline': 'medium none'
		});
	}

	else if(recept == 'flatocho'){
		this.css({
			'background': inColor('flatocho'),
			'box-shadow': shadows[7],
			'color':'white',
			'padding':'0.8em 1.3em',
			'text-decoration':'none',
			'text-align': 'center',
			'outline': 'medium none'
		});
	}

	else if(recept == 'flat-t-dos'){
		this.css({
			'background': inColor('flat-t-dos'),
			'color':'white',
			'padding':'0.8em 1.3em',
			'text-decoration':'none',
			'text-align': 'center',
			'outline': 'medium none'
		});
	}

	else if(recept == 'flat-t-tres'){
		this.css({
			'background': inColor('flat-t-tres'),
			'color':'white',
			'padding':'0.8em 1.3em',
			'text-decoration':'none',
			'text-align': 'center',
			'outline': 'medium none'
		});
	}

	else if(recept == 'flat-t-cuatro'){
		this.css({
			'background': inColor('flat-t-cuatro'),
			'color':'white',
			'padding':'0.8em 1.3em',
			'text-decoration':'none',
			'text-align': 'center',
			'outline': 'medium none'
		});
	}

	else if(recept == 'flat-t-cinco'){
		this.css({
			'background': inColor('flat-t-cinco'),
			'color':'white',
			'padding':'0.8em 1.3em',
			'text-decoration':'none',
			'text-align': 'center',
			'outline': 'medium none'
		});
	}

	else if(recept == 'flat-t-six'){
		this.css({
			'background': inColor('flat-t-six'),
			'color':'white',
			'padding':'0.8em 1.3em',
			'text-decoration':'none',
			'text-align': 'center',
			'outline': 'medium none'
		});
	}

	else if(recept == 'flat-t-sevent'){
		this.css({
			'background': inColor('flat-t-sevent'),
			'color':'white',
			'padding':'0.8em 1.3em',
			'text-decoration':'none',
			'text-align': 'center',
			'outline': 'medium none'
		});
	}

	else if(recept == 'flat-t-eight') {
		this.css({
			'background': inColor('flat-t-eight'),
			'color':'white',
			'padding':'0.8em 1.3em',
			'text-decoration':'none',
			'text-align': 'center',
			'outline': 'medium none'
		});
	}

	else if(recept == 'flat-t-nine'){
		this.css({
			'background': inColor('flat-t-nine'),
			'color':'white',
			'padding':'0.8em 1.3em',
			'text-decoration':'none',
			'text-align': 'center',
			'outline': 'medium none'
		});
	}
	
	
}	