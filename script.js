// ===============================
// 1. SCROLL DARI BUTTON HERO
// ===============================
function scrollToSection() {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
}

// ===============================
// 2. ORDER VIA WHATSAPP
// ===============================
const orderButtons = document.querySelectorAll(".card button");

orderButtons.forEach(button => {
    button.addEventListener("click", () => {
        const productName = button.parentElement.querySelector("h3").innerText;
        const message = `Halo, saya ingin memesan produk ${productName}`;
        const whatsappURL = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");
    });
});

// ===============================
// 3. NAVBAR ACTIVE SAAT SCROLL
// ===============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});
