function calculo(){
    

    const sort = document.getElementById("numero-sorteado").value;
   

    const valorMin = parseFloat(sort);


    /* if= se 
    else = senão
    else if = senão se*/

    if(isNaN(valorMin)==true){ /* isNaN retorna verdadeiro qnd o valor não é um número*/
        document.getElementById("result").innerHTML = "Apenas Números"

        console.log()
    }
   
   else{
        document.getElementById("result").innerHTML="Maior "+Math.ceil
        (valorMin)+"<br/>Menor "+Math.floor(valorMin)
   }
}

// tentar usar a number.insinteger