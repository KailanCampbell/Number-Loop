const container = document.getElementById("list-container");
var i;
for (let i = 1; i <= 20; i++) {
  const p = document.createElement("p");
  p.textContent = "This is item #" + i;
  container.appendChild(p);
}

for (let i = 1; i <= 20; i++) {
  const p = document.createElement("p");
  p.textContent = i;

  if (i % (i / 2) = 0) {
    p.style.color = "blue";
  } else {
    p.style.color = "red";
  }

  container.appendChild(p);
}

