const agreementCheckbox = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');

agreementCheckbox.addEventListener('change', () => {
  submitButton.disabled = !agreementCheckbox.checked;
});

document.addEventListener('DOMContentLoaded', () => {
  const loginButton = document.getElementById('loginButton');
  const validateLogin = (event) => {
    event.preventDefault();

    const emailInput = document.querySelector('input[name="email"]').value;
    const passwordInput = document.querySelector('input[name="password"]').value;

    if (emailInput === 'tryber@teste.com' && passwordInput === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  };

  loginButton.addEventListener('click', validateLogin);
});
