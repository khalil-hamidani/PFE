const apiKey = '8d14caa1-50b1-4c5d-ac3f-c1525a75b781';
const cveId = 'CVE-2021-1234';

// Construct the API endpoint URL
const apiUrl = `https://services.nvd.nist.gov/rest/json/cve/${cveId}?cpeMatchString=&startIndex=0&resultsPerPage=20&pubStartDate=&pubEndDate=`;

// Send a GET request to the API endpoint with the API key
fetch(`${apiUrl}&api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        // Parse the JSON response and display the information on your website
        const cve = data.result.CVE_Items[0];
        const cveTitle = cve.cve.CVE_data_meta.ID;
        const cveDescription = cve.cve.description.description_data[0].value;
        const cveDate = cve.publishedDate;

        document.getElementById('cve-title').textContent = cveTitle;
        document.getElementById('cve-description').textContent = cveDescription;
        document.getElementById('cve-date').textContent = cveDate;
    })
    .catch(error => console.error(error));