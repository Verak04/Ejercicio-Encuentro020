//Generar un scrip que pida cinco numeros al usuario usando un bucle FOR normal.
//Almacena los numeros introducidos por el usuario en un array. 
//A continuacion usando un For que recorra el array, muestra un mensaje informando
//del resultado de multiplicar
let num = []
for (i = 1; i<6; i++) {
    num1 = prompt("Ingresar " + i + "ª numero:");
    num[i] = (Number = num1)
}
for (i = 1; i<6; i++) {
    num2 = (3 * num[i])
    document.writeln(num[i] + "x3=" + num2)
}