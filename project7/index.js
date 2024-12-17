function tabLinks(tabId) {
  const allcontent = document.querySelectorAll(".tabs-container > div");
  allcontent.forEach((content) => content.classList.remove("active"));

  const seletedcontent = document.querySelector(`.${tabId}`);
  if (seletedcontent) {
    seletedcontent.classList.add("active");
  }
}
