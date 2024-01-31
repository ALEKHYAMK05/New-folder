const API_URL = 'https://crudcrud.com/api/84af526161bb4b6f9d0cb58b159851b6/ecommerce'; 

function addProduct() {
    const productName = document.getElementById('productName').value;
    const productExpense = parseInt(document.getElementById('productExpense').value);

    if (!productName || isNaN(productExpense)) {
        alert('Please enter valid data.');
        return;
    }

    const product = {
        name: productName,
        expense: productExpense
    };

    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
    .then(response => response.json())
    .then(() => {
        updateProductList();
        updateTotalExpense();
    })
    .catch(error => console.error('Error adding product:', error));

    document.getElementById('productName').value = '';
    document.getElementById('productExpense').value = '';
}

function updateProductList() {
    const productList = document.getElementById('products');
    productList.innerHTML = '';

    fetch(API_URL)
        .then(response => response.json())
        .then(existingProducts => {
            existingProducts.forEach((product, index) => {
                const listItem = document.createElement('li');
                listItem.textContent = `${product.name} - $${product.expense} `;

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.onclick = () => deleteProduct(product._id);
                listItem.appendChild(deleteButton);

                productList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
}

function deleteProduct(id) {
    fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        updateProductList();
        updateTotalExpense();
    })
    .catch(error => console.error('Error deleting product:', error));
}

function updateTotalExpense() {
    const totalExpense = document.getElementById('totalExpense');

    fetch(API_URL)
        .then(response => response.json())
        .then(existingProducts => {
            const expense = existingProducts.reduce((total, product) => total + product.expense, 0);
            totalExpense.textContent = `$${expense}`;
        })
        .catch(error => console.error('Error fetching products:', error));
}

window.onload = function () {
    updateProductList();
    updateTotalExpense();
};
