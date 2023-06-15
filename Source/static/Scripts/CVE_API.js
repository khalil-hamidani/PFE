document.addEventListener('DOMContentLoaded', function() {
  const API_KEY = '8d14caa1-50b1-4c5d-ac3f-c1525a75b781';
  const API_URL = `https://services.nvd.nist.gov/rest/json/cves/2.0?resultsPerPage=2`;

  // Make an API request to retrieve the CVE data
  fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      // Process the retrieved data and populate the CVE container
      populateCVEContainer(data.vulnerabilities);
    })
    .catch(error => {
      console.log('An error occurred while fetching CVE data:', error);
    });

  // Function to populate the CVE container with data
  function populateCVEContainer(cveData) {
    var cveContainer = document.getElementById("cve-carousel");

    // // Check if cveContainer exists
    // if (!cveContainer) {
    //   console.error('CVE container element not found.');
    //   return;
    // }

    // Loop through each CVE object and generate HTML for display
    cveData.forEach(function(cve) {
      var html = `
      <div class="item rating2">
            <a href="">
                <div class="item-header">
                    <span class="date">12 MAY 2012</span>
                    <span class="rating">Rating: <span class="score"><i class="fa-solid fa-circle ratingdot2"></i>High</span></span>
                </div>
                <h3 class="title">${cve.id}</h3>
                <p class="descreption"></p>
                <a href="#" class="read-more"><i class="fa-solid fa-arrow-right-long fa-2xl"></i></a>
            </a>
        </div>`;

      var div = document.createElement('div');
      div.innerHTML = html;
      // Append the generated HTML to the 'cve-container' div
      cveContainer.prepend(div);
    });
  }
});

// document.addEventListener('DOMContentLoaded', function() {
// const API_KEY = '8d14caa1-50b1-4c5d-ac3f-c1525a75b781';
// const API_URL = `https://services.nvd.nist.gov/rest/json/cves/2.0?resultsPerPage=2`;

// /**
//  * Fetches and processes the CVE data from the API URL
//  * @returns {Promise<void>} A promise that resolves when the data is processed
//  */
// async function fetchCVEData() {
//   try {
//     // Get the response from the API and parse it as JSON
//     const response = await fetch(API_URL);
//     const data = await response.json();

//     // Populate the CVE container with the retrieved data
//     populateCVEContainer(data.vulnerabilities);
//   } catch (error) {
//     // Log any errors that occur
//     console.log('An error occurred while fetching CVE data:', error);
//   }
// }

// function populateCVEContainer(cveData) {
//       var cveContainer = document.querySelector(".owl-carousel");

//       // Loop through each CVE object and generate HTML for display
//       cveData.forEach(function(cve) {
//         const enDescription = cveData.cve.descriptions.find(desc => desc.lang === 'en');
//         const enDescriptionValue = enDescription ? enDescription.value : '';
//         var html = `
//         <div class="item rating3">
//               <a href="">
//                   <div class="item-header">
//                       <span class="date"></span>
//                       <span class="rating">Rating: <span class="score"><i class="fa-solid fa-circle ratingdot3"></i>High</span></span>
//                   </div>
//                   <h3 class="title">${cve.id}</h3>
//                   <p class="descreption">${enDescriptionValue}</p>
//                   <a href="#" class="read-more"><i class="fa-solid fa-arrow-right-long fa-2xl"></i></a>
//               </a>
//           </div>`;
  
//         // Append the generated HTML to the 'cve-container' div
//         cveContainer.innerHTML += html;
//       });
//     }});