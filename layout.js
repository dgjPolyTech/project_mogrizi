document.addEventListener("DOMContentLoaded", () => {
  // Header 삽입
  fetch("header.html")
    .then(res => res.text())
    .then(data => {
      document.body.insertAdjacentHTML("afterbegin", data);
    });

  // Footer 삽입
  fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      document.body.insertAdjacentHTML("beforeend", data);
    });
});