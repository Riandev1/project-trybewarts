document.addEventListener("DOMContentLoaded", function() {
  const loginButton = document.getElementById("loginButton");
  loginButton.addEventListener("click", validateLogin);

  function validateLogin(event) {
    event.preventDefault(); 

    const emailInput = document.querySelector('input[name="email"]').value;
    const passwordInput = document.querySelector('input[name="password"]').value;

    if (emailInput === "tryber@teste.com" && passwordInput === "123456") {
      alert("Olá, Tryber!");
    } else {
      alert("Email ou senha inválidos.");
    }
  }
});
