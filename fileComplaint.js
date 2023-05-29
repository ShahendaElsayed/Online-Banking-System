// Array to store complaints
const complaints = [];

// Function to generate table rows for complaints
function generateComplaintRows() {
  const tableBody = document.querySelector('#complaintsTable tbody');

  // Clear existing table rows
  tableBody.innerHTML = '';

  // Generate new table rows
  complaints.forEach((complaint) => {
    const row = document.createElement('tr');
    const dateCell = document.createElement('td');
    const timeCell = document.createElement('td');
    const complaintCell = document.createElement('td');

    dateCell.textContent = complaint.date;
    complaintCell.textContent = complaint.complaint;
    timeCell.textContent = complaint.time;

    row.appendChild(dateCell);
    row.appendChild(timeCell);
    row.appendChild(complaintCell);
    tableBody.appendChild(row);
  });
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  // Get the complaint text
  const complaintTime = document.querySelector('#time').value.trim();
  const complaintText = document.querySelector('#complaint').value.trim();

  // Clear the complaint textarea
  document.querySelector('#date').value = '';
  document.querySelector('#time').value = '';
  document.querySelector('#complaint').value = '';

  // Get the current date and time
  const currentDate = new Date();
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString(undefined, dateOptions);

  // Create a new complaint object
  const newComplaint = {
    date: formattedDate,
    time: complaintTime,
    complaint: complaintText
  };

  // Add the new complaint to the array
  complaints.push(newComplaint);

  // Generate the table rows for the complaints
  generateComplaintRows();
  
  // Reset the form
  event.target.reset();
}

// Add form submission event listener
const complaintForm = document.querySelector('#complaintForm');
complaintForm.addEventListener('submit', handleFormSubmit);

// Generate initial table rows for complaints
generateComplaintRows();
