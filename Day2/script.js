let menu = document.querySelector("#nav i");
let cross = document.querySelector("#full i");

let gt = gsap.timeline();

gt.to("#full", {
  right: 0,
  duration: 0.4,
});

gt.from("#full h4", {
  x: 100,
  stagger: 0.2,
  duration: 0.5,
  opacity: 0,
});

gt.from("#full i", {
  opacity: 0,
});

gt.pause();

menu.addEventListener("click", function () {
  gt.play();
});

cross.addEventListener("click", function () {
  gt.reverse();
});
