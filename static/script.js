// Leap Year Check Function
function CheckLeap() {
  const year = document.getElementById("year").value;
  const result = document.getElementById("result");
  const button = event.target;

  // Ripple Animation Effect
  createRipple(event, button);

  if (year === "") {
    result.textContent = "Please enter a year!";
    result.style.color = "red";
    return;
  }

  const y = parseInt(year);
  if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
    result.textContent = `${y} is a Leap Year `;
    result.style.color = "#0da934ff";
  } else {
    result.textContent = `${y} is NOT a Leap Year `;
    result.style.color = "#d62828";
  }
}

// Ripple Animation Function
function createRipple(event, button) {
  const ripple = document.createElement("span");
  ripple.classList.add("ripple");

  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  ripple.style.width = ripple.style.height = size + "px";

  ripple.style.left = event.clientX - rect.left - size / 2 + "px";
  ripple.style.top = event.clientY - rect.top - size / 2 + "px";

  button.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
}
