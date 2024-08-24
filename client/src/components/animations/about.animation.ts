import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateAbout = () => {
  gsap.set(".title-me", { opacity: 0, y: 40 });
  gsap.to(".title-me", 0.4, {
    y: 0,
    opacity: 1,
  });

  gsap.set(".description-me", { opacity: 0, y: 20 });
  gsap.to(".description-me", 0.4, {
    y: 0,
    opacity: 1,
    delay: 0.15,
  });

  gsap.set(".img-me-about-index", { opacity: 0, x: 40 });
  gsap.to(".img-me-about-index", 0.4, {
    scrollTrigger: {
      trigger: ".img-me-about-index",
      toggleActions: "restart none none none",
      start: "top center",
    },
    x: 0,
    opacity: 1,
    delay: 0.2,
  });

  // TWO BLOCK
  // =============================================== //
  gsap.set(".my-start", { opacity: 0, x: -40 });
  gsap.to(".my-start", 0.4, {
    scrollTrigger: {
      trigger: ".my-start",
      start: "top center",
      toggleActions: "restart none none none",
    },
    opacity: 1,
    x: 0,
  });

  gsap.set(".title-my-scills", { opacity: 0, x: -40 });
  gsap.to(".title-my-scills", 0.4, {
    scrollTrigger: {
      trigger: ".my-start",
      start: "top center",
      toggleActions: "restart none none none",
    },
    opacity: 1,
    x: 0,
    delay: 0.2,
  });

  gsap.set(".scills__language", { opacity: 0, x: -40 });
  gsap.to(".scills__language", 0.4, {
    scrollTrigger: {
      trigger: ".my-start",
      start: "top center",
      toggleActions: "restart none none none",
    },
    opacity: 1,
    x: 0,
    delay: 0.3,
  });

  // THREE BLOCK
  // ====================================== //
  //
  gsap.set(".img-last-index", { x: 40, opacity: 0 });
  gsap.to(".img-last-index", {
    scrollTrigger: {
      trigger: ".img-last-index",
      start: "top center",
      toggleActions: "restart none none none",
      onLeave: () => {
        gsap.to(".img-last-index", { opacity: 0 });
      },
    },
    x: 0,
    opacity: 1,
  });

  gsap.set(".free-time", { opacity: 0, x: -40 });
  gsap.to(".free-time", 0.4, {
    scrollTrigger: {
      trigger: ".free-time",
      start: "top center",
      toggleActions: "restart noen none none",
      onLeave: () => {
        gsap.to(".free-time", { opacity: 0 });
      },
    },
    x: 0,
    opacity: 1,
  });

  gsap.set(".title-free-time", { opacity: 0, x: -40 });
  gsap.to(".title-free-time", 0.4, {
    scrollTrigger: {
      trigger: ".free-time",
      start: "top center",
      toggleActions: "restart noen none none",
      onLeave: () => {
        gsap.to(".title-free-time", { opacity: 0 });
      },
    },
    x: 0,
    opacity: 1,
    delay: 0.2,
  });

  gsap.set(".desc-free-time", { opacity: 0, x: -40 });
  gsap.to(".desc-free-time", 0.4, {
    scrollTrigger: {
      trigger: ".free-time",
      start: "top center",
      toggleActions: "restart noen none none",
      onLeave: () => {
        gsap.to(".desc-free-time", { opacity: 0 });
      },
    },
    x: 0,
    opacity: 1,
    delay: 0.3,
  });

  // ICONS LINES
  gsap.set(".clock", { opacity: 0 });
  gsap.to(".clock", 0.4, {
    scrollTrigger: {
      trigger: ".free-time",
      start: "top center",
      toggleActions: "restart noen none none",
      onLeave: () => {
        gsap.to(".clock", { opacity: 0 });
      },
    },
    opacity: 1,
  });

  gsap.set(".laptop-icon", { opacity: 0 });
  gsap.to(".laptop-icon", 0.4, {
    scrollTrigger: {
      trigger: ".my-start",
      start: "top center",
    },
    opacity: 1,
  });

  // LINES LEFT
  gsap.set(".line__two__index", { height: 0 });
  gsap.to(".line__two__index", 0.4, {
    scrollTrigger: {
      trigger: ".my-start",
      start: "top center",
      toggleActions: "restart none none none",
    },
    height: "26rem",
  });

  gsap.set(".line__three__index", { height: 0 });
  gsap.to(".line__three__index", 0.4, {
    scrollTrigger: {
      trigger: ".free-time",
      start: "top center",
      toggleActions: "restart none none none",
      onLeave: () => {
        gsap.to(".clock", { opacity: 0 });
      },
    },
    height: "15rem",
  });
};
