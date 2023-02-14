const btn_edd = document.querySelector(".btnEdd");
const btn_cisco = document.querySelector(".btnCisco");
const btn_raisecom = document.querySelector(".btnRaisecom");
const btn_dm4100 = document.querySelector(".btnDm4100");
const btn_dm4170 = document.querySelector(".btnDm4170");
const btn_qfx = document.querySelector(".btnQfx");

const tabela_edd = document.querySelector("#edd");
const tabela_cisco = document.querySelector("#cisco");
const tabela_raisecom = document.querySelector("#raisecom");
const tabela_dm4100 = document.querySelector("#dm4100");
const tabela_dm4170 = document.querySelector("#dm4170");
const tabela_qfx = document.querySelector("#qfx");


//Criando função para esconder e mostrar os scripts
btn_edd.addEventListener("click", () =>{
    tabela_edd.classList.remove("esconder")
    tabela_cisco.classList.add("esconder")
    tabela_raisecom.classList.add("esconder")
    tabela_dm4100.classList.add("esconder")
    tabela_dm4170.classList.add("esconder")
    tabela_qfx.classList.add("esconder")
})

btn_cisco.addEventListener("click", () =>{
    tabela_cisco.classList.remove("esconder");
    tabela_edd.classList.add("esconder")
    tabela_raisecom.classList.add("esconder")
    tabela_dm4100.classList.add("esconder")
    tabela_dm4170.classList.add("esconder")
    tabela_qfx.classList.add("esconder")
})

btn_raisecom.addEventListener("click", () =>{
    tabela_raisecom.classList.remove("esconder");
    tabela_edd.classList.add("esconder")
    tabela_cisco.classList.add("esconder")
    tabela_dm4100.classList.add("esconder")
    tabela_dm4170.classList.add("esconder")
    tabela_qfx.classList.add("esconder")
})

btn_dm4100.addEventListener("click", () =>{
    tabela_raisecom.classList.add("esconder");
    tabela_edd.classList.add("esconder")
    tabela_cisco.classList.add("esconder")
    tabela_dm4100.classList.remove("esconder")
    tabela_dm4170.classList.add("esconder")
    tabela_qfx.classList.add("esconder")
})

btn_dm4170.addEventListener("click", () =>{
    tabela_raisecom.classList.add("esconder");
    tabela_edd.classList.add("esconder")
    tabela_cisco.classList.add("esconder")
    tabela_dm4170.classList.remove("esconder")
    tabela_dm4100.classList.add("esconder")
    tabela_qfx.classList.add("esconder")
})

btn_qfx.addEventListener("click", () =>{
    tabela_raisecom.classList.add("esconder");
    tabela_edd.classList.add("esconder")
    tabela_cisco.classList.add("esconder")
    tabela_dm4170.classList.add("esconder")
    tabela_dm4100.classList.add("esconder")
    tabela_qfx.classList.remove("esconder")
})