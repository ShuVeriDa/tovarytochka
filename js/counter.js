const decrementButtons = document.querySelectorAll(".decrement");
const incrementButtons = document.querySelectorAll(".increment");
const countDisplays = document.querySelectorAll(".count");
const countLeftElement = document.querySelector(".count_left");

function updateButtonState(count, index) {
  const text = countLeftElement.textContent;
  const matches = text.match(/\d+/);
  const countLeft = parseInt(matches[0]);

  if (count === countLeft) {
    incrementButtons[index].classList.add("disabled");
  } else {
    incrementButtons[index].classList.remove("disabled");
  }

  if (count === 1) {
    decrementButtons[index].classList.add("disabled");
  } else {
    decrementButtons[index].classList.remove("disabled");
  }
}

const countState = () => {
  let counts = [];
  countDisplays.forEach((countDisplay, index) => {
    counts[index] = parseInt(countDisplay.textContent);
    updateButtonState(counts[index], index);

    decrementButtons[index].addEventListener("click", function () {
      if (counts[index] > 1 && !decrementButtons[index].classList.contains("disabled")) {
        counts[index]--;
        countDisplay.textContent = counts[index];
        updateButtonState(counts[index], index);
      }
    });

    incrementButtons[index].addEventListener("click", function () {
      if (!incrementButtons[index].classList.contains("disabled")) {
        counts[index]++;
        countDisplay.textContent = counts[index];
        updateButtonState(counts[index], index);
      }
    });
  });
}

countState();
