// UTILS
function get(element) {
    return document.querySelector(element);
}
function getAll(element) {
    return document.querySelectorAll(element);
}

// SVG
const line1 = get(".one");
const line2 = get(".two");
const line3 = get(".three");
const ham = get("header svg");

// NAV
const Nav = get("nav");
const NavLinks = getAll("nav a");

// Hero Section
const hero = get("#her");

// GSAP
//// Navigation timelines
const mobile_click = gsap.timeline({ reversed: true });
const nav_timeline = gsap.timeline({ reversed: true });

//// Hero section Timelines
const Hero_section_timeline = gsap.timeline();

// navigation timeline Expanded
mobile_click
    .to(line2, 0.3, { scaleX: 0 })
    .to(line1, 0.3, { y: 19.5 }, "<.5", "anim")
    .to(line3, 0.3, { y: -19.25 }, "<", "anim")
    .to(ham, 0.3, { rotate: 360, ease: Power4 }, "spin")
    .to(line1, 0.3, { rotate: -45, transformOrigin: "50% 50%", y: 19.5 }, "x")
    .to(line3, 0.3, { rotate: 45, transformOrigin: "50% 50%", y: -19.25 }, "x");

nav_timeline
    .to(Nav, { left: 0, opacity: 1, duration: 0.5 })
    .from(NavLinks, { y: 100, duration: 1, ease: "Power4.out()" })
    .to(NavLinks, { opacity: 1, duration: 0.75, ease: "Power4.out()" }, "-=.75");

ham.addEventListener("click", () => {
    ham.classList.toggle("open");
    if (ham.classList.contains("open")) {
        mobile_click.play();
        nav_timeline.play();
    } else {
        mobile_click.reverse();
        nav_timeline.reverse();
    }
});

// Hero section timeline Expanded

// For label
const image_labels = document.querySelectorAll("label");

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    var i;
    var slides = document.querySelectorAll("input[type='radio'");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].checked = false;
    }
    console.log(1);
    slides[slideIndex - 1].checked = true;
}
