const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
const mobileQuery = window.matchMedia("(max-width: 768px)");

function syncInert() {
    const shouldBeInert = mobileQuery.matches && !navLinks.classList.contains("open");
    navLinks.toggleAttribute("inert", shouldBeInert);
}

navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen);
    syncInert();
});

mobileQuery.addEventListener("change", syncInert);
syncInert();

const dropdown = document.querySelector(".dropdown");
const dropdownToggle = document.getElementById("about-toggle");

dropdownToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = dropdown.classList.toggle("open");
    dropdownToggle.setAttribute("aria-expanded", isOpen);
});

document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("open");
        dropdownToggle.setAttribute("aria-expanded", "false");
    }
});
