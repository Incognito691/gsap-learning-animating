function breaktext() {
  let h1 = document.querySelector("h1");

  let h1Text = h1.textContent;

  let splittedtext = h1Text.split("");

  let halfValue = Math.floor(splittedtext.length / 2);

  let clutter = "";

  splittedtext.forEach(function (e, i) {
    if (i < halfValue) {
      clutter += `<span class="first-text">${e}</span>`;
    } else {
      clutter += `<span class="last-text">${e}</span>`;
    }
  });

  h1.innerHTML = clutter;
}

breaktext();

gsap.from("h1 .first-text", {
  y: 70,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
  stagger: 0.2,
});

gsap.from("h1 .last-text", {
  y: 70,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
  stagger: -0.2,
});
