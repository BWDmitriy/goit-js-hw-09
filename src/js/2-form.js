const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
const email = form.elements.email;
const textarea = form.elements.message;

form.addEventListener('input', evt => {
  evt.preventDefault();

  const formData = {
    email: email.value,
    textarea: textarea.value,
  };

  saveFormData(formData);
});

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = {
    email: email.value,
    textarea: textarea.value,
  };

  saveFormData(formData);
  form.reset();
});

function saveFormData(formData) {
  const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];

  storedFormData.push(formData);

  localStorage.setItem('feedback-form-state', JSON.stringify(storedFormData));
}
