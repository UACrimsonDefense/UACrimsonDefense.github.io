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
