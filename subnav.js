const subNav = document.querySelector('.sub-menu');
const subToggle = document.querySelector ('.subnav');


subToggle.addEventListener("click", (e) => {
    const visibility = subNav.getAttribute('data-visible2');
    if (visibility === "false") {
        subNav.setAttribute ("data-visible2", true);
        subToggle.setAttribute("aria-expanded", true);  
    }else if (visibility === "true"){ 
        subNav.setAttribute("data-visible2", false)
        subToggle.setAttribute('aria-expanded', false)
    }
});        

document.addEventListener("click", (e) => {
    const isClickInside = subNav.contains(e.target) || subToggle.contains(e.target);

    if (!isClickInside) {
        subNav.setAttribute("data-visible2", "false");
        subToggle.setAttribute("aria-expanded", "false");
    }
});