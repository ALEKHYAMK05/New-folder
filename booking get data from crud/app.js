document.addEventListener('DOMContentLoaded', function () {
    // Make a GET request to retrieve previously saved appointments
    axios.get('https://crudcrud.com/api/b46c30180f224bc0bd1367324e224f8e/appointments')
      .then(response => {
        const appointmentsList = document.getElementById('appointmentsList');
  
        // Iterate through the appointments and display them
        response.data.forEach(appointment => {
          const listItem = document.createElement('li');
          listItem.textContent = `Date: ${appointment.date}, Time: ${appointment.time}, Client Name: ${appointment.clientName}`;
          appointmentsList.appendChild(listItem);
        });
      })
      .catch(error => {
        console.error('Error fetching appointments:', error);
      });
  });
  
  function bookAppointment() {
    // Get values from the form
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const clientName = document.getElementById('clientName').value;
  
    // Create an appointment object
    const appointmentObject = {
      date,
      time,
      clientName
    };
  
    // The URL of the CRUD API provided by crudcrud.com
    const apiUrl = 'https://crudcrud.com/api/b46c30180f224bc0bd1367324e224f8e/appointments';
  
    // Making a POST request to store the appointment object in the cloud
    axios.post(apiUrl, appointmentObject)
      .then(response => {
        console.log('Appointment stored successfully:', response.data);
        // Handle the response or perform additional actions if needed
        alert('Appointment booked successfully!');
      })
      .catch(error => {
        console.error('Error storing appointment:', error);
        // Handle errors appropriately
        alert('Error booking appointment. Please try again.');
      });
  }
  