function calculo(){
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
   
    const media = (peso / (altura* altura));
    /* if= se 
    else = senão
    else if = senão se*/
    if(isNaN(media)==true){ /* isNaN retorna verdadeiro qnd o valor não é um número*/
        document.getElementById("media").innerText = "Apenas Números"
    }
    else if(media< 18.5){
        document.getElementById("media").innerText = `IMC = ${media}. Abaixo do peso`
    } else if(media >=18.5 && media >24.9){
        document.getElementById("media").innerText = `IMC = ${media}. peso normal`
    } else if(media >25 && media <29.9){
        document.getElementById("media").innerText = `IMC = ${media}. sobrepeso`
    }else if (media>=30){
        document.getElementById("media").innerText = `IMC = ${media}. obesidade`
    }else{
        document.getElementById("media").innerText ='ocorreu um erro'

    }


}
