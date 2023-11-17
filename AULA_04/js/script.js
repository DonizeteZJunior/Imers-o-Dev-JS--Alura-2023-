var listaFilmes = []
var contador = 0

function adicionarFilme(){
    var filmeInserido = document.getElementById('filme').value;
    var linkTrailer = document.getElementById('trailer').value;
    var elementoListaFilmes = document.getElementById('listaFilmes');

    listaFilmes.push('<a href='+linkTrailer+' target="_blank" > ' +
                        '<img src='+filmeInserido+' />'+ 
                     '</a>');

    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + listaFilmes[contador];

    document.getElementById('filme').value = '';
    document.getElementById('trailer').value = '';
    contador++;
}