let nomeUsuario = "";
let elemento = document.querySelector("#nome-do-usuario");

while (nomeUsuario =="") {
    nomeUsuario = prompt("Qual é o seu nome?");
}


if(nomeUsuario==null){
    elemento.textContent="seja muito bem-vindo!";
} else{
    elemento.textContent = nomeUsuario;
}