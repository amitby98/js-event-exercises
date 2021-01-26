let a = 1;
let transX = -400;
let buttonRight = document.getElementById("right");
let buttonLeft = document.getElementById("left");
let imgs = document.getElementById("container");

buttonRight.addEventListener("click", (e) => {
  if (transX >= -900) {
    imgs.style.transform = "translateX(" + transX * a + "px)";
    a = a + 1;
  } else if (transX < -900) {
    transX = -900;
  }
});

buttonLeft.addEventListener("click", (e) => {
  if (transX <= 900) {
    imgs.style.transform = "translateX(" + transX * a + "px)";
    a = a - 1;
  } else if (transX > 900) {
    transX = 900;
  }
});

// כפתור למעלה מ0 עד מינוס 900
// כפתור למטה ממינוס 900 עד 0
