var form = document.getElementById("my-form");
var lockModal = document.getElementById("lock-modal");
var loadingCircle = document.getElementById("loading-circle");
  

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);

  lockModal.style.display = "block";
  loadingCircle.style.display = "block";

  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    lockModal.style.display = "none";
    loadingCircle.style.display = "none";
    status.classList.add('success');
    status.innerHTML = "Message successfully sent.";
    form.reset()
  }).catch(error => {
    lockModal.style.display = "none";
    loadingCircle.style.display = "none";
    status.classList.add('error');
    status.innerHTML = "Oops! There was a problem sending your message.";
  });
}
form.addEventListener("submit", handleSubmit)