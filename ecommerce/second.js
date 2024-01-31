// Function to add a product
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

    
    let existingProducts = JSON.parse(localStorage.getItem('products')) || [];

    // Add the new product
    existingProducts.push(product);

    // Save updated products to local storage
    localStorage.setItem('products', JSON.stringify(existingProducts));

    // Update product list and total expense
    updateProductList();
    updateTotalExpense();

    // Clear input fields
    document.getElementById('productName').value = '';
    document.getElementById('productExpense').value = '';
}

// Function to update the product list on the page
function updateProductList() {
    const productList = document.getElementById('products');
    productList.innerHTML = '';

    // Retrieve products from local storage
    const existingProducts = JSON.parse(localStorage.getItem('products')) || [];

    existingProducts.forEach((product, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name} - $${product.expense} `;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteProduct(index);
        listItem.appendChild(deleteButton);

        productList.appendChild(listItem);
    });
}

// Function to delete a product
function deleteProduct(index) {
    // Retrieve existing products from local storage
    let existingProducts = JSON.parse(localStorage.getItem('products')) || [];

    // Remove the product at the specified index
    existingProducts.splice(index, 1);

    // Save updated products to local storage
    localStorage.setItem('products', JSON.stringify(existingProducts));

    // Update product list and total expense
    updateProductList();
    updateTotalExpense();
}

// Function to update the total expense on the page
function updateTotalExpense() {
    const totalExpense = document.getElementById('totalExpense');
    // Retrieve products from local storage
    const existingProducts = JSON.parse(localStorage.getItem('products')) || [];
    const expense = existingProducts.reduce((total, product) => total + product.expense, 0);
    totalExpense.textContent = `$${expense}`;
}

// Load existing products when the page loads
window.onload = function () {
    updateProductList();
    updateTotalExpense();
};