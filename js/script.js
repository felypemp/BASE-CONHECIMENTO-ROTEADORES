const btn_mikrotik = document.querySelector(".mikrotik");
const btn_edd = document.querySelector(".edd");
const card_mikrotik = document.querySelector(".cardMk");
const card_edd = document.querySelector(".cardEdd")

btn_mikrotik.addEventListener("click", () =>{
    card_mikrotik.classList.remove("esconder");
    card_edd.classList.add("esconder")
})

btn_edd.addEventListener("click", () =>{
    card_edd.classList.remove("esconder")
    card_mikrotik.classList.add("esconder")
})