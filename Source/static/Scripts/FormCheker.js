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

function showError(input) {
  // Add required class to input field's parent element
  input.parentElement.classList.add("required");
  console.log("error");
  // Increment global error count
  return false;
}

//show success
function showSucces(input) {
  input.parentElement.classList.remove("required");
  return true;
}

//check email is valid
function checkEmail(input) {
  if (input.value.trim() === "") {
    return true;
  }
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    return showSucces(input);
  } else {
    return showError(input);
  }
}

//checkRequired fields
function checkRequired(inputArr) {
  let checker = true;
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input);
      checker = false;
    } else {
      showSucces(input);
    }
  });
  return checker;
}

//Event Listeners
TheForm.addEventListener("submit", function (e) {
  let good = true;
  e.preventDefault();
  switch (body) {
    case "personalForm":
      good = checkEmail(Email) && checkEmail(Email2) && checkRequired([FirstName, LastName, Email, TheDate, Description]);
      break;

    case "companyForm":
      good = checkEmail(Email) && checkEmail(Email2) && checkRequired([FirstName, LastName, Email, companyName, TheDate, Description]);
      break;

    case "GovForm":
      good = checkEmail(Email) && checkEmail(Email2) && checkRequired([FirstName, LastName, Email, companyName, TheDate, Description]);
      break;
  }
  console.log(good);
  if (good) {
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
