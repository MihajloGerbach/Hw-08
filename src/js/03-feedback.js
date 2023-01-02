import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('input'),
  textares: document.querySelector('textarea'),
};
const FORM_STATS = 'feedback-form-state';
const feedbackForm = JSON.parse(localStorage.getItem(FORM_STATS)) || {};

populateFormInput();

refs.form.addEventListener('input', throttle(onForminput, 500));
refs.form.addEventListener('submit', onSubmitForm);

function onForminput({ target }) {
  feedbackForm[target.name] = target.value;

  localStorage.setItem(FORM_STATS, JSON.stringify(feedbackForm));
}

function onSubmitForm(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(FORM_STATS)));
  localStorage.removeItem(FORM_STATS);
}

function populateFormInput() {
  const saveDateForm = JSON.parse(localStorage.getItem(FORM_STATS));
  if (saveDateForm) {
    if (saveDateForm.email) {
      refs.inputEmail.value = saveDateForm.email;
    }
    if (saveDateForm.message) {
      refs.textares.value = saveDateForm.message;
    }
  }
}

