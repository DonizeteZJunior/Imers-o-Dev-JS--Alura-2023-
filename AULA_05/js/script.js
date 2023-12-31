let jogadores = [
    {
        nome:'Paulo',
        vitoria:0,
        empate:0,
        derrota:0,
        pontos:0
    },
    {
        nome:'Rafa',
        vitoria:0,
        empate:0,
        derrota:0,
        pontos:0
    },
    {
        nome:'Gui',
        vitoria:0,
        empate:0,
        derrota:0,
        pontos:0
    },
    {
        nome:'Renato',
        vitoria:0,
        empate:0,
        derrota:0,
        pontos:0
    }
]

function init(){
    var tabela = document.getElementById('tabelaJogadores');
    tabela.innerHTML = '';
    for(var i = 0; jogadores.length > i; i++){
        var jogador = jogadores[i]
        tabela.innerHTML = tabela.innerHTML + 
                        `<tr>
                            <td>${jogador.nome}</td>
                            <td>${jogador.vitoria}</td>
                            <td>${jogador.empate}</td>
                            <td>${jogador.derrota}</td>
                            <td>${jogador.pontos}</td>
                            <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
                            <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
                            <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
                        </tr>`;
    }
}

function adicionarVitoria(i){
    console.log(i);
    var jogador = jogadores[i];
    jogador.vitoria++;
    jogador.pontos = jogador.pontos + 3;
    init();
}

function adicionarEmpate(i){
    var jogador = jogadores[i];
    jogador.empate++;
    jogador.pontos = jogador.pontos + 1;
    init();
}

function adicionarDerrota(i){
    var jogador = jogadores[i];
    jogador.derrota++;
    init(); 
}

init();