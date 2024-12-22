const maxChar = 250;

const textarea = document.getElementById("textContain");

const countDisplay = document.getElementById("incrementNumber");

textarea.addEventListener("input", function () {
  const currentLength = textarea.value.length;

  countDisplay.textContent = `${currentLength} / ${maxChar}`;

  if (currentLength >= maxChar) {
    textarea.classList.add("limitReached");
    countDisplay.classList.add("limitReached");
  } else {
    textarea.classList.remove("limitReached");
    countDisplay.classList.remove("limitReached");
  }
});
