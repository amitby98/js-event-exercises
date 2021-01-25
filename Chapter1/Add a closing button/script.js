let panes = document.getElementsByClassName("pane");
for (let pane of panes) {
  let button = document.createElement("button");
  pane.appendChild(button);
  button.textContent = "[x]";
  button.onclick = (e) => pane.remove();
}
