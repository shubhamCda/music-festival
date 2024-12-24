// const form = document.getElementById("contact-form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   fetch(form.action, {
//     mode: "no-cors",
//     method: "POST",
//     body: new FormData(document.getElementById("contact-form")),
//   })
//     .then(() => alert("Thank you"))
//     .then(() => {
//       window.location.reload();
//     })
//     .catch((error) => console.error("Error!", error.message));
// });

const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(form.action, {
    mode: "no-cors",
    method: "POST",
    body: new FormData(form),
  })
    .then(() => {
      window.location.href = "thankyou.html"; // Redirect to thankyou.html
    })
    .catch((error) => console.error("Error!", error.message));
});
