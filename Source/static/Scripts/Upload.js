const form = document.querySelector("form");
const UPLOADER = document.querySelector(".uploadbox");
const fileInput = document.querySelector(".file-input");
const progressArea = document.querySelector(".progress-area");
const uploadedArea = document.querySelector(".uploaded-area");

const MAX_FILE_SIZE = 16 * 1024 * 1024; // 16 MB in bytes

// form click event
UPLOADER.addEventListener("click", () => {
  fileInput.click();
});

// file input change event
fileInput.onchange = () => {
  // clear the progress area
  progressArea.innerHTML = "";

  // Remove previously uploaded file (if any)
  const previousUploadedFile = uploadedArea.querySelector(".row");
  if (previousUploadedFile) {
    uploadedArea.removeChild(previousUploadedFile);
  }

  // upload the file to the browser's local storage
  let file = fileInput.files[0];
  if (file === undefined || file === null || file.size === 0) {
    // The user did not upload a file
    return;
  }
  if (file.size > MAX_FILE_SIZE) {
    // File size exceeds the allowed limit, inform the user
    alert("File size exceeds the allowed limit of 16 MB.");
    // Clear the file input value to prevent upload
    fileInput.value = null;
    return;
  }
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
    // Replace the previous uploaded file (if any) with the new one
    uploadedArea.innerHTML = uploadedHTML;
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
