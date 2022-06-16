function calculo(){
    const minimo = document.getElementById("minimo").value;
    const maximo = document.getElementById("maximo").value;
   
    const valorMin = parseInt(minimo);

    const valorMax =  parseInt(maximo);

    /* if= se 
    else = senão
    else if = senão se*/

    if(isNaN(valorMin)==true){ /* isNaN retorna verdadeiro qnd o valor não é um número*/
        document.getElementById("numero-sorteado").innerText = "Apenas Números"
    }
   else if(isNaN(valorMax)==true){
    document.getElementById("numero-sorteado").innerText = "Apenas Números"
   }
   else{
    const numerosorteado = Math.random()*(valorMax-valorMin+1)+valorMin
    document.getElementById("numero-sorteado").innerText = "Número Sorteado   "+Math.floor(numerosorteado)
   }
}