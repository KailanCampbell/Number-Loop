const container = document.getElementById("list-container");
for (let i = 1; i <= 20; i++) {
  const numberDiv = document.createElement("div");
 numberDiv.textContent = "This is item #" + i;

  if i % 2 = 0 {
    numberDiv.style.color = "blue";
  } else {
    numberDiv.style.color = "red";
  }

  container.appendChild(numberDiv);
}

