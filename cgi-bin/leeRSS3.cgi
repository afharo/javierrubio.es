#!/usr/bin/perl

use CGI qw(:standard);
use XML::Simple;
use LWP::Simple qw(get);

my $direccion = "http://picasaweb.google.com/data/feed/api/user/afharo/albumid/5463759380196058129?alt=rss&kind=photo&hl=es";

#Baja  fichero
	my $rdf = get($direccion);
	my $xml = XML::Simple->new();
	my $doc = $xml->XMLin($rdf);
	
	my $numero_elementos = $doc->{channel}->{'openSearch:totalResults'};
	
	my $salida = '<body style="text-align:justify;"> ';
						
	print header( -type => 'text/html', -charset => 'iso-8859-1' );
	
	for (my $i = 0; $i < $numero_elementos; $i++){
		my $dir = $doc->{channel}->{item}[$i]->{enclosure}->{url};
		my @ruta = split('/',$dir);
		my $imagen = substr($dir,0,index($dir,$ruta[-1]));
		$imagen .= 's144/'.$ruta[-1];
		$salida .= '<a href="javascript:parent.mostrarFoto( \''.$dir.'\' )" style="text-decoration:none;"><img height=70px src="'.$imagen.'" /></a>  ';
	}
	
	$salida = $salida.'</body>';
	print $salida;

