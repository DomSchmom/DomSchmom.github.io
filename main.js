const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("nav ul li a");
const navlinks = document.querySelectorAll("nav ul li");

document.addEventListener("mousemove", (e) => {
    let xPos = e.pageX;
    let yPos = e.pageY;

    cursor.style.left = xPos +"px";
    cursor.style.top = yPos +"px";
})

links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        cursor.classList.add("large");
    })
})

links.forEach(link => {
    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("large");
    })
})

//Animation
navlinks.forEach((li, i) => {
    li.style.animationDelay = i * 140 + "ms";
})