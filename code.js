const container = document.getElementById("list-container");
for (var i = 1; i <= 20; i++) {
  const p = document.createElement("p");
  p.textContent = "This is item #" + i;

 if (i % 2 = 0) {
    p.style.color = "blue";
  } 
 else {
    p.style.color = "red";
  }

  container.appendChild(p);
}
