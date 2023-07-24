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
  if (file === undefined || file === null || file.size === 0) {
    // The user did not upload a file
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

// const form = document.querySelector("form");
// const UPLOADER = document.querySelector(".uploadbox");
// const fileInput = document.querySelector(".file-input");
// const progressArea = document.querySelector(".progress-area");
// const uploadedArea = document.querySelector(".uploaded-area");

// // form click event
// UPLOADER.addEventListener("click", () => {
//   fileInput.click();
// });

// // file input change event
// fileInput.addEventListener("change", () => {
//   // clear the progress area
//   progressArea.innerHTML = "";

//   // get the files
//   let files = fileInput.files;

//   // iterate over the files
//   for (let file of files) {
//     // get the file name
//     let fileName = file.name;

//     // if the file name length is greater than 12, split it and add "..."
//     if (fileName.length >= 12) {
//       let splitName = fileName.split(".");
//       fileName = splitName[0].substring(0, 13) + "... ." + splitName[1];
//     }

//     // upload the file to the browser's local storage
//     let fileData = new FileReader();
//     fileData.readAsDataURL(file);
//     fileData.onload = () => {
//       let fileURL = fileData.result;
//       let uploadedHTML = `<li class="row">
//                             <div class="content upload">
//                               <i class="fas fa-file-alt"></i>
//                               <div class="details">
//                                 <span class="name">${fileName} • Uploaded</span>
//                                 <span class="size">${file.size}</span>
//                               </div>
//                             </div>
//                             <i class="fa fa-remove"></i>
//                           </li>`;
//       uploadedArea.classList.remove("onprogress");
//       uploadedArea.insertAdjacentHTML("afterbegin", uploadedHTML);
//     };
//   }
// });

// // remove file event
// uploadedArea.addEventListener("click", (event) => {
//   if (event.target.classList.contains("fa-remove")) {
//     let listItem = event.target.parentNode;
//     uploadedArea.removeChild(listItem);
    
//     // remove the file from the form data
//     const fileInput = document.querySelector(".file-input");
//     fileInput.value = null;
//   }
// });
