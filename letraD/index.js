function sorteio(){
    let sorteado= Math.random();
    let pessoaaleatoria = document.getElementById("result")

        if(sorteado<0.483) { 
            sorteado= Math.random();

        if(sorteado<0.167){
            pessoaaleatoria.innerHTML= 'Homem Idoso'
        }else{
            pessoaaleatoria.innerHTML= 'Homem Jovem'
            }

        } else {
            sorteado= Math.random();
        if(sorteado<0.167){
            pessoaaleatoria.innerHTML= 'Mulher Idosa'
        }else{
            pessoaaleatoria.innerHTML= 'Mulher Jovem'
            }
        }
    }