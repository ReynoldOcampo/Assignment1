// Display the name of the picture after 10 seconds
document.addEventListener('DOMContentLoaded', function() {
    // Wait for DOM content to be fully loaded
    setTimeout(function() {
        // Get the placeholder element for the picture name
        var pictureNamePlaceholder = document.getElementById('picture-name-placeholder');
        // Set the text content of the placeholder to the name of the picture
        pictureNamePlaceholder.textContent = 'Reynold Ocampo';
    }, 10000); // Delay in milliseconds (10 seconds)
});


// Set current date in the footer
// Get the current year
var currentYear = new Date().getFullYear();

// Set your full name
var fullName = "REYNOLD OCAMPO";

// Generate the footer content
var footerContent = "&copy; " + fullName + " " + currentYear;

// Set the generated footer content
document.getElementById("footer-content").innerHTML = footerContent;


// Mark to Grade Converter function
function convertMark() {
    var markInput = document.getElementById('mark-input').value;
    var validationMessage = document.getElementById('validation-message');
    var gradeOutput = document.getElementById('grade');

    // Clear previous messages
    validationMessage.textContent = '';
    gradeOutput.textContent = '';

    // Validate mark input
    var mark = parseFloat(markInput);
    if (isNaN(mark)) {
        validationMessage.textContent = 'Please enter a valid number.';
        return;
    }

    if (mark < 0 || mark > 100) {
        validationMessage.textContent = 'Mark must be between 0 and 100.';
        return;
    }

    // Convert mark to grade
    if (mark >= 90) {
        gradeOutput.textContent = 'Grade: A';
    } else if (mark >= 80) {
        gradeOutput.textContent = 'Grade: B';
    } else if (mark >= 70) {
        gradeOutput.textContent = 'Grade: C';
    } else if (mark >= 50) {
        gradeOutput.textContent = 'Grade: D';
    } else {
        gradeOutput.textContent = 'Grade: F';
    }
}


// Staff Page function
// Wrap the code inside $(document).ready() to ensure it executes after the DOM is fully loaded
    // Define staff data
    var dataSet = [   
        [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
        [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
        [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
        [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
        [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
        [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ],
        [ "Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000" ],
        [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
        [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
        [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
        [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
        [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
        [ "Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600" ],
        [ "Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500" ],
        [ "Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750" ],
        [ "Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500" ],
        [ "Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000" ],
        [ "Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500" ],
        [ "Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000" ],
        [ "Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500" ],
        [ "Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000" ],
        [ "Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000" ],
        [ "Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450" ],
        [ "Doris Wilder", "Sales Assistant", "Sidney", "3023", "2010/09/20", "$85,600" ],
        [ "Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000" ],
        [ "Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575" ],
        [ "Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650" ],
        [ "Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850" ],
        [ "Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000" ],
        [ "Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000" ],
        [ "Michelle House", "Integration Specialist", "Sidney", "2769", "2011/06/02", "$95,400" ],
        [ "Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500" ],
        [ "Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000" ],
        [ "Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500" ],
        [ "Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050" ],
        [ "Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675" ]
    ];

    // Function to populate staff data in the table
function populateTable(data) {
    var tableBody = document.getElementById('staffData');
    tableBody.innerHTML = ''; // Clear existing data

    // Iterate over the data array and create table rows
    data.forEach(function (staff) {
        var row = document.createElement('tr');
        staff.forEach(function (cellData) {
            var cell = document.createElement('td');
            cell.textContent = cellData;
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    });
}

// Function to sort staff data by name
function sortByName() {
    dataSet.sort(function (a, b) {
        return a[0].localeCompare(b[0]);
    });
    populateTable(dataSet);
}

// Function to sort staff data by salary
function sortBySalary() {
    dataSet.sort(function (a, b) {
        var salaryA = parseFloat(a[5].replace(/[^\d.]/g, ''));
        var salaryB = parseFloat(b[5].replace(/[^\d.]/g, ''));
        return salaryA - salaryB;
    });
    populateTable(dataSet);
}

// Add event listeners for sorting buttons
document.getElementById('sortByName').addEventListener('click', sortByName);
document.getElementById('sortBySalary').addEventListener('click', sortBySalary);

// Initial population of the table
populateTable(dataSet);


// Weather Page function
function convertTemperature() {
    var fahrenheitInput = document.getElementById("temperature-input").value;
    var celsiusOutput = document.getElementById("celsius-output");
    var kelvinOutput = document.getElementById("kelvin-output");

    // Check if the input is a valid number
    if (isNaN(fahrenheitInput) || fahrenheitInput === "") {
        celsiusOutput.textContent = "Please enter a valid temperature";
        kelvinOutput.textContent = "";
        return;
    }

    var fahrenheit = parseFloat(fahrenheitInput);

    // Convert Fahrenheit to Celsius
    var celsius = (fahrenheit - 32) * 5 / 9;

    // Convert Celsius to Kelvin
    var kelvin = celsius + 273.15;

    // Display the converted temperatures
    celsiusOutput.textContent = "Temperature in Celsius: " + celsius.toFixed(2) + "°C";
    kelvinOutput.textContent = "Temperature in Kelvin: " + kelvin.toFixed(2) + "K";
}
// Get the current year
var currentYear = new Date().getFullYear();

// Update the content of the current year element
document.getElementById("current-year").textContent = currentYear;
