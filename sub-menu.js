const primaryNav = document.querySelector('.sub-menu');
const navToggle = document.querySelector('.mobile-subnav-toggle');

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute('data-visible');
    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute('aria-expanded', true);
    }else if (visibility === "true"){
        primaryNav.setAttribute("data-visible", false)
        navToggle.setAttribute('aria-expanded', false);
    }
    
});