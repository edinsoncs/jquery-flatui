//library create in jquery
//by edinsoncs

$.fn.flat = function(color, a){
	var recept = color;
	var receptIn = a;
	function colorsFlats(hex) {
		var n = hex;
		var s = n;
		console.log(s);
	}
	function inColor() {
		colorsFlats({
			'Colors': [
						'#E0E4CC','#D6DAC2','#7BB0A6','#92F22A',
						'#64DDBB','#7CEECE','#8F6F40','#6F532A','#523D1F','#A0B58D',
						'#A19C69','#FD5B03','#63393E','#3C3741','#8C7E51','#54573A',
						'#54573A','#8C7E51','#54573A','#F04903','#FF7416','#F29B34',
						'#D33257','#3D8EB9','#71BA51','#FEC606','#E75926','#EB6361',
						'#EBBD63','#6C8784','#45362E','#87766C','#25373D','#CF000F',
						'#E3000E','#E6DCDB','#D2D7D3','#E7E7E7','#282830','#BADA55',
						'#1DABB8','#C82647','#FF6766','#60646D','#FFFFF7','#83D6DE',
						'#97CE68','#EB9532','#EE543A','#D8335B','#953163','#422E39',
						'#FACA9B','#FDD09F','#E7DF86','#C0BA78','#AAB69B','#9E906E',
						'#9684A3','#8870FF','#888888','#897FBA','#8870FF','#2C82C9',
						'#2CC990','#EEE657','#FCB941','#FC6042','#3E4651','#F1654C',
						'#00B5B5','#D4D4D4'
					  ]
		});
	}
	inColor();
	if(recept == 'red' || receptIn == 'a') {
		this.css({
			'background':'red',
			'color':'white',
			'padding':'0.8em 1.3em',
			'text-decoration':'none',
			'outline': 'medium none'
		});
	}
}	