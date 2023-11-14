function calculate(){
    var dollar = parseFloat(document.getElementById('dollar').value);
    var cotacaoDoDolar = 5.32;

    var valorEmReal = dollar * cotacaoDoDolar;
    valorEmReal = valorEmReal.toFixed(2);
    alert("R$" + valorEmReal);
}