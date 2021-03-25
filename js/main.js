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
const hero = get("#her0");
const span_blue = get("#hero span.bg");
const slider = get(".hero_slider");
const content = get("#hero .content");
const hero_h1 = get("#hero h1");
const hero_p = get("#hero p");
const hero_button = get("#hero button");

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
Hero_section_timeline.to(span_blue, { opacity: 1, duration: 1 })
    .to(span_blue, { scaleX: 1, ease: "expo.out", duration: 2 }, "-=.75")
    .to(
        slider,
        { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", ease: "expo.out", duration: 1.5 },
        "-=1.75"
    )
    .from([hero_h1, hero_p, hero_button], { opacity: 0, y: 50, stagger: { each: 0.25 } }, "-=1");

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
    slides[slideIndex - 1].checked = true;
}
