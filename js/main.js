let openIcon = document.getElementById("navIconOpen");
let closeIcon = document.getElementById("navIconClose");
let navbar = document.getElementById("navbar");

openIcon.onclick = () => {
    if (openIcon.classList.contains("active")) {
        navbar.classList.add("nav-height");
        openIcon.classList.remove("active");
        closeIcon.classList.add("active");
    }
}

closeIcon.onclick = () => {
    if (closeIcon.classList.contains("active")) {
        navbar.classList.remove("nav-height");
        closeIcon.classList.remove("active");
        openIcon.classList.add("active");
    }
}