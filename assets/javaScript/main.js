import { navOnScroll,hamburgerToggle, aboutOnScroll, showAboutTxt1, showAboutTxt2, projectsOnScroll, contactOnScroll } from "./effects.js";

// Nav
    // Nav elements
    var nav = document.querySelector(".nav");
    var hamburger = document.querySelector(".hamburger");
    var navMenu = document.querySelector(".nav-menu");

    // nav event listener
    window.addEventListener("scroll", navOnScroll);
    hamburger.addEventListener("click", hamburgerToggle);

// About Section 
    // About Section Elements
    var aboutSect = document.querySelector(".about-me");
    var aboutContainer = document.querySelector(".about-container")
    var aboutTxt1 = document.querySelector(".aboutTxt-1");
    var aboutTxt2 = document.querySelector(".aboutTxt-2");
    var aboutBtn1 = document.querySelector(".about-btn-1");
    var aboutBtn2 = document.querySelector(".about-btn-2");
    var rocket = document.querySelector(".rocket");

    // about section event listeners
    window.addEventListener("scroll", aboutOnScroll);
        // navs
        aboutBtn1.addEventListener("click", showAboutTxt1);
        aboutBtn2.addEventListener("click", showAboutTxt2); 

// Projects section
    // Projects section elements
    var projectSect = document.querySelector(".projects");
    var card1 = document.querySelector(".card-1");
    var card2 = document.querySelector(".card-2");
    var card3 = document.querySelector(".card-3");

        //event listeners
        window.addEventListener("scroll", projectsOnScroll);

// contact section
    // contact section elements
    var contactSect = document.querySelector(".contact-me");
    var formContainer = document.querySelector(".form-container");

        // contact section event listener
        window.addEventListener("scroll", contactOnScroll);


        
export { nav, navMenu, hamburger, aboutSect, aboutContainer, aboutTxt1, aboutTxt2, aboutBtn1, aboutBtn2, rocket, projectSect, card1, card2, card3, contactSect, formContainer };       