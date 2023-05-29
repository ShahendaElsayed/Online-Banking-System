// Sample reminders data (replace with your own data)
const reminders = [];

// Function to generate table rows for reminders
function generateReminderRows() {
  const tableBody = document.querySelector('#remindersTable tbody');

  // Clear existing table rows
  tableBody.innerHTML = '';

  // Generate new table rows
  reminders.forEach((reminder, index) => {
    const row = document.createElement('tr');
    const contentCell = document.createElement('td');
    const dateCell = document.createElement('td');
    const timeCell = document.createElement('td');
    const importanceCell = document.createElement('td');

    contentCell.textContent = reminder.content;
    dateCell.textContent = reminder.date;
    timeCell.textContent = reminder.time;
    importanceCell.textContent = reminder.importance;

    row.appendChild(contentCell);
    row.appendChild(dateCell);
    row.appendChild(timeCell);
    row.appendChild(importanceCell);

    tableBody.appendChild(row);
  });
}

// Function to handle form submission and add a new reminder
function addReminder(event) {
  event.preventDefault();

  // Get form input values
  const content = document.querySelector('#content').value;
  const date = document.querySelector('#date').value;
  const time = document.querySelector('#time').value;
  const importance = document.querySelector('#importance').value;

  // Create new reminder object
  const reminder = {
    content: content,
    date: date,
    time: time,
    importance: importance
  };

  // Add the reminder to the array
  reminders.push(reminder);

  // Generate table rows for reminders
  generateReminderRows();

  // Reset the form
  event.target.reset();
}

// Event listener for form submission
const form = document.querySelector('#reminderForm');
form.addEventListener('submit', addReminder);
