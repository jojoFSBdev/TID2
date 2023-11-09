function NovoRelato(){
    document.querySelector(".novo_relato").style.display = "flex";    
}

function Cancelar(){
    document.querySelector(".novo_relato").style.display = "none";
}

function EnviarRelato(){
    var titulo = document.getElementById("entrada_titulo").value;
    var texto = document.getElementById("entrada_corpo").value;

    var a_relato = document.createElement('a');
    var div_relato = document.createElement('div');

    var titulo_relato = document.createElement('h2');
    var node_titulo = document.createTextNode(titulo)
    var corpo_relato = document.createElement('textarea');
    var node_corpo = document.createTextNode(texto);


    titulo_relato.appendChild(node_titulo);
    corpo_relato.appendChild(node_corpo);

    div_relato.appendChild(titulo_relato);
    div_relato.appendChild(corpo_relato);
    a_relato.appendChild(div_relato);

    document.querySelector(".relato_conteudo").appendChild(a_relato)
}