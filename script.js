document.addEventListener("mousemove", (event) => {

    const hero = document.querySelector(".hero");

    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;

    hero.style.backgroundPosition = `${x * 50}px ${y * 50}px`;

});