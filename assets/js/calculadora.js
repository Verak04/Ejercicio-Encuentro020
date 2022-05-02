let resul = 0

for (i = 1; i < 11; i++) {
    document.write("Multiplicacion x" + i +": " )
    for (j = 1; j < 11; j++){
        resul = (i * j);
        document.write( i + "x" + j + "=" + resul + " " );
    }
    document.write("<br> </br>");
}