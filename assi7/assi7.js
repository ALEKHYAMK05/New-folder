
const dataList = document.getElementById('dataList');

        // Check if there's existing data in local storage
        const existingData = JSON.parse(localStorage.getItem('personData')) || [];

        // Populate the data on the screen
        function displayData() {
            dataList.innerHTML = ''; // Clear the existing data
            existingData.forEach((data, index) => {
                const dataDiv = document.createElement('div');
                dataDiv.innerHTML = `
                    <p><strong>Name:</strong> ${data.name}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Phone Number:</strong> ${data.phone}</p>
                    <button id="delete${index}">Delete</button>
                `;
                dataList.appendChild(dataDiv);

                // Add click event listeners to the delete buttons
                document.getElementById(`delete${index}`).addEventListener('click', () => {
                    // Remove the data from both screen and storage
                    existingData.splice(index, 1);
                    localStorage.setItem('personData', JSON.stringify(existingData));
                    displayData(); // Refresh the displayed data
                });
            });
        }

        // Display existing data (if any)
        displayData();

        document.getElementById('save').addEventListener('click', function() {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;

            // Create a new object with the data
            const newData = {
                name,
                email,
                phone
            };

            // Append the new data to the existing data
            existingData.push(newData);

            // Store the updated data in local storage
            localStorage.setItem('personData', JSON.stringify(existingData));

            // Clear the input fields
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('phone').value = '';

            // Refresh the displayed data
            displayData();
        });
  
