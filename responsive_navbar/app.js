const navToggle = document.querySelector("#nav-toggle");
const navbar = document.querySelector("#navbar");

navToggle.addEventListener("click",onHambergaClick);

function onHambergaClick(){
    if(!navbar.classList.contains("open")){
        navbar.classList.add("open");
    }
    else{
        navbar.classList.remove("open");
    }

}