// Set default date to today's date
document.addEventListener('DOMContentLoaded', function () {
    const datePicker = document.getElementById('date-picker');
    const today = new Date();
    datePicker.value = today.toISOString().split('T')[0]; // Set default value to today's date
});

document.getElementById('list-type').addEventListener('change', function () {
    const listType = document.getElementById('list-type').value;
    const datePicker = document.getElementById('date-picker');
    const today = new Date();

    if (listType === 'week') {
        const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 1)); // Monday
        const endOfWeek = new Date(today.setDate(startOfWeek.getDate() + 6)); // Sunday
        datePicker.min = startOfWeek.toISOString().split('T')[0];
        datePicker.max = endOfWeek.toISOString().split('T')[0];
    } else if (listType === 'month') {
        const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        datePicker.min = startOfMonth.toISOString().split('T')[0];
        datePicker.max = endOfMonth.toISOString().split('T')[0];
    }
});

document.getElementById('add-button').addEventListener('click', function () {
    const itemInput = document.getElementById('item-input');
    const itemText = itemInput.value.trim();
    const selectedDate = document.getElementById('date-picker').value;

    if (itemText !== '' && selectedDate !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = `${itemText} (Date: ${selectedDate})`;

        const moveToInProgressButton = document.createElement('button');
        moveToInProgressButton.textContent = 'Move to In Progress';
        moveToInProgressButton.addEventListener('click', function () {
            document.getElementById('in-progress-list').appendChild(listItem);
            listItem.removeChild(moveToInProgressButton);
            listItem.appendChild(moveToCompletedButton);
        });

        const moveToCompletedButton = document.createElement('button');
        moveToCompletedButton.textContent = 'Move to Completed';
        moveToCompletedButton.addEventListener('click', function () {
            document.getElementById('completed-list').appendChild(listItem);
            listItem.removeChild(moveToCompletedButton);
        });

        listItem.appendChild(moveToInProgressButton);
        document.getElementById('pending-list').appendChild(listItem);

        itemInput.value = '';
    } else {
        alert('Please enter an item and select a date.');
    }
});