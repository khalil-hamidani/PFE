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
let ErrorCount = 0;

//Show input error messages
function showError(input) {
  input.parentElement.classList.add("required");
  ErrorCount++;
}

//show success
function showSucces(input) {
  input.parentElement.classList.remove("required");
  ErrorCount--;
}

//check email is valid
function checkEmail(input) {
  if (input.value.trim() === "") {
    showSucces(input);
    return;
  }
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSucces(input);
  } else {
    showError(input);
  }
}

//checkRequired fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input);
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
      checkRequired([FirstName, LastName, Email, TheDate, Description]);
      checkEmail(Email);
      checkEmail(Email2);
      break;

    case "companyForm":
      checkRequired([FirstName, LastName, Email, companyName, TheDate, Description]);
      checkEmail(Email);
      checkEmail(Email2);
      break;

    case "GovForm":
      checkRequired([FirstName, LastName, Email, companyName, TheDate, Description]);
      checkEmail(Email);
      checkEmail(Email2);
      break;
  }

  if (ErrorCount <= 0) {
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
