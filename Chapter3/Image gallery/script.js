let links = document.querySelectorAll("a");
for (link of links) {
  link.onclick = function (e) {
    let img = document.getElementById("largeImg");
    img.src = e.target.closest("a").href;
    return false;
  };
}

// let thumbsEl = document.querySelector("#thumbs");
// thumbsEl.addEventListener("click", eventHandler);
// function eventHandler(event) {
//   event.preventDefault();
//   const imgEl = event.target;
//   if (imgEl.tagName === "IMG") {
//     let largeImg = document.getElementById("largeImg");
//     largeImg.src = imgEl.src;
//   }
// }
