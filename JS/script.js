var listaRelatos = [];

function NovoRelato(){
    document.querySelector(".novo_relato").style.display = "flex";    
}

function Cancelar(){
    document.querySelector(".novo_relato").style.display = "none";
    
    var titulo = document.getElementById("entrada_titulo").value = null;
    var texto = document.getElementById("entrada_corpo").value = null;
    var codinome = document.getElementById("entrada_codinome").value = null
}

function EnviarRelato(){
    var titulo = document.getElementById("entrada_titulo").value;
    var texto = document.getElementById("entrada_corpo").value;
    var codinome = document.getElementById("entrada_codinome").value;
    
    var contagem = listaRelatos.length;

    var a_relato = document.createElement('a');
    a_relato.setAttribute("class", "relato");
    a_relato.setAttribute("id", "relato_" + (contagem));
    a_relato.setAttribute("onclick", "ExpandirRelato("+(contagem)+")");

    var div_relato = document.createElement('div');
    div_relato.setAttribute("class", "div_relato_" + contagem)

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

    listaRelatos.push(a_relato);

    console.log(listaRelatos);
    console.log(a_relato);

    console.log(listaRelatos.length)

    document.querySelector(".relato_conteudo").appendChild(a_relato);
    
    Cancelar();
}

function ExpandirRelato(num){
    document.querySelector("div_relato_"+ (num)).style.height = "auto";
}