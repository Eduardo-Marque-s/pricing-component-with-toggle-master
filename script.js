const toggle = document.querySelector(".head1");
const cards = document.querySelector(".conteudo");

toggle.addEventListener("change", () =>{
    cards.classList.toggle("mostrar")
});