let list=document.querySelector(".nav-Items");
let button=document.querySelector(".fa-duotone");
function toggleList() {
    list.classList.toggle("active");
    button.classList.toggle("fa-bars")
    button.classList.toggle("fa-x")
 }
