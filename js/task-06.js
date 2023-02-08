const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
  if (event.target.value.length == input.getAttribute("data-length")) {
    input.classList.add("valid");
    if (input.classList.contains("invalid")) {
      input.classList.remove("invalid");
    }
  } else {
    input.classList.add("invalid");
    if (input.classList.contains("valid")) {
      input.classList.remove("valid");
    }
  }
});