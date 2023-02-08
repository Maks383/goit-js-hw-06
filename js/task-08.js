const form = document.querySelector(".login-form");

form.addEventListener("submit", makeSubmit);

function makeSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (!email.value || !password.value) {
    return alert("Все поля должны быть заполнены!");
  }

  const formInfo = {
    email: email.value,
    password: password.value,
  };

  console.log(formInfo);
  event.currentTarget.reset();
}