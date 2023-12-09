let i = 0;
let isDeleting = false;
const text = 'Rahim Rahmatzada';
const speed = 150;

function typeWriter() {
    document.getElementById("name").innerHTML = text.slice(0, i);

    if (i === text.length && !isDeleting) {
        setTimeout(() => { isDeleting = true; typeWriter(); }, 500);  // Adding a pause
        return;  // Ensure we exit here to avoid continuous execution
    } else if (i === 0 && isDeleting) {
        isDeleting = false;
    }

    const typeSpeed = isDeleting ? speed * 0.5 : speed;

    if (isDeleting) {
        i--;
    } else {
        i++;
    }
    setTimeout(typeWriter, typeSpeed);
}

document.addEventListener("DOMContentLoaded", typeWriter);



function animateTechIcons() {
    document.querySelector(".tech-icon.lua").style.animation =
        "rollFromLeft 2s forwards, bop 1s ease-in-out 2s infinite";
    document.querySelector(".tech-icon.java").style.animation =
        "rollFromLeft 2s forwards, bop 1s ease-in-out 2s infinite";
    document.querySelector(".tech-icon.python").style.animation =
        "rollFromRight 2s forwards, bop 1s ease-in-out 2s infinite";
    document.querySelector(".tech-icon.sql").style.animation =
        "rollFromRight 2s forwards, bop 1s ease-in-out 2s infinite";
}


const aboutSection = document.querySelector('#about');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

let hasAnimated = false;

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
            animateTechIcons();
            hasAnimated = true;
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
observer.observe(aboutSection);


document.querySelector('#menu a[href="#about"]').addEventListener('click', () => {
    if (!hasAnimated) {
        setTimeout(animateTechIcons, 300); // Give it a slight delay to allow for scrolling
        hasAnimated = true;
    }
});





