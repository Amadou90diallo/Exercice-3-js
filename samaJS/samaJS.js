
window.addEventListener("keydown", maFonction, false);

function maFonction(key){
	let hauteur = 200;
	if(key.keyCode == "38"){
		document.getElementById('div_a_modifier').style.height = hauteur+"px";
		setTimeout(() => { document.getElementById('div_a_modifier').style.height = "100px"; }, 500);
	}
	
}