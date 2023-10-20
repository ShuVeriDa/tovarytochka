const svgs = document.querySelectorAll(".selling_company_icon");
const popups = document.querySelectorAll(".popupCompany");

svgs.forEach((svg, index) => {
  svg.addEventListener("mouseover", () => {
    popups[index].style.display = "flex";
  });

  svg.addEventListener("mouseout", () => {
    popups[index].style.display = "none";
  });
});