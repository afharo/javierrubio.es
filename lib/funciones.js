function temporada(temp){
	$("#temporada"+temp).slideToggle("slow");
	if($("#signo"+temp).html()=="[+]")
		$("#signo"+temp).html("[-]");
	else
		$("#signo"+temp).html("[+]");
}

function entrar(seccion){
	$("#entrar").hide();
	cargar(seccion);
	if(navigator.appName.indexOf("Explorer")==-1)
		$("#contenedor").show(1000);
	else
		$("#contenedor").show();
	
	$("#indice").load("href/indice.php");
	$("#indice").fadeIn(1000);
}

function cambiar_titulo(seccion){
	titulo="Javier Rubio";
	nombre = seccion.substring(0,1).toUpperCase() + seccion.substring(1);
	document.title=titulo + " - " + nombre;
}

function cargar(seccion){
	$("#contenido").html("<center><img src='images/cargando.gif' /></center>");
	
	url="href/"+seccion+".html";
	$("#contenido").load(url, function(response, status, xhr) {
		if (status == "error") {
    		cerrar();}});
	window.location.href="#?"+seccion;
	if(navigator.appName.indexOf("Explorer")==-1)
		cambiar_titulo(seccion);
	else
		setTimeout('cambiar_titulo(seccion);',1000);
}

function cerrar(){
	if(navigator.appName.indexOf("Explorer")==-1)
		$("#contenedor").hide(1000);
	else
		$("#contenedor").hide();
	$("#indice").fadeOut(1000);
	window.location.href="#";
	setTimeout('$("#entrar").fadeIn();',1004);
	document.title="Javier Rubio";
}

function reproducir(video){
	url = "http://jrubio.alejandrofh.es/"+video+".flv";
	$("#preplayer").fadeIn(1000);
	play(url);
}

function play(url){
	flashembed("player", "http://releases.flowplayer.org/swf/flowplayer-3.1.5.swf", {config: { 
    clip:url, 
    plugins: { 
        controlbar:null         
    }}});
}

function cerrarVideo(){
	$("#player").html("<center><img src='images/cargando.gif' /></center>");
	$("#preplayer").hide();
}

function cerrarFoto(){
	$("#foto").html("<center><img src='images/cargando.gif' /></center>");
	$("#prefoto").hide();
}

function presentacion(){
	$("#foto").html('<embed type="application/x-shockwave-flash" src="http://picasaweb.google.com/s/c/bin/slideshow.swf" width="600" height="400" flashvars="host=picasaweb.google.com&hl=es&feat=flashalbum&RGB=0x000000&feed=http%3A%2F%2Fpicasaweb.google.com%2Fdata%2Ffeed%2Fapi%2Fuser%2Fafharo%2Falbumid%2F5463759380196058129%3Falt%3Drss%26kind%3Dphoto%26hl%3Des" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>');
	$("#prefoto").fadeIn(1000);
}

function mostrarFoto($url){
	$("#foto").html('<img src='+$url+' height="400px" />');
	$("#prefoto").fadeIn(1000);
}