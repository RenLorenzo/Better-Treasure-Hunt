document.addEventListener("DOMContentLoaded", () => {
    gsap.to(".content", { y: 10, repeat: -1, yoyo: true, duration: 1, ease: "power1.inOut" });
});
