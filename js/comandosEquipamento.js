const btn_edd = document.querySelector(".btnEdd");
const btn_cisco = document.querySelector(".btnCisco");
const tabela_edd = document.querySelector("#edd");
const tabela_cisco = document.querySelector("#cisco");


//Criando função para esconder e mostrar os scripts
btn_edd.addEventListener("click", () =>{
    tabela_edd.classList.remove("esconder")
    tabela_cisco.classList.add("esconder")
})

btn_cisco.addEventListener("click", () =>{
    tabela_cisco.classList.remove("esconder");
    tabela_edd.classList.add("esconder")
})