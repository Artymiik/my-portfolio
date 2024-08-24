import gsap, { Power3 } from "gsap";

export const animateHome = () => {
  // card_me
  gsap.set(".card_me", { x: -100, opacity: 0 });
  gsap.to(".card_me", 1.5, { x: 0, opacity: 1, ease: Power3.easeOut });

  // card_works
  gsap.set(".card_works", { x: 100, opacity: 0 });
  gsap.to(".card_works", 1.5, { x: 0, opacity: 1, ease: Power3.easeOut });

  // card_more_about
  gsap.set(".card_more_about", { x: 100, opacity: 0 });
  gsap.to(".card_more_about", 1.5, {
    x: 0,
    opacity: 1,
    ease: Power3.easeOut,
    delay: 0.1,
  });

  // card_my-contact
  gsap.set(".card_my-contact", { x: -100, opacity: 0 });
  gsap.to(".card_my-contact", 1.5, {
    x: 0,
    opacity: 1,
    ease: Power3.easeOut,
    delay: 0.3,
  });

  // card_my-active-language
  gsap.set(".card_my-active-language", { x: 100, opacity: 0 });
  gsap.to(".card_my-active-language", 1.5, {
    x: 0,
    opacity: 1,
    ease: Power3.easeOut,
    delay: 0.3,
  });

  // card-1-left-my-plans
  gsap.set(".card-1-left-my-plans", { x: -100, opacity: 0 });
  gsap.to(".card-1-left-my-plans", 1.5, {
    x: 0,
    opacity: 1,
    ease: Power3.easeOut,
    delay: 0.7,
  });

  // card-1-left-my-blog
  gsap.set(".card-1-left-my-blog", { x: -100, opacity: 0 });
  gsap.to(".card-1-left-my-blog", 1.5, {
    x: 0,
    opacity: 1,
    ease: Power3.easeOut,
    delay: 0.6,
  });

  // TXT animation
  gsap.set(".min-description", { y: 20, opacity: 0 });
  gsap.to(".min-description", 1, {
    y: 0,
    ease: Power3.easeOut,
    delay: 0.2,
    opacity: 1,
  });

  gsap.set(".my-name-is", { y: 20, opacity: 0 });
  gsap.to(".my-name-is", 1, {
    y: 0,
    ease: Power3.easeOut,
    delay: 0.4,
    opacity: 1,
  });

  gsap.set(".description", { y: 20, opacity: 0 });
  gsap.to(".description", 1, {
    y: 0,
    ease: Power3.easeOut,
    delay: 0.5,
    opacity: 1,
  });
};
