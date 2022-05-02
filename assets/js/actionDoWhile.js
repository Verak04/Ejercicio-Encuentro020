
num4 = prompt("Ingrese un numero entero:");
let valor = num4
document.writeln("<br>Numero ingresado: </br>" + valor);
let cont1 = 0;
let suma = 0;
do {
    cont1++;
    suma = (suma + cont1);
} while (cont1 < num4);
document.write("<br>La suma de ellos es: </br>" + suma)
