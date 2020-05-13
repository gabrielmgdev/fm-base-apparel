document.addEventListener('DOMContentLoaded', main());

function main() {
  const contactForm = document.querySelector('#contact-form');
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = contactForm.querySelector('#email').value;
    if (email === '') {
      displayErrorMsg('Email is required');
    } else if (!isValidEmail(email)) {
      displayErrorMsg('Please provide a valid email');
    } else {
      // Clear form
      contactForm.querySelector('#email').value = '';
      // Hide error message
      const formText = contactForm.querySelector('#form-text');
      formText.innerHTML = '';
      formText.classList.add('d-none');
      // Remove invalid class to email input
      const emailInput = contactForm.querySelector('input[name="email"]');
      emailInput.classList.remove('invalid');
      alert('You are now suscribed!');
    }
  });
}

function isValidEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function displayErrorMsg(msg) {
  const contactForm = document.querySelector('#contact-form');

  // Display error message
  const formText = contactForm.querySelector('#form-text');
  formText.innerHTML = msg;
  formText.classList.remove('d-none');
  // Add invalid class to email input
  const emailInput = contactForm.querySelector('input[name="email"]');
  emailInput.classList.add('invalid');
}
