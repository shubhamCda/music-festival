const scriptURL =
  "https://script.google.com/macros/s/AKfycbzwLVzSb_WupqX4hfMaqtN4HoYNlzp8qI2siF9Pq1Zeev1eeieEUTcPZYrzCauEe3zz/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault()
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => alert("Thank you"))
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
