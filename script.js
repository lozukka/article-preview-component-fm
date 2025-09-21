let shareOpen = document.getElementById("share-open");
let shareClose = document.getElementById("share-close");
let shareSection = document.getElementById("share-section");
let writerSection = document.getElementById("writer");

shareOpen.addEventListener("click", (event) => {
  if (shareSection.classList.contains("show")) {
    shareSection.classList.remove("show");
    shareOpen.classList.remove("show");
  } else {
    shareSection.classList.add("show");
    shareOpen.classList.add("show");
  }
});

shareClose.addEventListener("click", (event) => {
  shareSection.classList.remove("show");
});
