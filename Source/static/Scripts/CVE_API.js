const API_KEY = '8d14caa1-50b1-4c5d-ac3f-c1525a75b781';
const API_URL = 'https://services.nvd.nist.gov/rest/json/cves/2.0';


// Replace 'CVE-2021-1234' with the CVE ID you want to look up
const cveId = 'CVE-2021-1234';

// Construct the API endpoint URL with the CVE ID and API key
const endpointUrl = `${API_URL}/${cveId}?${API_KEY}`;

// Send a GET request to the API endpoint URL
fetch(endpointUrl)
  .then(response => response.json())
  .then(data => {
    // Extract the relevant information from the JSON response
    const cveTitle = data.result.CVE_Items[0].cve.CVE_data_meta.ID;
    const cveDescription = data.result.CVE_Items[0].cve.description.description_data[0].value;
    
    // Display the CVE information on your website as needed
    document.getElementById('cve-title').textContent = cveTitle;
    document.getElementById('cve-description').textContent = cveDescription;
  })
  .catch(error => console.error(error));