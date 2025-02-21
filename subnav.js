const subNav = document.querySelector('.sub-menu');
const subToggle = document.querySelector ('.subnav');


subToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute('data-visible2');
    if (visibility === "false") {
        subNav.setAttribute ("data-visible2", true);
        subToggle.setAttribute("aria-expanded", true);  
    }else if (visibility === "true"){ 
        subNav.setAttribute("data-visible2", false)
        subToggle.setAttribute('aria-expanded', false)
    }
});        