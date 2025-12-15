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

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name: contactForm.name.value,
    email: contactForm.email.value,
    message: contactForm.message.value
  };

  try {
    const response = await fetch("https://formspree.io/f/xwpgzwer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert("Message sent successfully!");
      contactForm.reset();
    } else {
      alert("Message failed. Please check your input or try again.");
    }
  } catch (error) {
    alert("Something went wrong. Please try again later.");
}
});
