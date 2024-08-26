import gsap from "gsap";

export const animateWorks = () => {
  gsap.set(".title-project", { opacity: 0, x: -40 });
  gsap.to(".title-project", 0.6, {
    opacity: 1,
    x: 0,
  });

  gsap.set(".description-project", { opacity: 0, x: -40 });
  gsap.to(".description-project", 0.6, {
    opacity: 1,
    x: 0,
    delay: 0.1,
  });

  gsap.set(".web-site", { opacity: 0, x: -40 });
  gsap.to(".web-site", 0.6, {
    opacity: 1,
    x: 0,
    delay: 0.25,
  });

  gsap.set(".web-resources", { opacity: 0, x: -40 });
  gsap.to(".web-resources", 0.6, {
    opacity: 1,
    x: 0,
    delay: 0.2,
  });

  gsap.set(".inner", { opacity: 0, x: 40 });
  gsap.to(".inner", 0.6, {
    opacity: 1,
    x: 0,
    delay: 0.1,
  });
};
