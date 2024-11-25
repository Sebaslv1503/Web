const title = document.querySelector(".class-contend h2");
const classHeader = document.querySelector(".class-header");

title.addEventListener("mouseover", () => {
    document.body.style.backgroundColor = "black";
    classHeader.style.transform = "scaleX(-1)";
});

title.addEventListener("mouseout", () => {
    document.body.style.backgroundColor = "#b7e4ef"; 
    classHeader.style.transform = "scaleX(1)";
});