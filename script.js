// Mobile Navigation

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu when clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Sticky Navbar

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.background = "#0f172a";
    }else{
        header.style.background = "#111827";
    }

});

// Reveal Sections

const sections = document.querySelectorAll("section");

function revealSections(){

    const trigger = window.innerHeight * 0.85;

    sections.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < trigger){
            section.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// Active Navigation Link

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", ()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 150;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});