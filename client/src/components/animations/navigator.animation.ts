import gsap from "gsap";
import React from "react";

export const animateNavigator = (menu: React.MutableRefObject<null>) => {
  gsap.set(menu.current, {
    transform: "translate(0px, 0px)",
    display: "block",
  });
  gsap.from(menu.current, {
    x: -800,
    duration: 0.3,
  });

  gsap.set(".link-0", { x: -20, opacity: 0 });
  gsap.to(".link-0", 0.15, {
    x: 0,
    opacity: 1,
    delay: 0.1,
  });
  gsap.set(".link-1", { x: -20, opacity: 0 });
  gsap.to(".link-1", 0.15, {
    x: 0,
    opacity: 1,
    delay: 0.15,
  });
  gsap.set(".link-2", { x: -20, opacity: 0 });
  gsap.to(".link-2", 0.15, {
    x: 0,
    opacity: 1,
    delay: 0.2,
  });
  gsap.set(".link-3", { x: -20, opacity: 0 });
  gsap.to(".link-3", 0.15, {
    x: 0,
    opacity: 1,
    delay: 0.25,
  });
  gsap.set(".authenticate", { x: 100, opacity: 0 });
  gsap.to(".authenticate", 0.2, {
    x: 0,
    opacity: 1,
    delay: 0.3,
  });
  gsap.set(".resource-github", { opacity: 0, x: -20 });
  gsap.to(".resource-github", 0.15, {
    x: 0,
    opacity: 1,
    delay: 0.3,
  });
};
