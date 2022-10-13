window.addEventListener("DOMContentLoaded",(event)=> {
    const menuBtn = document.getElementById("menu");
    const nav = document.querySelector("header nav");
    
    menuBtn.addEventListener("click", (event) => {
        menuBtn.classList.toggle("salir");
        nav.classList.toggle("visible");
        
    });
});
