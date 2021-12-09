let menuIcon = document.querySelector(".fas");
let menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
    if (menuIcon.classList.contains("show")){
        menu.style.top = `-100%`;
        menuIcon.classList.remove("show");
    }else{
         menu.style.top = `0px`;
         menuIcon.classList.add("show");
    }
});

window.addEventListener("scroll", () => {
    menu.style.top = `-100%`;
});
