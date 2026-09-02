// Access control widget for the 404 page. Guests get an unsigned token
// that isn't authorized to go home. Anything that claims alg:none is
// trusted as-is that's the bug to find and exploit.

const COOKIE = "cd_access_token";

function getToken() {
    const match = document.cookie.match(/(?:^|; )cd_access_token=([^;]*)/);
    if (!match) return null;
    try {
        return JSON.parse(atob(decodeURIComponent(match[1])));
    } catch {
        return null;
    }
}

function setToken(obj) {
    const value = encodeURIComponent(btoa(JSON.stringify(obj)));
    document.cookie = `${COOKIE}=${value}; path=/; SameSite=Lax`;
}

function checkAccess() {
    const token = getToken();
    const granted = !!(token && token.alg === "none" && token.home === true);

    const btn = document.getElementById("home-btn");
    const label = document.getElementById("home-btn-label");
    const icon = document.getElementById("home-btn-icon");
    const status = document.getElementById("notfound-status");

    btn.setAttribute("aria-disabled", granted ? "false" : "true");
    btn.classList.toggle("unlocked", granted);
    label.textContent = granted ? "Go Home - Access Granted" : "Go Home - Access Denied";
    icon.className = granted ? "fa-solid fa-lock-open" : "fa-solid fa-lock";
    status.textContent = granted ? "Token accepted. You may proceed." : "Your current token is not authorized to pass.";

    return granted;
}

document.addEventListener("DOMContentLoaded", () => {
    if (!getToken()) setToken({ alg: "HS256", home: false });
    checkAccess();

    document.getElementById("home-btn").addEventListener("click", () => {
        if (checkAccess()) window.location.href = "/";
    });
});
