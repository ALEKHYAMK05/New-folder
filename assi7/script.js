document.addEventListener('DOMContentLoaded', function () {
    const expenseList = document.getElementById('expense-list');
    const expenseForm = document.getElementById('expense-form');

    // Load expenses from local storage
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    function renderExpenses() {
        expenseList.innerHTML = '';
        expenses.forEach((expense, index) => {
            const expenseItem = document.createElement('div');
            expenseItem.className = 'expense-item';

            const actions = document.createElement('div');
            actions.className = 'expense-actions';

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', () => editExpense(index));

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => deleteExpense(index));

            actions.appendChild(editButton);
            actions.appendChild(deleteButton);

            expenseItem.innerHTML = `<strong>${expense.title}</strong>: ₹${expense.amount} (${expense.category})`;
            expenseItem.appendChild(actions);

            expenseList.appendChild(expenseItem);
        });
    }

    function addExpense(title, amount, category) {
        expenses.push({ title, amount, category });
        saveExpenses();
        renderExpenses();
        expenseForm.reset();
    }

    function editExpense(index) {
        const editedExpense = prompt('Enter the new expense:');
        const editedAmount = prompt('Enter the new amount:');
        const editedCategory = prompt('Enter the new category:');
        if (editedExpense !== null && editedAmount !== null && editedCategory !== null) {
            expenses[index] = { title: editedExpense, amount: editedAmount, category: editedCategory };
            saveExpenses();
            renderExpenses();
        }
    }

    function deleteExpense(index) {
        const confirmDelete = confirm('Are you sure you want to delete this expense?');
        if (confirmDelete) {
            expenses.splice(index, 1);
            saveExpenses();
            renderExpenses();
        }
    }

    function saveExpenses() {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }

    renderExpenses();

    expenseForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const title = document.getElementById('expense').value;
        const amount = document.getElementById('amount').value;
        const category = document.getElementById('category').value;
        if (title && amount) {
            addExpense(title, amount, category);
        }
    });
});
