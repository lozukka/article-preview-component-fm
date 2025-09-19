let shareBtn = document.getElementById("share-open");
let shareSection = document.getElementById("share-section");
let writerSection = document.getElementById("writer");

shareBtn.addEventListener("click", (event) => {
  shareSection.style.display = "flex";
  writerSection.style.display = "none";
});
