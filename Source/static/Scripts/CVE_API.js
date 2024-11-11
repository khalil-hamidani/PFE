$(document).ready(function () {
  const API_KEY = "8d14caa1-50b1-4c5d-ac3f-c1525a75b781";
  const API_URL = `https://services.nvd.nist.gov/rest/json/cves/2.0?resultsPerPage=20`;

  // Initialize the Owl Carousel
  var owlCarousel = $(".owl-carousel");
  owlCarousel.owlCarousel({
    items: 3,
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplayTimeout: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // Make an API request to retrieve the CVE data
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      // Process the retrieved data and populate the CVE container
      populateCVEContainer(data.vulnerabilities);
    })
    .catch((error) => {
      console.log("An error occurred while fetching CVE data:", error);
    });

  // Handle mousewheel events on the Owl Carousel
  owlCarousel.on("mousewheel", ".owl-stage", function (e) {
    if (e.deltaY > 0) {
      owlCarousel.trigger("prev.owl.carousel");
    } else {
      owlCarousel.trigger("next.owl.carousel");
    }
    e.preventDefault();
  });

  // Function to populate the CVE container with data
  function populateCVEContainer(cveData) {
    // Get the Owl Carousel's container element
    var owlContainer = owlCarousel.owlCarousel();

    // Loop through each CVE object and generate HTML for display
    cveData.forEach(function (cve) {
      var html = `
      <div class="item rating3">
            <a href="${cve.cve.references[0].url}">
                <div class="item-header">
                    <span class="date">${(cve.cve.published).slice(0, 10)}</span>
                    <span class="rating">Rating: <span class="score"><i class="fa-solid fa-circle ratingdot3"></i></span>
                    ${cve.cve.metrics.cvssMetricV2[0].baseSeverity}</span>
                </div>
                <h3 class="title">${cve.cve.id}</h3>
                <p class="descreption">${cve.cve.descriptions[0].value}</p>
                <a href="#" class="read-more"><i class="fa-solid fa-arrow-right-long fa-2xl"></i></a>
            </a>
        </div>`;

      // Use the 'add' method to add the new item to the Owl Carousel
      owlContainer.trigger("add.owl.carousel", [$(html)]);
    });

    // Refresh the Owl Carousel after adding new items
    owlContainer.trigger("refresh.owl.carousel");
  }
});

// document.addEventListener('DOMContentLoaded', function() {
//   const API_KEY = '8d14caa1-50b1-4c5d-ac3f-c1525a75b781';
//   const API_URL = `https://services.nvd.nist.gov/rest/json/cves/2.0?resultsPerPage=2`;

//   // Make an API request to retrieve the CVE data
//   fetch(API_URL)
//     .then(response => response.json())
//     .then(data => {
//       // Process the retrieved data and populate the CVE container
//       populateCVEContainer(data.vulnerabilities);
//       owlCarousel.refresh();
//     })
//     .catch(error => {
//       console.log('An error occurred while fetching CVE data:', error);
//     });

//   // Function to populate the CVE container with data
//   function populateCVEContainer(cveData) {
//     var cveContainer = document.getElementById("cve-carousel");
//     // Loop through each CVE object and generate HTML for display
//     cveData.forEach(function(cve) {
//       var html = `
//       <div class="item rating2">
//             <a href="">
//                 <div class="item-header">
//                     <span class="date"></span>
//                     <span class="rating">Rating: <span class="score"><i class="fa-solid fa-circle ratingdot2"></i></span></span>
//                 </div>
//                 <h3 class="title">${cve.cve.id}</h3>
//                 <p class="descreption"></p>
//                 <a href="#" class="read-more"><i class="fa-solid fa-arrow-right-long fa-2xl"></i></a>
//             </a>
//         </div>`;

//       var div = document.createElement('div');
//       console.log(cve);
//       console.log(cve.id);
//       div.innerHTML = html;
//       console.log(div);

//       // Append the generated HTML to the 'cve-container' div
//       cveContainer.prepend(div);
//     });
//   }
// });
// $(document).ready(function () {
//   var owl = $('.owl-carousel');
//   owl.owlCarousel({
//       items: 3,
//       loop: true,
//       margin: 10,
//       nav: false,
//       dots: true,
//       autoplayTimeout: 1000,
//       responsive: {
//           0: {
//               items: 1,
//           },
//           600: {
//               items: 2,
//           },
//           1000: {
//               items: 3,
//           },
//       },
//   });
//   owl.on('mousewheel', '.owl-stage', function (e) {
//       if (e.deltaY > 0) {
//           owl.trigger('prev.owl');
//       } else {
//           owl.trigger('next.owl');
//       }
//       e.preventDefault();
//   });
// })

// document.addEventListener('DOMContentLoaded', function() {
// const API_KEY = '8d14caa1-50b1-4c5d-ac3f-c1525a75b781';
// const API_URL = `https://services.nvd.nist.gov/rest/json/cves/2.0?resultsPerPage=2`;

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
//       var cveContainer = document.querySelector("cve-carousel");

//       // Loop through each CVE object and generate HTML for display
//       cveData.forEach(function(cve) {
//         var html = `
//         <div class="item rating3">
//               <a href="">
//                   <div class="item-header">
//                       <span class="date"></span>
//                       <span class="rating">Rating: <span class="score"><i class="fa-solid fa-circle ratingdot3"></i>High</span></span>
//                   </div>
//                   <h3 class="title">${cve.id}</h3>
//                   <p class="descreption"></p>
//                   <a href="#" class="read-more"><i class="fa-solid fa-arrow-right-long fa-2xl"></i></a>
//               </a>
//           </div>`;

//         // Append the generated HTML to the 'cve-container' div
//         var div = document.createElement('div');
//         div.innerHTML += html;
//         cveContainer.prepend(div);
//       });
//     }});
