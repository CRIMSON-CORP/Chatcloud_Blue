const idn_image = document.querySelector("main .grid img");
const idn_content = document.querySelector("main .content").children;
const timeline = gsap.timeline({});

timeline
    .to(idn_image, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        ease: "power4.inOut",
        duration: 2.5,
    })
    .from(
        idn_content,
        {
            y: 50,
            opacity: 0,
            ease: "power4.Out",
            duration: 0.75,
            stagger: { each: 0.125 },
        },
        "-=1.5"
    );
