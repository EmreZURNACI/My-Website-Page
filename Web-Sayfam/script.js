let directions = document.querySelector("nav div div:nth-child(3)");
let sayi = 1;
function showDirections() {
    if (sayi % 2 == 1) {
        directions.style.display = "block";
    }

    else directions.style.display = "none";
    sayi++;
}
let skillsMove = 800;
let projectsMove = 1350;
let mediaMove = 1950;
let contactMove = 2250;
function myFunction(x) {
    if (x.matches) { 
        skillsMove = 1675;
        projectsMove = 2550;
        mediaMove = 2950;
        contactMove = 3200;
    } else {
        skillsMove = 800;
        projectsMove = 1350;
        mediaMove = 1950;
        contactMove = 2250;
    }
}

var x = window.matchMedia("(max-width:524px)")
myFunction(x)
x.addEventListener(myFunction)
function skills() {
    window.scrollTo(0, skillsMove);
    event.preventDefault();
}
function projects() {
    window.scrollTo(0, projectsMove);
    event.preventDefault();
}
function media() {
    window.scrollTo(0, mediaMove);
    event.preventDefault();
}
function contact() {
    window.scrollTo(0, contactMove);
    event.preventDefault();
}