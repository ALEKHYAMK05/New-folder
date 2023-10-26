const dataList = document.getElementById('dataList');
let editIndex = -1; // To track the currently editing entry


const existingData = JSON.parse(localStorage.getItem('personData')) || [];


function displayData() {
    dataList.innerHTML = ''; // Clear the existing data
    existingData.forEach((data, index) => {
        const dataDiv = document.createElement('div');
        dataDiv.innerHTML = `
            <p><strong>Name:</strong> <span id="name${index}">${data.name}</span></p>
            <p><strong>Email:</strong> <span id="email${index}">${data.email}</span></p>
            <p><strong>Phone Number:</strong> <span id="phone${index}">${data.phone}</span></p>
            <button id="edit${index}">Edit</button>
            <button id="delete${index}">Delete</button>
        `;
        dataList.appendChild(dataDiv);

      
        document.getElementById(`edit${index}`).addEventListener('click', () => {
            editIndex = index;
            // Populate the input fields with the data for editing
            document.getElementById('name').value = data.name;
            document.getElementById('email').value = data.email;
            document.getElementById('phone').value = data.phone;
        });

        
        document.getElementById(`delete${index}`).addEventListener('click', () => {
            // Remove the data from both screen and storage
            existingData.splice(index, 1);
            localStorage.setItem('personData', JSON.stringify(existingData));
            displayData(); // Refresh the displayed data
        });
    });
}


displayData();

document.getElementById('save').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (editIndex === -1) {
   
        const newData = {
            name,
            email,
            phone
        };

       
        existingData.push(newData);
    } else {
        // Edit existing data
        existingData[editIndex] = {
            name,
            email,
            phone
        };
        editIndex = -1; 
    }

    
    localStorage.setItem('personData', JSON.stringify(existingData));

    
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';

    
    displayData();
});
