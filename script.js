let shareOpen = document.getElementById("share-open");
let shareClose = document.getElementById("share-close");
let shareSection = document.getElementById("share-section");
let writerSection = document.getElementById("writer");

shareOpen.addEventListener("click", (event) => {
  shareSection.style.display = "flex";
  writerSection.style.display = "none";
});

shareClose.addEventListener("click", (event) => {
  shareSection.style.display = "none";
  writerSection.style.display = "flex";
});
