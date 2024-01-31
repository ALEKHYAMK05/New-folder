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
            
            // Add edit and delete icons and attach click event listeners
            const editIcon = document.createElement('span');
            editIcon.innerHTML = ' &#9998;'; // Pencil symbol representing edit
            editIcon.style.cursor = 'pointer';
            editIcon.addEventListener('click', () => editAppointment(appointment));
  
            const deleteIcon = document.createElement('span');
            deleteIcon.innerHTML = ' &#10006;'; // X symbol representing delete
            deleteIcon.style.cursor = 'pointer';
            deleteIcon.addEventListener('click', () => deleteAppointment(appointment._id));
  
            listItem.appendChild(editIcon);
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
  
    function editAppointment(appointment) {
      // Populate the edit form with the details of the selected appointment
      document.getElementById('editDate').value = appointment.date;
      document.getElementById('editTime').value = appointment.time;
      document.getElementById('editClientName').value = appointment.clientName;
  
      // Show the edit form and hide the main form
      document.getElementById('editForm').style.display = 'block';
      document.getElementById('date').parentNode.style.display = 'none';
      document.getElementById('time').parentNode.style.display = 'none';
      document.getElementById('clientName').parentNode.style.display = 'none';
    }
  
    function updateAppointment() {
      // Get values from the edit form
      const date = document.getElementById('editDate').value;
      const time = document.getElementById('editTime').value;
      const clientName = document.getElementById('editClientName').value;
  
      // Create an updated appointment object
      const updatedAppointment = {
        date,
        time,
        clientName
      };
  
      // The URL of the CRUD API provided by crudcrud.com
      const apiUrl = 'https://crudcrud.com/api/b46c30180f224bc0bd1367324e224f8e/appointments';
  
      // Make a PUT request to update the appointment with the updated details
      axios.put(`${apiUrl}/${selectedAppointment._id}`, updatedAppointment)
        .then(response => {
          console.log('Appointment updated successfully:', response.data);
          // After successful update, hide the edit form, show the main form, and refresh the list
          document.getElementById('editForm').style.display = 'none';
          document.getElementById('date').parentNode.style.display = 'block';
          document.getElementById('time').parentNode.style.display = 'block';
          document.getElementById('clientName').parentNode.style.display = 'block';
          loadAppointments(); // Refresh the list
        })
        .catch(error => {
          console.error('Error updating appointment:', error);
        });
    }
  });
  