const hireButton = document.getElementById("hireBtn");
const contactForm = document.getElementById("contactForm");
const skillsSection = document.getElementById("skills");

if (hireButton) {
    hireButton.addEventListener("click", () => {
        window.location.hash = "contact";
    });
}

const animateSkills = () => {
    document.querySelectorAll(".skill-fill").forEach((skill) => {
        const percentage = skill.getAttribute("data-percentage");
        if (percentage) skill.style.width = percentage;
    });
};

if (skillsSection && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        animateSkills();
        currentObserver.disconnect();
    }, { threshold: 0.2 });

    observer.observe(skillsSection);
} else {
    animateSkills();
}

if (contactForm) {
    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = {
            name: contactForm.name.value.trim(),
            email: contactForm.email.value.trim(),
            message: contactForm.message.value.trim()
        };

        try {
            const response = await fetch("https://formspree.io/f/xwpgzwer", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (!response.ok) throw new Error("Form submission failed");

            alert("Message sent successfully!");
            contactForm.reset();
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again later.");
        }
    });
}