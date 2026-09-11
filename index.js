document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show"); // remove when out of view
            }
        });
    }, { threshold: 0.2 }); // triggers when 20% of section is visible

    sections.forEach(section => {
        section.classList.add("section"); // base hidden state
        observer.observe(section);
    });
});