let h1 = document.querySelector("h1");
let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let confirmEmail = document.querySelector("#confirmEmail");
let senha = document.querySelector("#senha");
let sexo  = document.querySelector("#sexo");
let botao = document.querySelector("button");
let a = document.querySelector("a");
let h2 = document.querySelector("h2");

let div = document.querySelector("div");
let section = document.querySelector("section");

if(localStorage.nome){
    h2.innerHTML = `SEJA BEM VINDO ${localStorage.nome}`;
    a.innerHTML = `NÃO É O ${localStorage.nome} ?`;
    div.style.display = "none";
    section.style.display = "initial";
} else{
    function cadastro(){
        localStorage.setItem("nome", nome.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("confirmação", confirmEmail.value);
        localStorage.setItem("senha", senha.value);
        localStorage.setItem("sexo", sexo.value);
        div.style.display = "initial";

        if(localStorage.nome){
            h2.innerHTML = `SEJA BEM VINDO ${localStorage.nome}`;
            a.innerHTML = `NÃO É O ${localStorage.nome} ?`;
            div.style.display = "none";
            section.style.display = "initial";
        }
    }

}
function reset(){
    localStorage.clear("login");
}

botao.onclick = cadastro;