const harmbergur = document.querySelector(".harmbergur");
const navMenu = document.querySelector(".nav-menu");

const togg = document.querySelector(".togg");
const tgg = document.querySelector(".tgg");

togg.addEventListener("click",() => {
    togg.classList.toggle("active");
    tgg.classList.toggle("active");
})

harmbergur.addEventListener("click",() => {
    harmbergur.classList.toggle("active");
    navMenu.classList.toggle("active");
})


document.querySelectorAll(".nav-link").forEach( n => 
    n.addEventListener("click",() => {
        harmbergur.classList.remove("active");
        navMenu.classList.remove("active");
    })
)


const body = document.body;
const dark = document.querySelector(".dark");
dark.addEventListener("click",() => {
   body.classList.toggle("dark");
})
