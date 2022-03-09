const CONTINUE = document.getElementById("continue");
const LOGO_WRAPPER = document.querySelector(".logo-wrapper");

CONTINUE.addEventListener("click", openForm => {
    LOGO_WRAPPER.classList.toggle("active"); 
});