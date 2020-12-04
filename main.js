alert("HOLA PERROS!!!");

alert("y a las Damas un besito :* ");

menu = parseInt(prompt(`--------Menu--------\n1. Sistema de costos por acceso\n2. Salir\n Opción: `));


switch(menu){
	case 1: costosAcceso(); break;
	case 2: break;
}

function costosAcceso(){
	let nombre,articulo,n,mes,a, elaboracionUnidades, terminanUnidades,unidadesProceso, porcentajeMateriaPrima,porcentajeManoObra,unidadesRestantes;
	let b, reciben, restanteProceso, porcentajeManoObra2, materiasPrimas1, materiasPrimas2, manoObra1,manoObra2, cif1,cif2,totala,totalb;
	let nombre1, nombre2;
    nombre = prompt(`Digite el nombre de la compañía: `);
	articulo = prompt(`Digite el nombre del articulo: `);
	
	nombre1 = prompt(`Digite el nombre del proceso numero 1`);
	nombre2 = prompt(`Digite el nombre del proceso numero 2`);
	
	
	mes = prompt(`Ingrese el mes: `);
	
	a = parseInt(prompt("Ingrese exactamente el numero del proceso\ndonde se realizará su elaboración: "));

	elaboracionUnidades = parseInt(prompt(`Estás en el proceso llamado ${nombre1}\nEscriba la elaboración de unidades: `));
	
	// Las unidades terminadas son las mismas que va a recibir mi otro proceso.

	terminanUnidades = parseInt(prompt(`Estás en el proceso llamado ${nombre1}\nEscriba cuantas unidades terminan: `));
	unidadesProceso = parseInt(prompt(`Estás en el proceso llamado  ${nombre1}\nEscriba cuantas unidades están en proceso: `));
	porcentajeMateriaPrima = parseFloat(prompt(`Estás en el proceso llamado  ${nombre1}\nEscriba cual es el porcentaje  en materia prima\nen punto decimal si es 100% escriba 1: `));
	porcentajeManoObra  = parseFloat(prompt(`Estás en el proceso llamado  ${nombre1}\nEscriba cual es el porcentaje en mano de obra y costos generales de fabricación\n en punto decimal si es 100% escriba 1: `));
	unidadesRestantes = parseInt(prompt(`Estás en el proceso llamado  ${nombre1}\nEscriba cuantas unidades restan: `));
	
	b = parseInt(prompt("Ingrese exactamente el numero del proceso\ndonde se recibirá: "));

	reciben = terminanUnidades;
	
	terminanUnidades =  parseInt(prompt(`Estás en el proceso llamado  ${nombre2}\nEscriba cuantas unidades terminan: `));
	restanteProceso = parseInt(prompt(`Estás en el proceso llamado ${nombre2}\nEscriba cuantas unidades restan: `));
	porcentajeManoObra2 = parseFloat(prompt(`Estás en el proceso llamado  ${nombre2}\nEscriba cual es el porcentaje en mano de obra y costos generales de fabricación\n en punto decimal si es 100% escriba 1: `));
	
	alert("A CONTINUACIÓN LOS COSTOS INCURRIDOS PAPUS...");
	
    materiasPrimas1 = parseFloat(prompt(`Estás en el proceso  ${nombre1}\n ingrese el valor de la materia prima:`));
    materiasPrimas2 = parseFloat(prompt(`Estás en el proceso  ${nombre2}\n ingrese el valor de la materia prima:`));
	manoObra1 = parseFloat(prompt(`Estás en el proceso ${nombre1}\n ingrese el valor de la mano de obra:`));
	manoObra2 = parseFloat(prompt(`Estás en el proceso  ${nombre2}\n ingrese el valor de la mano de obra:`));
	cif1 = parseFloat(prompt(`Estás en el proceso ${nombre1}\ningrese el valor de costos indirectos de fabricación:`));
	cif2 = parseFloat(prompt(`Estás en el proceso  ${nombre2}\ningrese el valor de costos indirectos de fabricación:`));
	
	totala = materiasPrimas1 + manoObra1 + cif1;
	totalb = materiasPrimas2 + manoObra2 + cif2;
	
	document.write("Holis...</br>");
	document.write("El total del proceso "+nombre1+" ");
	document.write("es "+totala+"</br> ");
	document.write("El total del proceso "+nombre2+" ");
	document.write("es "+totalb+"</br> ");
	document.write("</br>Sino te da igual que lo que tienes ahí lo hiciste mal...</br>");
	
	document.write("</br>CALCULANDO LA PRODUCCIÓN EQUIVALENTE...</br>");
	
	document.write("</br> MATERIA PRIMA </br>");
	
	document.write("</br> Unidades terminadas y transferidas "+reciben+" </br>");
	document.write("</br> Unidades en proceso "+unidadesProceso+" </br>");
	document.write("</br> Porcentaje de avance "+(porcentajeMateriaPrima*100)+"% </br>");
	document.write("</br> Unidades equivalentes "+(unidadesProceso*porcentajeMateriaPrima)+" </br>");
	document.write("</br> Unidades equivalentes a productos terminados "+(reciben+(unidadesProceso*porcentajeMateriaPrima))+" </br>");

	let costoump = materiasPrimas1 / (reciben+(unidadesProceso*porcentajeMateriaPrima));
	document.write("</br>Costo unitario de materia prima es:  "+costoump+" </br>");

	document.write("</br> MANO DE OBRA </br>");
	
	document.write("</br> Unidades terminadas y transferidas "+reciben+" </br>");
	document.write("</br> Unidades en proceso "+unidadesProceso+" </br>");
	document.write("</br> Porcentaje de avance "+(porcentajeManoObra*100)+"% </br>");
	document.write("</br> Unidades equivalentes "+(unidadesProceso*porcentajeManoObra)+" </br>");
	document.write("</br> Unidades equivalentes a productos terminados "+(reciben+(unidadesProceso*porcentajeManoObra))+" </br>");

	let costomo = manoObra1 / (reciben+(unidadesProceso*porcentajeManoObra));
	document.write("</br>Costo unitario de mano de obra es:  "+costomo+" </br>");

	document.write("</br> COSTOS INDIRECTOS DE FABRICACIÓN </br>");
	
	document.write("</br> Unidades terminadas y transferidas "+reciben+" </br>");
	document.write("</br> Unidades en proceso "+unidadesProceso+" </br>");
	document.write("</br> Porcentaje de avance "+(porcentajeManoObra*100)+"% </br>");
	document.write("</br> Unidades equivalentes "+(unidadesProceso*porcentajeManoObra)+" </br>");
	document.write("</br> Unidades equivalentes a productos terminados "+(reciben+(unidadesProceso*porcentajeManoObra))+" </br>");

	let costoucif = cif1 / (reciben+(unidadesProceso*porcentajeManoObra));
	document.write("</br>Costo unitario de CIF:  "+costoucif+" </br>");

	document.write("</br> COSTOS TOTAL DE PROCESO NUMERO UNO </br>");
	
	document.write("</br> Costo unitario de materia prima "+costoump+" </br>");
	document.write("</br> Costo unitario de mano de obra "+costomo+" </br>");
	document.write("</br> Costo unitario de costo indirecto de fabricación "+costoucif+" </br>");
	document.write("</br> Costo unitario total  "+(costoump+costomo+costoucif)+" </br>");
	
	let su = costoump+costomo+costoucif;
	
	document.write("</br> DISTRIBUCIÓN DE COSTOS </br>");
	
	document.write("</br> Unidades terminadas y transferidas "+(reciben*(costoump+costomo+costoucif))+" </br>");
	
	document.write("</br> UNIDADES EN PROCESO </br>");
	
	document.write("</br> Materias primas "+((unidadesProceso*porcentajeMateriaPrima)*costoump)+" </br>");
	document.write("</br> Mano de obra "+((unidadesProceso*porcentajeManoObra)*costomo)+" </br>");
	document.write("</br> Costo indirecto de fabricación "+((unidadesProceso*porcentajeManoObra)*costoucif)+" </br>");
	

	
	document.write("</br> ______________________SEGUNDO PROCESO__________________________ </br>");
	
	document.write("</br> MANO DE OBRA </br>");
	costoump=0;
	document.write("</br> Unidades terminadas y transferidas "+terminanUnidades+" </br>");
	document.write("</br> Unidades en proceso "+restanteProceso+" </br>");
	document.write("</br> Porcentaje de avance "+(porcentajeManoObra2*100)+"% </br>");
	document.write("</br> Unidades equivalentes "+(restanteProceso*porcentajeManoObra2)+" </br>");
	document.write("</br> Unidades equivalentes a productos terminados "+(terminanUnidades+(restanteProceso*porcentajeManoObra2))+" </br>");

	 costomo = manoObra2 / (terminanUnidades+(restanteProceso*porcentajeManoObra2));
	document.write("</br>Costo unitario de mano de obra es:  "+costomo+" </br>");

	document.write("</br> COSTOS INDIRECTOS DE FABRICACIÓN </br>");
	
	document.write("</br> Unidades terminadas y transferidas "+terminanUnidades+" </br>");
	document.write("</br> Unidades en proceso "+restanteProceso+" </br>");
	document.write("</br> Porcentaje de avance "+(porcentajeManoObra2*100)+"% </br>");
	document.write("</br> Unidades equivalentes "+(restanteProceso*porcentajeManoObra2)+" </br>");
	document.write("</br> Unidades equivalentes a productos terminados "+(terminanUnidades+(restanteProceso*porcentajeManoObra2))+" </br>");

	 costoucif = cif2 / (terminanUnidades+(restanteProceso*porcentajeManoObra2));
		document.write("</br>Costo unitario de CIF:  "+costoucif+" </br>");

	document.write("</br> COSTOS TOTAL DE PROCESO NUMERO DOS </br>");
	
	document.write("</br> Costo unitario de materia prima "+0+" </br>");
	document.write("</br> Costo unitario de mano de obra "+costomo+" </br>");
	document.write("</br> Costo unitario de costo indirecto de fabricación "+costoucif+" </br>");
	document.write("</br> Costo unitario total  "+(costomo+costoucif)+" </br>");
	document.write("</br> Costo unitario total de articulos terminados "+(su+(costoump+costomo+costoucif))+" </br>");

	document.write("</br> DISTRIBUCIÓN DE COSTOS </br>");
	
	document.write("</br> Unidades terminadas y transferidas "+(terminanUnidades*(su+(costomo+costoucif)))+" </br>");
	
	document.write("</br> UNIDADES EN PROCESO </br>");
	
	document.write("</br> Materias primas "+0+" </br>");
	document.write("</br> Mano de obra "+((restanteProceso*porcentajeManoObra2)*costomo)+" </br>");
	document.write("</br> Costo indirecto de fabricación "+((restanteProceso*porcentajeManoObra2)*costoucif)+" </br>");
	
	let _totalTotal = (terminanUnidades*(su+(costomo+costoucif)))+((restanteProceso*porcentajeManoObra2)*costomo)+((restanteProceso*porcentajeManoObra2)*costoucif);
	document.write("</br>Total es "+_totalTotal+" </br>");
	document.write("</br>El proceso anterior es "+(restanteProceso*su)+" </br>");
	_totalTotal += (restanteProceso*su);
	document.write("</br>Total es "+_totalTotal+" </br>");

	
	
 }