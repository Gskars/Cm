function Converter() {
    // esse document se refere ao HTML//
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
    //Retorna um número em decimal//
  
    var valorEmReal = valorEmDolarNumerico * 5;
  
    console.log(valorEmReal);
    // pegando o elemento doH HTML, com ID valorElemento//
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real será em R$" + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  