var numeroSecreto = parseInt(Math.random() * 1001);
var tentativa = 0;

while(chute != numeroSecreto || tentativa != 10){
    if(tentativa == 10){
        alert('Suas chances acabaram! \n'+
              'O número secreto era:'+numeroSecreto)
        break;
    }else{
        var chute = prompt('Digite um número entre 0 e 1000');
        tentativa++;
        if (chute == numeroSecreto){
            alert('Você acertou! Parabéns.')
        } else if(chute > numeroSecreto) {
            alert('Errou! O número secreto é menor que '+chute+'\n'+
                'Tentativa: '+tentativa)
        } else if(chute < numeroSecreto) {
            alert('Errou! O número secreto é maior que '+chute+'\n'+
                'Tentativa: '+tentativa)
        }
    }
}