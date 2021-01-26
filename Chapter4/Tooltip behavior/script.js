function showTooltip(event) {
  let target = event.target;
  toolTip = document.createElement("div");
  toolTip.className = "tooltip";
  if (target.tagName != "BUTTON") return;
  toolTip.innerHTML = target.dataset.tooltip;
  document.body.append(toolTip);

  let btn = target.getBoundingClientRect();

  let top = btn.top - toolTip.offsetHeight - 5;
  if (top < 0) top = btn.bottom + 5;

  let left = btn.left + (target.offsetWidth - toolTip.offsetWidth) / 2;
  if (left < 0) left = 0;

  toolTip.style.top = top + "px";
  toolTip.style.left = left + "px";
}

document.onmouseover = showTooltip;
document.onmouseout = () => toolTip.remove();
