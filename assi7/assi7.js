
const existingData = JSON.parse(localStorage.getItem('personData')) || [];


if (existingData.length > 0) {
    const lastData = existingData[existingData.length - 1];
    document.getElementById('name').value = lastData.name;
    document.getElementById('email').value = lastData.email;
    document.getElementById('phone').value = lastData.phone;
}

document.getElementById('save').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    
    const newData = {
        name,
        email,
        phone
    };

    
    existingData.push(newData);

    
    localStorage.setItem('personData', JSON.stringify(existingData));


    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
});
