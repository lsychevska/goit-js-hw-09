const FEEDBACK_STATE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const formElements = {
  form: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('input[name="email"]'),
  messageInput: document.querySelector('textarea[name="message"]'),
  submitButton: document.querySelector('button[type="submit"]'),
};

const { form, emailInput, messageInput, submitButton } = formElements;

//----------------STYLE------------------------

Object.assign(form.style, {
  'font-family': '"Montserrat", sans-serif',
  display: 'flex',
  'align-items': 'flex-start',
  'justify-content': 'flex-start',
  'flex-direction': 'column',
  gap: '16px',
  'border-radius': '8px',
  padding: '24px',
  'max-width': '408px',
  'max-height': '296px',
});

const labels = document.querySelectorAll('.feedback-form label');
labels.forEach(label => {
  Object.assign(label.style, {
    display: 'flex',
    'align-items': 'flex-start',
    'justify-content': 'flex-start',
    'flex-direction': 'column',
    gap: '8px',
    'font-size': '16px',
    'line-height': '1.5',
    'letter-spacing': '0.04em',
    color: '#2e2f42',
  });
});

Object.assign(emailInput.style, {
  border: '1px solid #808080',
  'border-radius': '4px',
  width: '322px',
  height: '40px',
});

Object.assign(messageInput.style, {
  border: '1px solid #808080',
  'border-radius': '4px',
  width: '322px',
  height: '80px',
});

Object.assign(submitButton.style, {
  display: 'flex',
  'align-items': 'center',
  'justify-content': 'center',
  'flex-direction': 'row',
  gap: '10px',
  'border-radius': '8px',
  padding: '8px 16px',
  width: '95px',
  height: '40px',
  background: '#4e75ff',
  'font-weight': '500',
  'font-size': '16px',
  'line-height': '1.5',
  'letter-spacing': '0.04em',
  color: '#fff',
});

//-------------------------------------

populateTextFields();

function populateTextFields() {
  const localStorageData = localStorage.getItem(FEEDBACK_STATE_KEY);
  if (localStorageData) {
    emailInput.value = JSON.parse(localStorageData).email;
    messageInput.value = JSON.parse(localStorageData).message;
  }
}

form.addEventListener('input', onTextInput);

function onTextInput(event) {
  if (event.target == emailInput) formData.email = event.target.value;
  if (event.target == messageInput) formData.message = event.target.value;
  localStorage.setItem(FEEDBACK_STATE_KEY, JSON.stringify(formData));
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  if (!emailInput.value || !messageInput.value) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  formData = {};
  localStorage.removeItem(FEEDBACK_STATE_KEY);
  event.currentTarget.reset();
}
