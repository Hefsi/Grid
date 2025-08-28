const toggleCollapse = document.querySelector(".toggle-collapse span");
const nav = document.querySelector(".nav");

const icon = document.querySelector(".icon");


// click event


toggleCollapse.onclick = (e) => {
    nav.classList.toggle("collapse");
    e.target.classList.toggle("toggle-click");

}


// icon.onclick = () => {
//     icon.classList.toggle("toggle-click"); 
// }
