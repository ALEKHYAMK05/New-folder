const apiUrl = 'https://crudcrud.com/api/8c6a7b73775e45bcbc8111627fd6b1db/ecommerce';
let products = [];

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

    products.push(product);

    
    saveToCrudCrud();


    updateProductList();
    updateTotalExpense();


    document.getElementById('productName').value = '';
    document.getElementById('productExpense').value = '';
}

function updateProductList() {
    const productList = document.getElementById('products');
    productList.innerHTML = '';

    products.forEach((product, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name} - $${product.expense} `;
        
       
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteProduct(index);
        listItem.appendChild(deleteButton);

        productList.appendChild(listItem);
    });
}

function deleteProduct(index) {
    products.splice(index, 1);

    
    saveToCrudCrud();

    
    updateProductList();
    updateTotalExpense();
}

function updateTotalExpense() {
    const totalExpense = document.getElementById('totalExpense');
    const expense = products.reduce((total, product) => total + product.expense, 0);
    totalExpense.textContent = $${expense};
}

function saveToCrudCrud() {
    fetch(apiUrl, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(products)
    })
    .then(response => response.json())
    .then(data => console.log('Data saved successfully:', data))
    .catch(error => console.error('Error:', error));
}

function loadFromCrudCrud() {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        products = data || [];
        updateProductList();
        updateTotalExpense();
    })
    .catch(error => console.error('Error:', error));
}

loadFromCrudCrud();