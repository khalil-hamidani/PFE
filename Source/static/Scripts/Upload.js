
const form = document.querySelector("form");
const UPLOADER = document.querySelector(".uploadbox");
const fileInput = document.querySelector(".file-input");
const progressArea = document.querySelector(".progress-area");
const uploadedArea = document.querySelector(".uploaded-area");

// form click event
UPLOADER.addEventListener("click", () => {
  fileInput.click();
});

// file input change event
fileInput.onchange = () => {
  // clear the progress area
  progressArea.innerHTML = "";

  // upload the file to the browser's local storage
  let file = fileInput.files[0];
  let fileName = file.name;
  let fileData = new FileReader();
  fileData.readAsDataURL(file);
  fileData.onload = () => {
    let fileURL = fileData.result;
    let uploadedHTML = `<li class="row">
                            <div class="content upload">
                              <i class="fas fa-file-alt"></i>
                              <div class="details">
                                <span class="name">${fileName} • Uploaded</span>
                                <span class="size">${file.size}</span>
                              </div>
                            </div>
                            <i class="fa fa-remove"></i>
                          </li>`;
    uploadedArea.classList.remove("onprogress");
    uploadedArea.insertAdjacentHTML("afterbegin", uploadedHTML);
  };
};

// remove file event
uploadedArea.addEventListener("click", (event) => {
  if (event.target.classList.contains("fa-remove")) {
    let listItem = event.target.parentNode;
    uploadedArea.removeChild(listItem);
    
    // remove the file from the form data
    const fileInput = document.querySelector(".file-input");
    fileInput.value = null;
  }
});
