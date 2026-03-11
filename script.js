document.addEventListener("mousemove", (event) => {

    const hero = document.querySelector(".hero");
    if (!hero) return;

    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;

    hero.style.backgroundPosition = `${x * 50}px ${y * 50}px`;

});

particlesJS("particles-js", {
  particles: {
    number: {value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#9DBBD9" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#9DBBD9" }
    },
    opacity: {
      value: 0.4,
      random: true
    },
    size: {
      value: 5,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 200,
      color: "#9DBBD9",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      straight: false,
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 10 },
      remove: { particles_nb: 2 },
    }
  },
  retina_detect: true
});