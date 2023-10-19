const favoriteSvg = document.querySelector('.favorite svg');
const removeSvg = document.querySelector('.remove svg');
const countLeft = document.querySelector('.count_left');
favoriteSvg.addEventListener('mouseenter', () => {
  countLeft.style.color = '#f55123';
});

removeSvg.addEventListener('mouseenter', () => {
  countLeft.style.color = '#f55123';
});

favoriteSvg.addEventListener('mouseleave', () => {
  countLeft.style.color = '';
});