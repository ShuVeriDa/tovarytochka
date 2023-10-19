const freeElement = document.getElementById("free");
const popup = document.getElementById("popup");

freeElement.addEventListener("mouseover", () => {
  const rect = freeElement.getBoundingClientRect();
  popup.style.display = "block";
});

freeElement.addEventListener("mouseout", () => {
  popup.style.display = "none";
});