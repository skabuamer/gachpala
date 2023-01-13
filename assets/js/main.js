let lightbox = new FsLightbox(".about-section__video-popup-btn");

window.addEventListener("scroll", () => {
    // Sticky Header
    document.querySelector("header").classList.toggle("sticky", window.scrollY >= 100);
});

/*--------- BACK TO TOP START ---------*/
window.addEventListener("scroll", () => {
    document.querySelector(".back__to__top").classList.toggle("active", scrollY > 300);

    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        document.querySelector(".back__to__top").style.transform = `translateY(-${document.querySelector(".footer-bottom").clientHeight - 20}px)`;
    } else {
        document.querySelector(".back__to__top").style.transform = "translateY(0px)";
    }
});

document.querySelector(".back__to__top").addEventListener("click", () => {
    window.scrollTo(0, 0);
});
/*--------- BACK TO TOP END ---------*/
