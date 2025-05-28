let main = document.querySelector("#main");

let cursor = document.querySelector("#cursor");

let imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", function (ullu) {
  gsap.to(cursor, {
    x: ullu.x,
    y: ullu.y,
    duration: 2,
    ease: "elastic.out(1,0.2)"
  });
});

imageDiv.addEventListener("mouseenter", function () {
  cursor.innerHTML = "View More";
  gsap.to(cursor, {
    scale: 2,
    backgroundColor: "#ffffff6c",
  });
});

imageDiv.addEventListener("mouseleave", function () {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "#ffffff",
  });
});
