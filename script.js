gsap.from([".greeting", ".name-title"], {
  scrollTrigger: {
    trigger: ".greeting",
    toggleActions: "play reverse restart none",
  },
  x: -200,
  duration: 0.5,
  stagger: 0.1,
  opacity: 0,
});

gsap.from([".subtitle", ".resume-button", ".home-svg"], {
  scrollTrigger: {
    trigger: ".greeting",
    toggleActions: "play reverse restart none",
  },
  y: 200,
  duration: 0.5,
  stagger: 0.1,
  opacity: 0,
});

gsap.from(".profile-img", {
  scrollTrigger: {
    trigger: ".profile-img",
    toggleActions: "play reverse restart none",
  },
  duration: 1,
  // opacity: 0,
  scale: 0.5,
});
gsap.from(".about-me-button", {
  scrollTrigger: {
    trigger: ".about-me-button",
    toggleActions: "play reverse restart none",
  },
  duration: 1,
  // opacity: 0,
  x: -200,
});

gsap.from(".mouse", {
  scrollTrigger: {
    trigger: ".greeting",
    toggleActions: "play reverse restart none",
  },
  y: 300,
  opacity: 0,
  scale: 0,
});

gsap.from(".about", {
  scrollTrigger: {
    trigger: ".about",
    toggleActions: "play reverse restart none",
  },
  x: 200,
  stagger: 0.2,
  opacity: 0,
});

gsap.from(".hobby", {
  scrollTrigger: {
    trigger: ".profile-img",
    toggleActions: "play reverse restart none",
  },
  x: 300,
  duration: 1,
  stagger: 0.2,
  opacity: 0,
});

gsap.from(".nav-links", {
  scrollTrigger: {
    trigger: ".greeting",
    toggleActions: "play reverse restart none",
  },
  y: -200,
  opacity: 0,
  stagger: 0.1,
});

gsap.from(".skills-title", {
  scrollTrigger: {
    trigger: ".skills-title",
    toggleActions: "restart reverse play reverse",
  },
  y: -200,
  opacity: 0,
  duration: 0.5,
});

gsap.utils.toArray(".skill").forEach((skill, i) => {
  gsap.from(skill, {
    scrollTrigger: {
      trigger: "skills-title",
      // trigger: skill,
      toggleActions: "restart reverse play reverse",
    },
    x: 200,
    opacity: 0,
    duration: 0.5,
    delay: i * 0.1,
  });
});

gsap.from(".projects-title", {
  scrollTrigger: {
    trigger: ".project-card",
    toggleActions: "restart reverse play reverse",
  },
  y: -200,
  opacity: 0,
  duration: 0.5,
});

gsap.utils.toArray(".project-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      toggleActions: "restart reverse play reverse",
    },
    x: -400,
    duration: 0.5,
    delay: i * 0.2,
    opacity: 0,
  });
});

gsap.utils.toArray(".education-block").forEach((block, i) => {
  gsap.from(block, {
    scrollTrigger: {
      trigger: block,
      toggleActions: "restart reverse play reverse",
    },
    opacity: 0,
    duration: 1,
    delay: i * 0.2,
  });
});

gsap.from(".timeline-line", {
  scrollTrigger: {
    trigger: ".education-block",
    toggleActions: "play none none reverse",
  },
  y: -400,
  scaleY: 0,
  transformOrigin: "top bottom",
});

gsap.from(".timeline-circle", {
  scrollTrigger: {
    trigger: ".timeline-line",
    start: "top center",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  scale: 0,
});

gsap.from(".education-title", {
  scrollTrigger: {
    trigger: ".education-block",
    toggleActions: "restart reverse play reverse",
  },
  x: 200,
  opacity: 0,
  duration: 0.5,
});

gsap.from(".contact-title", {
  scrollTrigger: {
    trigger: ".contact-title",
    toggleActions: "restart reverse play reverse",
  },
  y: -200,
  opacity: 0,
  duration: 0.5,
});

gsap.from(".contact-email", {
  scrollTrigger: {
    trigger: ".contact-title",
    toggleActions: "restart reverse play reverse",
  },
  y: 200,
  opacity: 0,
  duration: 1,
});
