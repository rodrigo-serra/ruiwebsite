/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// Select all section elements with an id attribute
const sections = document.querySelectorAll("section[id]");


// Lights up the a tag element in the navbar according to the section the user is navigating
const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link");
        } else {
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);



/*==================== CHANGE BACKGROUND HEADER ====================*/ 
// Ads box-shadow to the header when the user scrolls out of the home section
const scrollHeader = () => {
     const nav = document.getElementById("header");
     // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
     const scrollY = window.pageYOffset;

     if(scrollY >= 80) {
         nav.classList.add("scroll-header");
     } else {
         nav.classList.remove("scroll-header");
     }
}

window.addEventListener("scroll", scrollHeader);