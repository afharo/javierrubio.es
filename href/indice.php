<html>
    <head>
    	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    	<title>Indice</title>
		<script>
       /* var seccion="indice";
        var url="href/"+seccion+".html";
        
        if(window.location.href=="http://www.javierrubio.es/"+url||window.location.href=="http://javierrubio.es/"+url)
            location.href="http://www.javierrubio.es/#?"+seccion;*/
        </script>
    </head>
    
    <body>
    	<?php
        $url = $_SERVER['DOCUMENT_ROOT']."/href/";
		$handle = opendir($url);
		while ($file = readdir($handle)) {
			if($file!= "." && $file != ".." && $file!="Thumbs.db" && $file!="index.html" && $file!="indice.php"){
				$seccion = substr($file,0,-5);
				$nombre = ucfirst($seccion);
				if($seccion == "videos")
					$nombre = " V&iacute;deos ";
				if($seccion == "palmares")
					$nombre = " Palmar&eacute;s ";
				$html = $html."<a href='javascript:cargar(\"".$seccion."\")'> ".$nombre." </a><br><br>";
			}
		}
		echo $html;
        ?>
    </body>
</html>
