// const menulist = document.getElementById("menuList");
// menulist.style.maxHeight = "0px";
// const menu = document.getElementById("toggle");

// menu.addEventListener("click",
//     function toggleMenu(){
//         if(menulist.style.maxHeight=="0px"){
//             menulist.style.maxHeight = "300px";
//         }
//         else{
//             menulist.style.maxHeight = "0px";
//         }
//     }
// )


const menulist = document.getElementById("menuList");
        menulist.style.height = "250px";
        const menu = document.getElementById("toggle");

        menu.addEventListener("click", toggleMenu())

        function toggleMenu() {
            if (menulist.style.height == "250px") {
                menulist.style.height = "0px";
            }
            else {
                menulist.style.height = "250px";
            }
            
        }