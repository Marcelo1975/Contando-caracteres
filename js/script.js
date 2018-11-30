$(document).on("keydown", "#cont", function(){
	var caractRest = 10;
	var caractDig = parseInt($(this).val().length);
	var caractRest = caractRest - caractDig;
	$(".carac").text(caractRest);
	
	if(caractRest === 0){
		alert("Você atingiu o número de caracteres permitidos, por favor, clique em ENVIAR");
		document.getElementById("enviar").focus();
	}
});

