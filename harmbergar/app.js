
let list = document.querySelector(".list");

let btn =  document.getElementsByTagName("button");

btn.addEventListener("click", openList());


function openList(){
 list.classList.toggle("open");

// if(list.classList.contains("open"))
// {
//     list.classList.remove("open");
// }
}

// const menulist = document.getElementById("menuList");
//         menulist.style.height = "250px";
//         const menu = document.getElementById("toggle");

//         menu.addEventListener("click", toggleMenu())

//         function toggleMenu() {
//             if (menulist.style.height == "250px") {
//                 menulist.style.height = "0px";
//             }
//             else {
//                 menulist.style.height = "250px";
//             }
            
//         }