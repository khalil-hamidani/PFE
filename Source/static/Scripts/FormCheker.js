const body = document.body.id;
const TheForm = document.querySelector("form");
const FirstName = document.getElementById("first_name");
const LastName = document.getElementById("last_name");
const Email = document.getElementById("contact_email");
const Email2 = document.getElementById("email2");
const companyName = document.getElementById("organ-name");
const TheDate = document.getElementById("Date");
const Description = document.getElementById("message");
const formError = document.querySelector(".formErrorText");
let ErrorCount = false;

function showError(input) {
  // Add required class to input field's parent element
  input.parentElement.classList.add("required");
  // Increment global error count
  return true;
}

//show success
function showSucces(input) {
  input.parentElement.classList.remove("required");
  return false;
}

//check email is valid
function checkEmail(input) {
  if (input.value.trim() === "") {
    return;
  }
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    return showSucces(input);
  } else {
    return showError(input);
  }
  return;
}

//checkRequired fields
function checkRequired(inputArr) {
  let checker = false;
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input);
      checker = true;
    } else {
      showSucces(input);
    }
  });
}

//Event Listeners
TheForm.addEventListener("submit", function (e) {
  e.preventDefault();
  switch (body) {
    case "personalForm":
      checkEmail(Email);
      checkEmail(Email2);
      checkRequired([FirstName, LastName, Email, TheDate, Description]);
      break;

    case "companyForm":
      checkEmail(Email);
      checkEmail(Email2);
      checkRequired([FirstName, LastName, Email, companyName, TheDate, Description]);
      break;

    case "GovForm":
      checkEmail(Email);
      checkEmail(Email2);
      checkRequired([FirstName, LastName, Email, companyName, TheDate, Description]);
      break;
  }
  console.log(ErrorCount);
  if (!ErrorCount) {
    TheForm.submit();
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
    formError.classList.add("formError");
  }
});

//! prevent form from exiting

function warn(event) {
  event.preventDefault();
  event.returnValue = ""; // Required for Chrome and Firefox
  const confirmationMessage = "Are you sure you want to leave this page?";
  showModal(confirmationMessage);
}

function showModal(message) {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
      <div class="modal-content">
        <p>${message}</p>
        <div>
          <button class="confirm-btn">Yes</button>
          <button class="cancel-btn">No</button>
        </div>
      </div>
    `;
  document.body.appendChild(modal);

  const confirmBtn = modal.querySelector(".confirm-btn");
  const cancelBtn = modal.querySelector(".cancel-btn");

  confirmBtn.addEventListener("click", () => {
    closeModal();
    window.removeEventListener("beforeunload", warn);
    window.history.back();
  });

  cancelBtn.addEventListener("click", () => {
    closeModal();
  });

  function closeModal() {
    modal.remove();
  }
}
window.addEventListener("beforeunload", warn);

TheForm.addEventListener("submit", () => {
  window.removeEventListener("beforeunload", warn);
});
