const processForm = form => {
  const data = new FormData(form);
  data.append("form-name", "reachout");
  fetch("/", {
    method: "POST",
    body: data
  })
    .then(() => {
      form.innerHTML = `<div class="form--success"> Almost there! Check you inbox for a confirmation e-mail.</div>`;
    })
    .catch(error => {
      form.innerHTML = `<div class="form--error">Error: ${error}</div>`;
    });
};

const emailForm = document.querySelector(".email-form");
if (emailForm) {
  emailForm.addEventListener("submit", e => {
    e.preventDefault();
    processForm(emailForm);
  });
}