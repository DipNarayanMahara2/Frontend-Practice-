// Check if consent is already given
document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("cookies-popUp")) {
    document.getElementById("cookies-popUp").style.display = "block";
  }
});

// accept the cookies and hide pop up

document
  .getElementById("accept-cookies")
  .addEventListener("click", function () {
    alert("thankyou");
    localStorage.setItem("cookies-popUp", "true");
    document.getElementById("cookies-popUp").style.display = "none";
  });

// hide the cookies with out accepting

document.getElementById("x-button").addEventListener("click", function () {
  document.getElementById("cookies-popUp").style.display = "none";
});
