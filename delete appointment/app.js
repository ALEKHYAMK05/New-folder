document.addEventListener('DOMContentLoaded', function () {
    loadAppointments(); // Load appointments on page load
  
    function loadAppointments() {
      // Make a GET request to retrieve previously saved appointments
      axios.get('https://crudcrud.com/api/b46c30180f224bc0bd1367324e224f8e/appointments')
        .then(response => {
          const appointmentsList = document.getElementById('appointmentsList');
  
          // Clear existing list items
          appointmentsList.innerHTML = '';
  
          // Iterate through the appointments and display them
          response.data.forEach(appointment => {
            const listItem = document.createElement('li');
            listItem.textContent = `Date: ${appointment.date}, Time: ${appointment.time}, Client Name: ${appointment.clientName}`;
            
            // Add a delete icon and attach a click event listener
            const deleteIcon = document.createElement('span');
            deleteIcon.innerHTML = ' &#10006;'; // X symbol representing delete
            deleteIcon.style.cursor = 'pointer';
            deleteIcon.addEventListener('click', () => deleteAppointment(appointment._id));
  
            listItem.appendChild(deleteIcon);
            appointmentsList.appendChild(listItem);
          });
        })
        .catch(error => {
          console.error('Error fetching appointments:', error);
        });
    }
  
    function bookAppointment() {
      // Similar to your existing code for booking appointments, make a POST request to store the appointment object
      // ...
  
      // After successfully booking the appointment, you can refresh the page or update the displayed list
      loadAppointments(); // Refresh the list
    }
  
    function deleteAppointment(appointmentId) {
      // Make a DELETE request to delete the appointment with the given ID
      axios.delete(`https://crudcrud.com/api/b46c30180f224bc0bd1367324e224f8e/appointments/${appointmentId}`)
        .then(response => {
          console.log('Appointment deleted successfully:', response.data);
          // After successful deletion, remove the appointment from the displayed list
          loadAppointments(); // Refresh the list
        })
        .catch(error => {
          console.error('Error deleting appointment:', error);
        });
    }
  });
  