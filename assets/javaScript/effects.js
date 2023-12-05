import { nav, aboutSect,aboutContainer, aboutTxt1, aboutTxt2, aboutBtn1, aboutBtn2, rocket, projectSect, card1, card3, contactSect, formContainer } from "./main.js";

// Nav

    // nav animation
    var navOnScroll = () => {
        window.scrollY > 0 ? nav.classList.add("nav-color-change") : nav.classList.remove("nav-color-change");
    }

// About Section 

    //about sect animation 
    var aboutOnScroll = () => {
        const triggerAbout = window.innerHeight / 5 * 4;
        const showAbout = aboutContainer.getBoundingClientRect().top;

        if (triggerAbout > showAbout) {
            rocket.classList.add("showRocket");
            aboutSect.classList.add("showSect");
        } else {
            rocket.classList.remove("showRocket");
            aboutSect.classList.remove("showSect");
        }
        
    } 

    var showAboutTxt1 = () => {
        aboutTxt1.classList.add("showTxt");
        aboutBtn1.classList.add("activeAbtNav");
        aboutTxt1.classList.remove("hideTxt1");
        aboutBtn1.classList.remove("inactiveBtn1");
        aboutTxt2.classList.remove("showTxt");
        aboutBtn2.classList.remove("activeAbtNav");
    }

    var showAboutTxt2 = () => {
        aboutTxt2.classList.add("showTxt");
        aboutBtn2.classList.add("activeAbtNav");
        aboutTxt1.classList.add("hideTxt1");
        aboutBtn1.classList.add("inactiveBtn1");
        aboutTxt1.classList.remove("showTxt");
        aboutBtn1.classList.remove("activeAbtNav");
    }

// Projects

    // Project Sect animations
    var projectsOnScroll = () => {
        const triggerProjects = window.innerHeight / 5 * 4;
        const showProjects = projectSect.getBoundingClientRect().top;

        if (triggerProjects > showProjects) {
            projectSect.classList.add("showSect");
            card1.classList.add("showCard");
            card3.classList.add("showCard");
        } else {
            projectSect.classList.remove("showSect");
            card1.classList.remove("showCard");
            card3.classList.remove("showCard");
        }
    }

// contact section

    // contact Section animation

    var contactOnScroll = () => {
        const triggerContact = window.innerHeight / 5 * 4;
        const showContact = contactSect.getBoundingClientRect().top;

        if (triggerContact > showContact) {
            contactSect.classList.add("showSect");
            formContainer.classList.add("showCard");
        } else {
            contactSect.classList.remove("showSect");
            formContainer.classList.remove("showCard");
        }

    }
export { navOnScroll, aboutOnScroll, showAboutTxt1, showAboutTxt2, projectsOnScroll,contactOnScroll }