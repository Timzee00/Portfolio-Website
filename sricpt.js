// ===== Hire Me Button =====
document.getElementById("hireBtn").addEventListener("click", function () {
    alert("Thanks for reaching out! You can contact me at: timzeegraphics@gmail.com");
});

// ===== Smooth Scroll =====
const links = document.querySelectorAll("nav a");
links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
});

// ===== Glow Header on Scroll =====
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 0 20px #00b7ff44";
    } else {
        header.style.boxShadow = "none";
    }

    // Animate skill bars
    const skillsSection = document.getElementById("skills");
    if (window.scrollY > skillsSection.offsetTop - window.innerHeight + 100) {
        document.querySelectorAll(".skill-fill").forEach(skill => {
            skill.style.width = skill.getAttribute("data-percentage");
        });
    }
});

// ===== Contact Form Simulation =====
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Message sent! (simulation)");
});
