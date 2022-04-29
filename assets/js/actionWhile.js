//Suma de cifras.	
//Ingresar un número de cualquier cifra y mostrar, 
//sus cifras invertidas.
let cifra = prompt("Ingresar un numero de mas de 2 cifras:");
document.writeln("<br>El numero ingresado es:</br>"+ cifra);
document.writeln("<br>Sus cifras invertidas son:</br>");
let String1 = cifra;
let cont = 0;
num = cifra.length-1;
while (cont < cifra.length) {
    document.write(String1[num--]);
    cont++;
}
