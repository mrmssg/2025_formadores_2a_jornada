let nomeUsuario = "";
let elemento = document.querySelector("#nome-usuario");

while(nomeUsuario==""){
    nomeUsuario = prompt("Qual é o seu nome?");
}
if(nomeUsuario == null){
    elemento.textContent="seja bem-vindo!";
}else{
    elemento.textContent = nomeUsuario;
}

let linguagens =["JavaScript","Python","C","C++"]
console.log(linguagens[0]) // “JavaScript”
console.log(linguagens[1])  // “Python”
console.log(linguagens[2])  // “C”
console.log(linguagens[3])  // “C++”

const item = document.querySelector("#lista");
item.textContent =linguagens[1]


