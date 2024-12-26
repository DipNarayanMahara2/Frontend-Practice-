document
  .querySelector(".dropdown-button")
  .addEventListener("click", function () {
    const dropdownContent = document.querySelector(".dropdown");
    dropdownContent.classList.toggle("active");
  });

// handel the selection

const dropdownItems = document.querySelector(".dropdown a");
const selectionDisplay = document.getElementById("selected-option");

dropdownItems.forEach((items) => {
  items.addEventListener("click", function (event) {
    event.preventDefault();
    // Get the item's value
    const selectedValue = this.getAttribute("data-value");
    //update btn text
    document.querySelector(".dropdown-button").textContent = selectedValue;
    selectedOptionDisplay.textContent = `Selected: ${selectedValue}`;
    document.querySelector(".dropdown-content").classList.remove("show");
  });
});
