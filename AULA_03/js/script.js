var listaFilmes = ['https://m.media-amazon.com/images/M/MV5BMmY5ZGE4NmUtZWI4OS00ZWJmLWFjMzgtOWUyZjI4NDg3Y2E5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
                    'https://upload.wikimedia.org/wikipedia/pt/a/a6/The_Exorcist_1973.jpg',
                    'https://upload.wikimedia.org/wikipedia/pt/7/76/Di%C3%A1rios_de_Motocicleta.jpg',
                    'https://m.media-amazon.com/images/I/91y3Nsqp2zL._AC_UF1000,1000_QL80_.jpg',
                    'https://m.media-amazon.com/images/M/MV5BMTU5NjY4OTM3OV5BMl5BanBnXkFtZTgwNDg5NDM5NjM@._V1_.jpg'];

for(var i=0; i < listaFilmes.length; i++){
    document.write('<img src='+listaFilmes[i]+' />');
}