function NovoRelato(){
    document.querySelector(".novo_relato").style.display = "flex";    
}

function Cancelar(){
    document.querySelector(".novo_relato").style.display = "none";
    
    var titulo = document.getElementById("entrada_titulo").value = null;
    var texto = document.getElementById("entrada_corpo").value = null;
}

function EnviarRelato(){
    var titulo = document.getElementById("entrada_titulo").value;
    var texto = document.getElementById("entrada_corpo").value;
    var codinome = document.getElementById("entrada_codinome").value;

    var a_relato = document.createElement('a');
    var div_relato = document.createElement('div');

    var titulo_relato = document.createElement('h2');
    var node_titulo = document.createTextNode(titulo)
    var corpo_relato = document.createElement('p');
    var node_corpo = document.createTextNode(texto);
    var codinome_relato = document.createElement('h6');
    var node_codinome = document.createTextNode('Autor: ' + codinome);


    titulo_relato.appendChild(node_titulo);
    corpo_relato.appendChild(node_corpo);
    codinome_relato.appendChild(node_codinome);

    div_relato.appendChild(titulo_relato);
    div_relato.appendChild(corpo_relato);
    div_relato.appendChild(codinome_relato);
    a_relato.appendChild(div_relato);

    var onclick_Expandir = document.createAttribute("onclick");
    a_relato.setAttribute(onclick_Expandir);
    onclick_Expandir.value = "ExpandirRelato()";

    document.querySelector(".relato_conteudo").appendChild(a_relato);

    Cancelar();
}

function ExpandirRelato(){
    window.alert("FOI PORRA!");
}