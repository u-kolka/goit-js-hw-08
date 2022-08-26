import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', throttle(saveData, 500));
formEl.addEventListener('submit', submitForm);

const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');

const LOCALSTORAGE_KEY = "feedback-form-state";

let formData = {};
updateSavedData();

function saveData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function updateSavedData() {
  formData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};

  for (const elem in formData) {
    if (formData.hasOwnProperty(elem)) {
      inputEl.value = formData.email || '';
      textareaEl.value = formData.message || '';
    }
  }
}

function submitForm(e) {
  e.preventDefault();

  if (inputEl.value !== '' && textareaEl.value !== '') {
    console.log(formData);
    e.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);

  }
    for (const elem in formData) {
    delete formData[elem];
  }
}

