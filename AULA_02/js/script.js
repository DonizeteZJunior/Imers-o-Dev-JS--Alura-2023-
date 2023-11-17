function akinator(){
    var numeroSecreto = parseInt(Math.random() * 1000)+1;
    var tentativa = 0;

    while(chute != numeroSecreto || tentativa != 10){
        if(tentativa == 10){
            alert('Suas chances acabaram! \n'+
                'O número secreto era:'+numeroSecreto)
            break;
        }else{
            var chute = prompt('Digite um número entre 1 e 1000');
            tentativa++;
            if (chute == numeroSecreto){
                alert('Você acertou! Parabéns.')
                break;
            } else if(chute > numeroSecreto) {
                alert('Errou! O número secreto é menor que '+chute+'\n'+
                    'Tentativa: '+tentativa)
            } else if(chute < numeroSecreto) {
                alert('Errou! O número secreto é maior que '+chute+'\n'+
                    'Tentativa: '+tentativa)
            }
        }
    }
}