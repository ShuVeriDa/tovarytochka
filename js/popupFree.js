const freeElement = document.querySelectorAll(".free");
const popupFree = document.querySelectorAll(".popup");

freeElement.forEach((free, index) => {
  free.addEventListener("mouseover", () => {
    popupFree[index].style.display = "block";
  });

  free.addEventListener("mouseout", () => {
    popupFree[index].style.display = "none";
  });
});